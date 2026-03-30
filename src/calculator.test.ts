import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide, percentage } from "./calculator";

describe("calculator", () => {
  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("adds negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("subtracts two numbers", () => {
      expect(subtract(10, 3)).toBe(7);
    });

    it("handles negative result", () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      // This will FAIL — multiply() has a bug (adds instead of multiplying)
      expect(multiply(4, 5)).toBe(20);
    });

    it("multiplies by zero", () => {
      expect(multiply(100, 0)).toBe(0);
    });

    it("multiplies negative numbers", () => {
      expect(multiply(-3, 4)).toBe(-12);
    });
  });

  describe("divide", () => {
    it("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    it("throws on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero");
    });

    it("handles decimal results", () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });
  });

  describe("percentage", () => {
    it("calculates percentage", () => {
      expect(percentage(25, 100)).toBe(25);
    });

    it("handles zero total", () => {
      expect(percentage(10, 0)).toBe(0);
    });
  });
});
