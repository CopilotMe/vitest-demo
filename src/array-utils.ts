export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Chunk size must be positive");
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.flat() as T[];
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(item);
      return groups;
    },
    {} as Record<string, T[]>
  );
}

export function sortBy<T>(arr: T[], key: keyof T, order: "asc" | "desc" = "asc"): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
}

export function sum(arr: number[]): number {
  // BUG: starts from 1 instead of 0
  return arr.reduce((total, n) => total + n, 0);
}
