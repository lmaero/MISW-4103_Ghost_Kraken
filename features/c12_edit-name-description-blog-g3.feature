Feature: Settings actions

@user1 @web
Scenario: Edit blog name and description
    Given I navigate to page "<SIGN_IN_PAGE_3>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/settings/general/']"
    And I click on expand Title and Description section v"3"
    And I enter a new Blog Name "<NEW_BLOG_NAME>" v"3"
    And I enter a new Blog Description "<NEW_BLOG_DESCRIPTION>" v"3"
    And I click on Save General Settings v"3"
    Then I navigate to page "<ADMIN_PAGE_3>"
    And I click in "[href='#/settings/general/']"
    And I enter a new Blog Name "<BLOG_TITLE>" v"3"
    And I enter a new Blog Description "<BLOG_DESCRIPTION>" v"3"
    And I click on Save General Settings v"3"