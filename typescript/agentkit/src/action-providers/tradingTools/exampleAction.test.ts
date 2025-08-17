/**
 * ExampleAction Tests
 */

import { TradingToolsActionProvider } from "./tradingToolsActionProvider";
import { ExampleActionSchema } from "./schemas";

describe("Example Action", () => {
  // default setup: instantiate the provider
  const provider = new TradingToolsActionProvider();

  describe("schema validation", () => {
    it("should validate example action schema", () => {
      const validInput = {
        fieldName: "test",
        amount: "1.0",
      };
      const parseResult = ExampleActionSchema.safeParse(validInput);
      expect(parseResult.success).toBe(true);
      if (parseResult.success) {
        expect(parseResult.data.fieldName).toBe("test");
        expect(parseResult.data.amount).toBe("1.0");
      }
    });

    it("should reject invalid example action input", () => {
      const invalidInput = {
        fieldName: "",
        amount: "invalid",
      };
      const parseResult = ExampleActionSchema.safeParse(invalidInput);
      expect(parseResult.success).toBe(false);
    });
  });

  describe("example action execution", () => {
    it("should execute example action", async () => {
      const args = {
        fieldName: "test",
        amount: "1.0",
      };
      const result = await provider.exampleAction(args);
      expect(result).toContain(args.fieldName);
    });
  });
});
