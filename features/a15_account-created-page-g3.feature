Feature: SinDatos

  @user1 @web
  Scenario: Sin llenar datos
    Given I wait for 5 seconds
    Then I first Navigate to page "<PAGINA_SETUP_TWO_3>"
    And I wait for 2 seconds
    Then I click staff invite users
    And I wait for 2 seconds
