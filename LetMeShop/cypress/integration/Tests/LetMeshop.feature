Feature: LetMeShope Login Feature

    Scenario:  LetMeShope Login Scenario
    Given user is on LetMeShope appliaction login page
    When user enter email and password 
    Then user should be login to LetMeShope appliaction


      Scenario Outline: LetMeShope Login Scenario
    Given user is on LetMeShope appliaction login page
    When user enters "<email>" and "<password>"
    Then user should be login to LetMeShope appliaction

    Examples:
      | email                          | password       |
      | dattatrayfugare77@gmail.com     | dattasujay1    |
      | testuser@example.com            | testpassword   | 

      
    Scenario:  LetMeShope Login Scenario
    Given user is on LetMeShope appliaction login page
    When user enter email and password from fixture
    Then user should be login to LetMeShope appliaction


    