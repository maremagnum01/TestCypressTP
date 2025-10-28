import checkOut from "../../fixtures/chekOut.json"

class pageCheckOut{
    nameTyped = false
    addressOne = false
    addressTwo = false
    pinCode = false
    state = false

    typeGetName (){
        return cy.get('input[placeholder="Name"]')
    }

    typeWriteName (name = null ) {
        this.typeGetName().type(name)
        this.nameTyped = true
    }

    typeGetAddressOne(){
        return cy.get('input[placeholder="Address Line 1"]')
    }

    typeWriteAddressOne(address = null){
        this.typeGetAddressOne().type(address)
        this.addressOne = true
    }

    typeGetAddressTwo(){
        return cy.get('input[placeholder="Address Line 2"]')
    }

    typeWriteAddressTwo(address = null){
        this.typeGetAddressTwo().type(address)
        this.addressTwo = true
    }

    typeGetPinCode(){
        return cy.get('input[placeholder="Pincode"]')
    }

    typeWritePinCode(pincode = null){
        this.typeGetPinCode().type(pincode)
        this.pinCode = true
    }
    
    typeGetState(){
        return cy.get('input[placeholder="State"]')
    }

    typeWriteState(state = null){
        this.typeGetState().type(state)
        this.state = true
    }

    typeExecFormCheckOut(name1, addressOne1, addressTwo2, pinCode0, state0){
        this.typeWriteName(name1)
        this.typeWriteAddressOne(addressOne1)
        this.typeWriteAddressTwo(addressTwo2)
        this.typeWritePinCode(pinCode0)
        this.typeWriteState(state0)
    }
}module.exports = new pageCheckOut()