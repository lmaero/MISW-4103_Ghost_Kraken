Feature: Cuenta

@user1 @web
Scenario: eliminar tag
  Given I wait
  Then I Navigate to page "<SIGN_IN_PAGE_4>"
  Then I wait for 2 seconds
  Then I enter login email "<BLOG_EMAIL>"
  Then I wait for 2 seconds
  Then I enter login password "<BLOG_PASS>"
  Then I wait for 2 seconds
  Then I click sign in 
  Then I wait for 2 seconds
  Then I click on Tags
  Then I wait for 2 seconds
  Then I click on the first tag 
  Then I wait for 2 seconds
  Then I click on delete tag
  Then I wait for 2 seconds
  Then I click on delete tag definitively
  Then I wait for 2 seconds
  Then I click on Tags
  Then I wait for 2 seconds

