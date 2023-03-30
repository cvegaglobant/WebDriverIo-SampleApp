describe('Primer ejemplo de testing', () => {
    it('Abrir el navegador con la url especificada', async () => {
        await browser.url('http://uitestingplayground.com/sampleapp')
        await browser.pause(5000)
        console.log(await browser.getUrl())
    })
})

describe("Primera test suite para la web - SampleApp", () => {
    it('Escribir sobre los campos de usuario y password', async () => {
        await browser.url('http://uitestingplayground.com/sampleapp')

        const userName = await $('input[name="UserName"]');
        const password = await $('input[name="Password"]');

        await userName.setValue('usernameExample');
        await password.setValue('sdjhadjksadhjadhaj');

        const nombre = await userName.getValue();
        const pass = await password.getValue();

        await browser.pause(2000)

        await expect(userName).toHaveValue(nombre);
        await expect(password).toHaveValue(pass);
    })

    it('Iniciar sesión correctamente en la web - sampleApp', async () => {
        await browser.url('http://uitestingplayground.com/sampleapp')

        const userName = await $('input[name="UserName"]');
        const password = await $('input[name="Password"]');
        const message = await $('#loginstatus')
        const botonLogin = await $('#login')

        await userName.setValue('usernameExample');
        await password.setValue('pwd');
        await botonLogin.click();

        await browser.pause(2000)

        await expect(message).toHaveTextContaining('Welcome,')

    })

    it('Credenciales invalidas al iniciar sesión - sampleApp', async () => {
        await browser.url('http://uitestingplayground.com/sampleapp')


        const message = await $('#loginstatus')
        const botonLogin = await $('#login')

        await botonLogin.click();

        await browser.pause(2000)

        await expect(message).toHaveTextContaining('Invalid username/password')

    })

    it.only('Cerrar sesión correctamente en la web - sampleApp', async () => {
        await browser.url('http://uitestingplayground.com/sampleapp')

        const userName = await $('input[name="UserName"]');
        const password = await $('input[name="Password"]');
        const message = await $('#loginstatus')
        const botonLogin = await $('#login')

        await userName.setValue('usernameExample');
        await password.setValue('pwd');
        await botonLogin.click();

        await browser.pause(2000)

        await botonLogin.click();

        await expect(message).toHaveTextContaining('User logged out')

        await browser.pause(2000)
    })
})