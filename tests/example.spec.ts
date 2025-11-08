import { expect, test } from '@playwright/test'
import { BASE_URL } from '../constants/cores'

test('page has title', async ({ page }) => {
    await page.goto(BASE_URL)

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Pokemon Memories/)
})
