Feature: Settings actions

@user1 @web
Scenario: Edit social network url directions
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    Then I click in "[href='#/settings/']"
    And I click in "[href='#/settings/general/']"
    And I click on expand Social Network section v"4"
    And I enter a new Facebook page url "<FB_URL>" v"4"
    And I enter a new Twitter page url "<TW_URL>" v"4"
    And I click on Save General Settings v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"
    And I click in "[href='#/settings/']"
    And I click in "[href='#/settings/general/']"
    And I enter a new Facebook page url "<OLD_FB_URL>" v"4"
    And I enter a new Twitter page url "<OLD_TW_URL>" v"4"
    And I click on Save General Settings v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"