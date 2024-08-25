/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import GREENKART from "../../../support/WebPages/GREENKART";

Given("user is on GREENKART appliaction",()=>{

    cy.visit(Cypress.env('GREENKART'))

})

When('user  enter  name of vegetabels',()=>{
    GREENKART.searchVegetabels("Beetroot");
})

Then('GREENKART appliaction should show the vegetabels based on name',()=>{

    GREENKART.verifyvegetabelvisible("Beetroot");
})
Then("user able to add the product in Add to cart",()=>{
    
    GREENKART.addToCart();
})
Then("user able to see selected vegetabels in add to cart and PROCEED TO CHECKOUT",()=>{


    GREENKART.Cartpreview();
})
Then("GREENKART appliaction allows user to place the order",()=>{
    
    GREENKART.Placeorder();
})
Then("user should select Choose Country and accpet the condtion",()=>{
    GREENKART.ChkAgree();
    
})
Then("GREENKART appliaction allows user to proceed and user able to see successful massage",()=>{
    GREENKART.proceed();
    
})