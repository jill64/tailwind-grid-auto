import { expect, test } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto('/tailwind-grid-auto')
  await expect(
    page.getByRole('heading', { name: 'tailwind-grid-auto' })
  ).toBeVisible()
})
