import { expect, test } from '@playwright/test';

test('portfolio renders without horizontal overflow', async ({ page }) => {
  await page.goto('/tarikcetinturk');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Sağlam sistemler');
  await expect(page.getByText('Roomora', { exact: true }).first()).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBeFalsy();
});

test('mobile navigation opens and reaches products', async ({ page }) => {
  test.skip((page.viewportSize()?.width || 0) > 640, 'Mobil menü yalnızca dar görünümde gösterilir.');
  await page.goto('/tarikcetinturk');
  await page.getByRole('button', { name: 'Menüyü aç' }).click();
  await page.getByRole('link', { name: 'Ürünler', exact: true }).click();
  await expect(page.locator('#urunler')).toBeInViewport();
});
