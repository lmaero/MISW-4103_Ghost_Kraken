Feature: CorreoNoValido

  @user1 @web
  Scenario: formato de correo no valido
    Then I first Navigate to page "<PAGINA_SETUP_ONE_4>"
    Then I enter the blog name "<BLOG_NAME_AC>"
    Then I enter the full name "<FULL_NAME>"
    Then I enter the email "<EMAIL_NO_VALIDO>"
    Then I enter the password created "<PASSWORD>"
    Then I click create account
