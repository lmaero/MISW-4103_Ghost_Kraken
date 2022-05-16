Feature: Cuenta

  @user1 @web
  Scenario: eliminar tag
    Then I Navigate to page "<SIGN_IN_PAGE_3>"
    Then I enter login email "<BLOG_EMAIL>"
    Then I enter login password "<BLOG_PASS>"
    Then I click sign in
    Then I click on Tags
    Then I click on the first tag
    Then I click on delete tag
    Then I click on delete tag definitively
    Then I click on Tags
