import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    reporters: ["verbose", "junit"],
    outputFile: { junit: "test-results/results.xml" },
  },
});
