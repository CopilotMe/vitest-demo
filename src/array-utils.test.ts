import { describe, it, expect } from "vitest";
import { unique, chunk, flatten, groupBy, sortBy, sum } from "./array-utils";

describe("array-utils", () => {
  describe("unique", () => {
    it("removes duplicates", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it("works with strings", () => {
      expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
    });

    it("returns empty array for empty input", () => {
      expect(unique([])).toEqual([]);
    });
  });

  describe("chunk", () => {
    it("splits array into chunks", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it("handles chunk size larger than array", () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    it("throws on zero or negative size", () => {
      expect(() => chunk([1], 0)).toThrow("Chunk size must be positive");
    });
  });

  describe("flatten", () => {
    it("flattens nested arrays", () => {
      expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
    });

    it("handles mixed nested and flat", () => {
      expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });
  });

  describe("groupBy", () => {
    it("groups objects by key", () => {
      const data = [
        { name: "Alice", dept: "eng" },
        { name: "Bob", dept: "sales" },
        { name: "Carol", dept: "eng" },
      ];
      const result = groupBy(data, "dept");
      expect(result.eng).toHaveLength(2);
      expect(result.sales).toHaveLength(1);
    });
  });

  describe("sortBy", () => {
    it("sorts ascending by key", () => {
      const data = [{ n: 3 }, { n: 1 }, { n: 2 }];
      expect(sortBy(data, "n")).toEqual([{ n: 1 }, { n: 2 }, { n: 3 }]);
    });

    it("sorts descending", () => {
      const data = [{ n: 1 }, { n: 3 }, { n: 2 }];
      expect(sortBy(data, "n", "desc")).toEqual([{ n: 3 }, { n: 2 }, { n: 1 }]);
    });
  });

  describe("sum", () => {
    it("sums an array of numbers", () => {
      // This will FAIL — sum() starts from 1 instead of 0
      expect(sum([1, 2, 3])).toBe(6);
    });

    it("returns 0 for empty array", () => {
      expect(sum([])).toBe(0);
    });
  });
});
