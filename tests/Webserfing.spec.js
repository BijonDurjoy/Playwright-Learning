import { test, expect } from "@playwright/test";

test("Webserfing", async ({ page }) => {
  //Go to website
  await page.goto("https://www.saucedemo.com/");

  //verify
  await expect(page).toHaveTitle("Swag Labs");
});
