import { test, expect } from "@playwright/test";

test("Upload file test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.locator("a[href='/upload']").click();
  await page
    .locator("#file-upload")
    .setInputFiles("/home/bijon/Downloads/test.pdf");

  await page.locator("#file-submit").click();

  await expect(page.locator("div[class='example'] h3")).toHaveText(
    "File Uploaded!",
  );
});
