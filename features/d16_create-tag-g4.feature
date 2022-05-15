Feature: Cuenta

@user1 @web
Scenario: crear tag
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
  Then I click New Tags
  Then I wait for 2 seconds 
  Then I click on the tag name area
  Then I wait for 2 seconds
  Then I enter a tag name "<TAG_NAME>"
  Then I wait for 2 seconds
  Then I click on save tag g4
  Then I wait for 2 seconds
  Then I click on Tags
  Then I wait for 2 seconds
