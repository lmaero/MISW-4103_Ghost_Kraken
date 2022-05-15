Feature: Settings actions

@user1 @web
Scenario: Edit blog name and description
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    Then I click in "[href='#/settings/']"
    And I click in "[href='#/settings/general/']"
    And I click on expand Title and Description section v"4"
    And I enter a new Blog Name "<NEW_BLOG_NAME>" v"4"
    And I enter a new Blog Description "<NEW_BLOG_DESCRIPTION>" v"4"
    And I click on Save General Settings v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"
    Then I click in "[href='#/settings/']"
    And I click in "[href='#/settings/general/']"
    And I enter a new Blog Name "<BLOG_TITLE>" v"4"
    And I enter a new Blog Description "<BLOG_DESCRIPTION>" v"4"
    And I click on Save General Settings v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"