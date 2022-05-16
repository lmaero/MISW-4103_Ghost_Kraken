Feature: Cuenta

  @user1 @web
  Scenario: editar tag
    Then I Navigate to page "<SIGN_IN_PAGE_3>"
    Then I enter login email "<BLOG_EMAIL>"
    Then I enter login password "<BLOG_PASS>"
    Then I click sign in
    Then I click on Tags
    Then I click on the first tag
    Then I click on the tag description area
    Then I enter a tag description "<TAG_DESCRIPTION>"
    Then I click on save tag g3
    Then I click on Tags
