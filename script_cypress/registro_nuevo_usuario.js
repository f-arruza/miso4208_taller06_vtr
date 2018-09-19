describe('Los estudiantes Registro', function() {
    it('Visitar Los estudiantes y registrar nueva cuenta.', function() {

        // Registrar nueva cuenta
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()

        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Fernando")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Arruza")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("f.arruza@uniandes.edu.co")
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("xxxxxxxxxx")
        cy.get('.cajaSignUp').find('[type="checkbox"]').check()
        cy.get('.cajaSignUp').find('[name="idPrograma"]').select('16')
        cy.get('.cajaSignUp').find('input[name="acepta"]').check()
        cy.get('.cajaSignUp').contains('Registrarse').click()

        //cy.contains('Registro exitoso!')
        cy.contains('Ocurrió un error activando tu cuenta')
        cy.get('.sweet-alert').find('[type="button"]').click()
        cy.screenshot()

        // Se recibe un correo solicitando la ACTIVACION de la cuenta
    })
})
