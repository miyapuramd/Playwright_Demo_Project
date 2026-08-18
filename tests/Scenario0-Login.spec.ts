import { test, expect } from '@playwright/test';

test.describe('smoke', () => {

  test('Login to Pre‑Refund WebPortal - Script 0 - JPM @smoke', async ({ page }) => {
    test.setTimeout(180000);

    await test.step('1. Log into the Pre‑Refund WebPortal and accept privacy notice', async () => {
      await page.goto('https://boozallen06.pegalabs.io/prweb/app/pre-refund?portal=WebPortal');
      await page.getByRole('textbox', { name: 'User name *' }).fill('PerezMata_Jesus@bah.com');
      await page.getByRole('textbox', { name: 'Password *' }).fill('HolaTest2026!');
      await page.getByRole('button', { name: 'Log in' }).click();
      await page.getByTestId(':privacy-dialog:accept').click();
    });

  });

});
