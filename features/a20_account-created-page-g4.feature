Feature: SinDatos

  @user1 @web
  Scenario: Sin llenar datos
    Given I wait for 5 seconds
    Then I first Navigate to page "<PAGINA_SETUP_ONE_4>"
    And I wait for 3 seconds
    Then I click create account
    And I wait for 2 seconds
