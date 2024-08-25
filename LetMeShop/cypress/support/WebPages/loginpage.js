class Loginpag {
    elements = {
      usermail: () => cy.get("#userEmail"),
      userpassword: () => cy.get("#userPassword"),
      login: () => cy.get("#login"),
      SignOut: () => cy.contains(" Sign Out ")
    };
  
    LoginToApplication(email, password) {
      this.elements.usermail().type(email);
      this.elements.userpassword().type(password);
      this.elements.login().click();
    }
    verifyuseronloginpage()
    {
          this.elements.SignOut().should("be.visible")
    }
    SignOut()
    {
          this.elements.SignOut().click();
    }
  }
  
  export default new Loginpag();
  