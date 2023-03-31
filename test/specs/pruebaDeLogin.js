import LoginPage from '../pageobjects/login.page.js'

describe('Suite de prueba en pages', () => {
    it('Iniciar sesión con las credenciales correctas', async () => {
        await LoginPage.open()
        await LoginPage.login('Charlie', 'pwd')
        await expect(LoginPage.message).toHaveTextContaining('Welcome,')
        await browser.pause(2000)
    })
})