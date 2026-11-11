import { test, expect } from "@playwright/test";

test("successful login", async ({ page }) => {
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;
  const url = process.env.BASE_URL;

  if (!email || !password) {
    throw new Error(
      "Set BASE_URL, TEST_EMAIL and TEST_PASSWORD in your local .env file."
    );
  }

  await page.goto(url);

  const emailField = page.getByPlaceholder("Email Address");
  const passwordField = page.getByPlaceholder("Password");

  await expect(emailField).toBeVisible();
  await expect(passwordField).toBeVisible();

  await emailField.fill(email);
  await passwordField.fill(password);

  await page.getByRole("button", { name: "Login" }).click();
});
