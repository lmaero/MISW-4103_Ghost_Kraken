Feature: PasswordNoValido

@user1 @web
Scenario: password no valido
  Given I wait for 5 seconds
  Then I first Navigate to page "<PAGINA_SETUP_TWO_3>"
  And I wait for 2 seconds
  Then I enter the blog name "<BLOG_NAME_AC>"
  And I wait for 2 seconds
  Then I enter the full name "<FULL_NAME>"
  And I wait for 2 seconds
  Then I enter the email "<EMAIL>"
  And I wait for 2 seconds
  Then I enter the password created "<PASSWORD_NOT_VALID>"
  And I wait for 5 seconds
  Then I click staff invite users
  And I wait for 5 seconds