/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginpage from "../../../support/WebPages/loginpage";

Given("user is on LetMeShope appliaction login page",()=>
{
 cy.visit(Cypress.env('LetMeShope'))
})

When("user enter email and password",()=>{

    loginpage.LoginToApplication("dattatrayfugare77@gmail.com","dattasujay1")

})
Then("user should be login to LetMeShope appliaction",()=>{

    loginpage.verifyuseronloginpage();
})
When("user enters {string} and {string}",(email,password)=>{
    loginpage.LoginToApplication(email,password)

})
When("user enter email and password from fixture",()=>{
    cy.fixture('LoginData').then((data) => {
        const user = data.user[0]; // Accessing the first user from the array
        const user1 = data.user[1]; // Accessing the first user from the array
        loginpage.LoginToApplication(user.Email, user.password);
        cy.wait(2000)
        loginpage.SignOut();
        cy.wait(2000)
       loginpage.LoginToApplication(user1.Email, user1.password);
    })
}) 