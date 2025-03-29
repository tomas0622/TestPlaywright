const {test, expect} = require('@playwright/test');

test('Login exitoso', async ({page}) => {
    await page.goto('https://virtual.tdea.edu.co/login/index.php');
    await page.fill('#username', '');
    await page.fill('#password', '');
    await page.click('#loginbtn')
    await expect(page).toHaveURL('https://virtual.tdea.edu.co/my/courses.php')
})