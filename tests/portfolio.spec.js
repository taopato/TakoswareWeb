import { expect, test } from '@playwright/test';

test('portfolio renders key content without horizontal overflow', async ({ page }) => {
  await page.goto('/tarikcetinturk');
  await expect(page.getByRole('heading', { level: 1, name: 'Tarık Çetintürk' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Roomora' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Gezzenti' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'BuiltWhys Shorts Factory' })).toBeVisible();
  await expect(page.getByText('Doğu Akdeniz Üniversitesi')).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBeFalsy();
});

test('all portfolio images load successfully', async ({ page }) => {
  await page.goto('/tarikcetinturk');
  const images = page.locator('img:visible');

  for (let index = 0; index < await images.count(); index += 1) {
    const currentImage = images.nth(index);
    await currentImage.scrollIntoViewIfNeeded();
    await expect.poll(() => currentImage.evaluate((image) => image.naturalWidth)).toBeGreaterThan(0);
  }
});

test('mobile navigation opens and reaches projects', async ({ page }) => {
  test.skip((page.viewportSize()?.width || 0) > 640, 'Mobil menü yalnızca dar görünümde gösterilir.');
  await page.goto('/tarikcetinturk');
  await page.getByRole('button', { name: 'Menüyü aç' }).click();
  await page.getByRole('link', { name: 'Projeler', exact: true }).click();
  await expect(page.locator('#projeler')).toBeInViewport();
  await expect(page.getByRole('button', { name: 'Menüyü aç' })).toBeVisible();
});
