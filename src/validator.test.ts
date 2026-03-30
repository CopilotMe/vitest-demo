import { describe, it, expect } from "vitest";
import { isEmail, isURL, isStrongPassword, isInRange, isEmpty } from "./validator";

describe("validator", () => {
  describe("isEmail", () => {
    it("validates correct email", () => {
      expect(isEmail("user@example.com")).toBe(true);
    });

    it("rejects invalid email", () => {
      expect(isEmail("not-an-email")).toBe(false);
    });

    it("rejects email without domain", () => {
      expect(isEmail("user@")).toBe(false);
    });
  });

  describe("isURL", () => {
    it("validates correct URL", () => {
      expect(isURL("https://example.com")).toBe(true);
    });

    it("rejects invalid URL", () => {
      expect(isURL("not a url")).toBe(false);
    });
  });

  describe("isStrongPassword", () => {
    it("accepts strong password with all requirements", () => {
      expect(isStrongPassword("MyP@ss123")).toBe(true);
    });

    it("rejects short password", () => {
      expect(isStrongPassword("Ab1!")).toBe(false);
    });

    it("requires special characters", () => {
      // This will FAIL — isStrongPassword() doesn't check for special chars
      expect(isStrongPassword("Password123")).toBe(false);
    });
  });

  describe("isInRange", () => {
    it("returns true for value in range", () => {
      expect(isInRange(5, 1, 10)).toBe(true);
    });

    it("includes boundary values", () => {
      expect(isInRange(1, 1, 10)).toBe(true);
      expect(isInRange(10, 1, 10)).toBe(true);
    });

    it("returns false for value out of range", () => {
      expect(isInRange(11, 1, 10)).toBe(false);
    });
  });

  describe("isEmpty", () => {
    it("returns true for null/undefined", () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });

    it("returns true for empty string", () => {
      expect(isEmpty("")).toBe(true);
      expect(isEmpty("   ")).toBe(true);
    });

    it("returns true for empty array", () => {
      expect(isEmpty([])).toBe(true);
    });

    it("returns true for empty object", () => {
      expect(isEmpty({})).toBe(true);
    });

    it("returns false for non-empty values", () => {
      expect(isEmpty("hello")).toBe(false);
      expect(isEmpty([1])).toBe(false);
      expect(isEmpty({ a: 1 })).toBe(false);
    });
  });
});
