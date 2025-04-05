import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    //  Tell Vitest to exclude the Playwright tests folder
    exclude: ["**/node_modules/**", "**/tests/**"], // This assumes ONLY the Playwright tests are in the tests folder.
  },
});
