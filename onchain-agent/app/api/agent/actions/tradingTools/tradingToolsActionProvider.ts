import { z } from "zod";
import { ActionProvider } from "@coinbase/agentkit";
import { CreateAction } from "@coinbase/agentkit";
import { EvmWalletProvider } from "@coinbase/agentkit";
import { encodeFunctionData, Hex } from "viem";
import { ISwapRouter_ABI } from "./abis/ISwapRouter";
import { CreateLimitOrderSchema, CheckLimitOrderSchema } from "./schemas";
import { pythActionProvider } from "@coinbase/agentkit";
import { v4 as uuidv4 } from "uuid";
import ERC20_ABI from "./abis/ERC20_ABI";


const ISwapRouter_ADDRESS = "0xe592427a0aece92de3edee1f18e0157c05861564"; 
const USDT_ADDRESS = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9";

export interface LimitOrder {
  id: string;
  tokenSymbol: string;
  amount: string;
  limitPrice: string;
  destination: string;
  status: "pending" | "filled";
  txHash?: string;
}

const limitOrders: LimitOrder[] = [];

export class TradingToolsActionProvider extends ActionProvider<EvmWalletProvider> {
  private pythProvider = pythActionProvider();
  private pollingInterval: ReturnType<typeof setInterval> | null = null;


  constructor() {
    super("tradingTools", []);
  }

  @CreateAction({
    name: "create_limit_order",
    description: "Create a USDT limit order for a token on Arbitrum.",
    schema: CreateLimitOrderSchema,
  })
  async createLimitOrder(
    _walletProvider: EvmWalletProvider,
    args: z.infer<typeof CreateLimitOrderSchema>
  ): Promise<string> {
    const orderId = uuidv4();
    limitOrders.push({
      id: orderId,
      tokenSymbol: args.tokenSymbol,
      amount: args.amount,
      limitPrice: args.limitPrice,
      destination: args.destination,
      status: "pending",
    });

    return `Limit order created with ID ${orderId}, status: pending`;
  }

  async executeOrder(walletProvider: EvmWalletProvider, order: LimitOrder, tokenAddress: string): Promise<void> {
    const priceFeedID = await this.pythProvider.fetchPriceFeed({ tokenSymbol: order.tokenSymbol });
    const currentPrice = await this.pythProvider.fetchPrice({ priceFeedID });

    if (parseFloat(currentPrice) <= parseFloat(order.limitPrice)) {
      //  USDT
      const approveData = encodeFunctionData({
        abi: ERC20_ABI,
        functionName: "approve",
        args: [ISwapRouter_ADDRESS, BigInt(order.amount)],
      });

      const approveTxHash = await walletProvider.sendTransaction({
        to: USDT_ADDRESS,
        data: approveData,
      });
      await walletProvider.waitForTransactionReceipt(approveTxHash);

      // Swap
      const swapData = encodeFunctionData({
        abi: ISwapRouter_ABI,
        functionName: "exactInputSingle",
        args: [
          USDT_ADDRESS,
          tokenAddress,
          3000,
          BigInt(order.amount),
          0n,
          order.destination as Hex,
          BigInt(Math.floor(Date.now() / 1000) + 60),
        ],
      });

      const swapTxHash = await walletProvider.sendTransaction({
        to: ISwapRouter_ADDRESS,
        data: swapData,
      });

      await walletProvider.waitForTransactionReceipt(swapTxHash);

      order.status = "filled";
      order.txHash = swapTxHash;
    }
  }

  /**
   * 自动轮询执行 pending 限价单
   * @param walletProvider 钱包实例
   * @param tokenMap tokenSymbol -> tokenAddress 映射
   * @param intervalMs 轮询间隔 (毫秒)
   */
  startPollingPendingOrders(walletProvider: EvmWalletProvider, tokenMap: Record<string, string>, intervalMs = 10000) {
    if (this.pollingInterval) return; // 已经在轮询

    this.pollingInterval = setInterval(async () => {
      const pendingOrders = limitOrders.filter(o => o.status === "pending");
      for (const order of pendingOrders) {
        const tokenAddress = tokenMap[order.tokenSymbol];
        if (!tokenAddress) continue;
        try {
          await this.executeOrder(walletProvider, order, tokenAddress);
        } catch (err) {
          console.error(`Error executing order ${order.id}:`, err);
        }
      }
    }, intervalMs);
  }

  stopPolling() {
  if (this.pollingInterval) {
    clearInterval(this.pollingInterval);
    this.pollingInterval = null;
  }
 }


  @CreateAction({
    name: "check_limit_order",
    description: "Check the status of a previously created limit order.",
    schema: CheckLimitOrderSchema,
  })
  async checkLimitOrder(
    _walletProvider: EvmWalletProvider,
    args: z.infer<typeof CheckLimitOrderSchema>
  ): Promise<string> {
    const order = limitOrders.find(o => o.id === args.orderId);
    if (!order) return `Order ${args.orderId} not found.`;

    return `Order ${args.orderId} status: ${order.status}${order.txHash ? `, txHash: ${order.txHash}` : ""}`;
  }

  supportsNetwork = (network: any) => true;
}

export const tradingToolsActionProvider = () => new TradingToolsActionProvider();
