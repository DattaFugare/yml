
/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import "cypress-iframe"

Given('user on Automation practice website',()=>{

    cy.visit(Cypress.env("AutomationPractice"))
    
})
When('user Automation web elements using cypress and javascript',()=>{

    //Radio Button Example
    cy.get('input[value="radio1"]').click().should("be.checked")
  //Checkbox Example
  cy.get("input[value='option1']").check().should("be.checked").and('have.value',"option1")

  cy.get("input[value='option1']").uncheck().should("not.be.checked").and('have.value',"option1")

  cy.get("input[value='option2']").should("not.be.checked");
  cy.get("input[value='option2']").should("not.be.checked");


  cy.get("input[type='checkbox']").check(["option2","option3"]);


  // static Dropdown Example , have select tag

  cy.get("select").select("option3").should("have.value","option3")

  // dyymanic   Dropdown Example , not have select tag
   cy.get("#autocomplete").type("ind")
   cy.get(".ui-menu-item-wrapper").each((ele,index,list)=>{
    if(ele.text()==="India")
    {
       cy.wrap( ele).click()
    }
   })
   cy.get("#autocomplete").should("have.value","India")


   // visible and unvisible
  cy.get("#hide-textbox").click();
   //cy.get("#displayed-text").should("be.visible")
   cy.get("#show-textbox").click();
   cy.get("#displayed-text").should("be.visible")

   // alrt  , cypress auto handel alrt and pups.
    // inner fire event and event is alrt:window it accept by defult.
   cy.get("#alertbtn").click();

   
    // by firing event we can verify the alrt is handel.

    cy.on("window:alert",(alrtStr)=>{

        expect(alrtStr).to.equal('Hello , share this practice page and share your knowledge')
    
       })

   // inner fire event and event is window:confirm it accept by defult.
   cy.get("#confirmbtn").click();

    // by firing event we can verify the alrt is handel.
   cy.on("window:confirm",(alrtStr)=>{

    expect(alrtStr).to.equal('Hello , Are you sure you want to confirm?')

   })
     //  handling web table

     cy.get("tbody tr  td:nth-child(2)").each((ele,index,list)=>{

        const text =ele.text()

        if(text.includes("Python"))
        {
            //cy.log(ele.next().text())
            cy.get("tbody tr  td:nth-child(2)").eq(index).next().then((prize)=>{
                const Prize=prize.text()
                expect(Prize).to.equal("25")
            })
        }
     })


       // mouse over on popup: cypress not support  
       cy.contains("Reload").click({force: true});
       cy.get("#mousehover").invoke("show")
       cy.contains("Top").click({force: true});
       cy.url().should("include","top")
       
       //  handel  iframe  ,  npm install -D cypress-iframe
      cy.frameLoaded("#courses-iframe")
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('h1[class*="pricing-title"]').should("have.length",2)



///handel tabs or seperate window





  

   //////////////////// handel tabs 

   // cypress cant handel child window defult
   // need ti tuik the applicarrtion.
// invoke is jquery
// And cypress not allow cross browsering



//    cy.get("#opentab").invoke("removeAttr","target").click();
//    cy.origin("https://www.qaclickacademy.com/",()=>{
//     cy.get('#navbarSupportedContent a[href*="about"]').click();
//     cy.get(".mt-50 h2").should("contain","Welcome to QAClick Academy ")
//    })


   // other way using prop() method

//    cy.get('#opentab').then((ele)=>{

//            const url =ele.prop('href')
//            cy.visit(url)
//            cy.origin(url,()=>{
//             cy.get(".mt-50 h2").should("contain","Welcome to QAClick Academy ")
//            })
          
//    })
   
  
})


Then('user should get handson on the Automation of web elements',()=>{
    console.log("done dona done")
})