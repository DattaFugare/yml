
 
class GREENKART
{

    elements={

        search: ()=> cy.get("input[type='search']"),
        product: ()=> cy.get(".product "),
        cart: ()=> cy.contains("ADD TO CART"),
        carticon:()=>  cy.get('.cart-icon > img'),
       vegeincartpreview: ()=>cy.get("div[class='cart-preview active'] div div p[class='product-name']"),
        cartpreview: ()=> cy.get("div.cart-preview "),
        placeorder: ()=> cy.contains("Place Order"),
        dropdown: ()=> cy.get("div select"),
        Coountrydropdown: ()=> cy.get("select option[value='India']"),
        chkAgree: ()=> cy.get(".chkAgree"),
        Proceed: ()=> cy.contains("Proceed"),
    }

    searchVegetabels(String)
    {
          this.elements.search().type(String)
    }

    verifyvegetabelvisible(String)
    {
        this.elements.product().contains(String).should("be.visible");

    }

     addToCart()

    {
        this.elements.cart().click();
       // this.elements.carticon.click();
    }
    Cartpreview()
    {
        this.elements.carticon().click();
        this.elements.vegeincartpreview().should("be.visible");
        this.elements.cartpreview().contains("PROCEED TO CHECKOUT").click();
    }
    Placeorder()
    {
        this.elements.placeorder().click();
    }

    ChkAgree()
    {
        this.elements.dropdown().click();
        this.elements.chkAgree().click();
    }

    proceed()
    {
        this.elements.Proceed().click()
    }
}
export default new GREENKART