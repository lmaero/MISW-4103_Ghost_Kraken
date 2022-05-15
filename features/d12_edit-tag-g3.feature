Feature: Cuenta

@user1 @web
Scenario: editar tag
  Given I wait
  Then I Navigate to page "<SIGN_IN_PAGE_3>"
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
  Then I click on the tag description area
  Then I wait for 2 seconds
  Then I enter a tag description "<TAG_DESCRIPTION>"
  Then I wait for 2 seconds
  Then I click on save tag g3
  Then I click on Tags
  Then I wait for 2 seconds






