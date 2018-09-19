describe('Los estudiantes Registro', function() {
    it('Visitar Los estudiantes y registrar nueva cuenta.', function() {

        // Iniciar sesión
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("f.arruza@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234567890")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.navbar').find('[id="cuenta"]').click()
        cy.screenshot()
        cy.wait(4000)

        // Cerrar sesión
        cy.get('.navbar').contains('Salir').click()

        // Intento de registro cuenta ya existente
        cy.contains('Ingresar').click()

        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Fernando")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Arruza")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("f.arruza@uniandes.edu.co")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("xxxxxxxxxx")
        cy.get('.cajaSignUp').find('[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('[name="idPrograma"]').select('16')
        cy.get('.cajaSignUp').find('input[name="acepta"]').check()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.screenshot()
        cy.contains('Ocurrió un error activando tu cuenta')
    })
})
