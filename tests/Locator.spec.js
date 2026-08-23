import { test, expect } from "@playwright/test";

test("Locator test", async ({ page }) => {
  //Go to website
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");

  //Buton click
  await page.locator("//input[@id='login-button']").click();

  //Verify successfull login
  await expect(page.locator(".title")).toHaveText("Products");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
