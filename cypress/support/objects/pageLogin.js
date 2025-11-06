class pageLogin{
    passwordTyped = false
    typeInputUserName(){
        return cy.get('input[placeholder=Username]')
    }

    typeTypeUser(user){
        this.typeInputUserName().should('be.visible').type(user)
    }

    typeInputPassword(){
        return cy.get('input[placeholder=Password]')
    }

    typeTypePassword(password){
        this.typeInputPassword().should('be.visible').type(password)
        this.passwordTyped = true
    }

    typeViewPassword(){
        if (this.passwordTyped) {
            cy.get('body').then(($body)=>{
                $body.find('div.mat-mdc-form-field-icon-suffix').length > 0
                ? cy.get('div.mat-mdc-form-field-icon-suffix').click() && cy.wait(500)
                : cy.log('El elemento seleccionado no existe o no se encontro')
            })
        }else {
            throw new Error("No se ingreso contraseña de prueba.")
        }
    }

    typeButtonLogin(){
        cy.contains('app-login button', 'Login').then(($btn)=>{
            if($btn.length > 0){
                cy.wrap($btn).click()
            }else{
                throw new Error("No se encontro el boton de login")
            }
        })
    }

    ejecutarLogin(user,password){
        this.typeTypeUser(user)
        this.typeTypePassword(password)
        this.typeViewPassword()
        this.typeButtonLogin()
    }
}module.exports = new pageLogin();