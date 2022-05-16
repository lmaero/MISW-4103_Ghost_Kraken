Feature: Cuenta

  @user1 @web
  Scenario: crear tag
    Then I Navigate to page "<SIGN_IN_PAGE_3>"
    Then I enter login email "<BLOG_EMAIL>"
    Then I enter login password "<BLOG_PASS>"
    Then I click sign in
    Then I click on Tags
    Then I click New Tags
    Then I click on the tag name area
    Then I enter a tag name "<TAG_NAME>"
    Then I click on save tag g3
    Then I click on Tags
