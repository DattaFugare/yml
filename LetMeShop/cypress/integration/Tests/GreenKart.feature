Feature: GREENKART Features

    GREENKART allow you buy the vegetabels online

    Scenario: Buy the vegetabels online from GREENKART

    Given user is on GREENKART appliaction
    When user  enter  name of vegetabels 
    Then GREENKART appliaction should show the vegetabels based on name
    And user able to add the product in Add to cart
    Then user able to see selected vegetabels in add to cart and PROCEED TO CHECKOUT
    And GREENKART appliaction allows user to place the order 
    Then user should select Choose Country and accpet the condtion
    And GREENKART appliaction allows user to proceed and user able to see successful massage