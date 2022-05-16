Feature: Cuenta

  @user1 @web
  Scenario: Invitar miembro staff
    Then I Navigate to page "<SIGN_IN_PAGE_3>"
    Then I enter login email "<BLOG_EMAIL>"
    Then I enter login password "<BLOG_PASS>"
    Then I click sign in
    Then I click on Staff g3
    Then I click on the Invite People button g3
    Then I enter staff email "<STAFF_MEMBER>"
    Then I click on send invitation now g3
