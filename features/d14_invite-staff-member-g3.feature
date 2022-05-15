Feature: Cuenta

@user1 @web
Scenario: Invitar miembro staff
  Given I wait
  Then I Navigate to page "<SIGN_IN_PAGE_3>"
  Then I wait for 2 seconds
  Then I enter login email "<BLOG_EMAIL>"
  Then I wait for 2 seconds
  Then I enter login password "<BLOG_PASS>"
  Then I wait for 2 seconds
  Then I click sign in 
  Then I wait for 2 seconds
  Then I click on Staff g3
  Then I wait for 2 seconds
  Then I click on the Invite People button g3
  Then I wait for 2 seconds
  Then I enter staff email "<STAFF_MEMBER>"
  Then I wait for 2 seconds
  Then I click on send invitation now g3
  Then I wait for 2 seconds
  

