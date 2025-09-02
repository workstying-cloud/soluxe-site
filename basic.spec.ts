
import { test, expect } from "@playwright/test";

test("copy ETH, copy all, counter works", async ({ page }) => {
  await page.goto("/");
  const eth = "0x7D651888C22737694a6b57FF07452D9fB3986ee2";
  await page.getByText("Ethereum (ETH / ERC-20)").waitFor();
  await page.getByText(eth).waitFor();
  await page.getByRole('button', { name: 'Copy' }).first().click();
  await page.getByRole('button', { name: 'Copy all wallets' }).click();
  await page.getByRole('button', { name: '+ $1000' }).click();
  await expect(page.getByText("enjoyed so far")).toBeVisible();
});
