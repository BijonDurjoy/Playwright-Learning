import { test, expect } from "@playwright/test";

test("Download file test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.locator("a[href='/download']").click();

  // Start waiting for download before clicking. Note no await.
  const downloadPromise = page.waitForEvent("download");
  await page.locator("a[href='download/sample.pdf']").click();
  const download = await downloadPromise;

  // Wait for the download process to complete and save the downloaded file somewhere.
  const filename = download.suggestedFilename();
  await download.saveAs("/home/bijon/Downloads/" + filename);

  //Verify the downloaded file
  await expect(filename).toBe("sample.pdf");
});
