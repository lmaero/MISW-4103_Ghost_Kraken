Feature: PasswordNoValido

  @user1 @web
  Scenario: password no valido
    Then I first Navigate to page "<PAGINA_SETUP_TWO_3>"
    Then I enter the blog name "<BLOG_NAME_AC>"
    Then I enter the full name "<FULL_NAME>"
    Then I enter the email "<EMAIL>"
    Then I enter the password created "<PASSWORD_NOT_VALID>"
    Then I click staff invite users
