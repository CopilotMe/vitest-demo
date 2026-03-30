import { describe, it, expect } from "vitest";
import { formatCurrency, formatDate, truncate, slugify, capitalize } from "./formatter";

describe("formatter", () => {
  describe("formatCurrency", () => {
    it("formats USD", () => {
      expect(formatCurrency(1234.5)).toBe("$1234.50");
    });

    it("formats EUR", () => {
      expect(formatCurrency(99.9, "EUR")).toBe("€99.90");
    });

    it("formats BGN", () => {
      expect(formatCurrency(42, "BGN")).toBe("лв42.00");
    });

    it("uses currency code for unknown currencies", () => {
      expect(formatCurrency(100, "JPY")).toBe("JPY100.00");
    });
  });

  describe("formatDate", () => {
    it("formats a date as YYYY-MM-DD", () => {
      expect(formatDate(new Date(2026, 2, 30))).toBe("2026-03-30");
    });

    it("pads single-digit month and day", () => {
      expect(formatDate(new Date(2026, 0, 5))).toBe("2026-01-05");
    });
  });

  describe("truncate", () => {
    it("returns short text unchanged", () => {
      expect(truncate("hello", 10)).toBe("hello");
    });

    it("truncates long text with ellipsis", () => {
      // This will FAIL — truncate() adds ".." instead of "..."
      expect(truncate("This is a very long sentence", 10)).toBe("This is a ...");
    });
  });

  describe("slugify", () => {
    it("converts text to slug", () => {
      expect(slugify("Hello World")).toBe("hello-world");
    });

    it("removes special characters", () => {
      expect(slugify("Hello, World! #2026")).toBe("hello-world-2026");
    });

    it("trims leading/trailing hyphens", () => {
      expect(slugify("--hello--")).toBe("hello");
    });
  });

  describe("capitalize", () => {
    it("capitalizes first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("handles empty string", () => {
      expect(capitalize("")).toBe("");
    });
  });
});
