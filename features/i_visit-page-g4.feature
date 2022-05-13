Feature: Visit Page

  @user1 @web
  Scenario: As a non-registered user I can visit a previously created page
    Given I navigate to page "<NEW_URL_4>"
    And I wait for 2 seconds
    And I take a screenshot as evidence "i_visit-page-g4.feature"
