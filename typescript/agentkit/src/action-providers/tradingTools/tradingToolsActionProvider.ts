/**
 * TradingTools Action Provider
 *
 * This file contains the implementation of the TradingToolsActionProvider,
 * which provides actions for tradingTools operations.
 *
 * @module tradingTools
 */

import { z } from "zod";
import { ActionProvider } from "../actionProvider";
import { Network } from "../../network";
import { CreateAction } from "../actionDecorator";
import { ExampleActionSchema } from "./schemas";

/**
 * TradingToolsActionProvider provides actions for tradingTools operations.
 *
 * @description
 * This provider is designed to provide blockchain-agnostic operations.
 * It supports all blockchain networks.
 */
export class TradingToolsActionProvider extends ActionProvider {
  /**
   * Constructor for the TradingToolsActionProvider.
   */
  constructor() {
    super("tradingTools", []);
  }

  /**
   * Example action implementation.
   * Replace or modify this with your actual action.
   *
   * @description
   * This is a template action that demonstrates the basic structure.
   * Replace it with your actual implementation.
   *
   * @param args - Arguments defined by ExampleActionSchema
   * @returns A promise that resolves to a string describing the action result
   */
  @CreateAction({
    name: "example_action",
    description: `
    Example action for tradingTools provider.

    This action demonstrates the basic structure of an action implementation.
    Replace this description with your actual action's purpose and behavior.

    Include:
    - What the action does
    - Required inputs and their format
    - Expected outputs
    - Any important considerations or limitations
  `,
    schema: ExampleActionSchema,
  })
  async exampleAction(args: z.infer<typeof ExampleActionSchema>): Promise<string> {
    // TODO: Implement your action logic here
    // Example implementation:
    return `Example action called with ${args.fieldName}`;
  }

  /**
   * Checks if this provider supports the given network.
   *
   * @param _ - The network to check support for
   * @returns True if the network is supported
   */
  supportsNetwork(_: Network): boolean {
    // all networks
    return true;
  }
}

/**
 * Factory function to create a new TradingToolsActionProvider instance.
 *
 * @returns A new TradingToolsActionProvider instance
 */
export const tradingToolsActionProvider = () => new TradingToolsActionProvider();
