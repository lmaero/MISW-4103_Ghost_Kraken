Feature: TituloVacio

  @user1 @web
  Scenario: el titulo del blog se encuentra vacio
    Then I first Navigate to page "<PAGINA_SETUP_TWO_3>"
    Then I enter the blog name "<BLOG_TITLE_EMPTY>"
    Then I enter the full name "<FULL_NAME>"
    Then I enter the email "<EMAIL>"
    Then I enter the password created "<PASSWORD>"
    Then I click staff invite users
