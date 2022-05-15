Feature: NombreVacio

  @user1 @web
  Scenario: el nombre del usuario se encuentra vacio
    Then I first Navigate to page "<PAGINA_SETUP_ONE_4>"
    Then I enter the blog name "<BLOG_NAME_AC>"
    Then I enter the full name "<FULL_NAME_EMPTY>"
    Then I enter the email "<EMAIL>"
    Then I enter the password created "<PASSWORD>"
    Then I click create account
