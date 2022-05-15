Feature: Cuenta

@user1 @web
Scenario: Revocar miembro staff
  Given I wait
  Then I Navigate to page "<SIGN_IN_PAGE_4>"
  Then I wait for 2 seconds
  Then I enter login email "<BLOG_EMAIL>"
  Then I wait for 2 seconds
  Then I enter login password "<BLOG_PASS>"
  Then I wait for 2 seconds
  Then I click sign in 
  Then I wait for 2 seconds
  Then I click on settings
  Then I wait for 2 seconds 
  Then I click on Staff g4
  Then I wait for 2 seconds
  Then I click on revoke button
  Then I wait for 2 seconds

  

