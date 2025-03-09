import { test, expect } from "@playwright/test";

test("user can watch venue details", async ({ page }) => {
  // Navigate to home page
  await page.goto("/");

  // Wait for venue list to load
  await page.waitForSelector("#venue-container");

  // Click on the first venue on the list
  await page.locator("#venue-container > a").first().click();

  // Wait for the content details (h1) to load
  await page.waitForSelector(`h1:has-text("Venue details")`);

  // Verify that the heading includes the words "Venue details"
  const heading = await page.locator("h1").textContent();
  expect(heading).toContain("Venue details");
});
