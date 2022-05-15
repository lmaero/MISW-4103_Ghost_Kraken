Feature: Settings actions

@user1 @web
Scenario: Edit social network url directions
    Given I navigate to page "<SIGN_IN_PAGE_3>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/settings/general/']"
    And I click on expand Social Network section v"3"
    And I enter a new Facebook page url "<FB_URL>" v"3"
    And I enter a new Twitter page url "<TW_URL>" v"3"
    And I click on Save General Settings v"3"
    Then I navigate to page "<ADMIN_PAGE_3>"
    And I click in "[href='#/settings/general/']"
    And I enter a new Facebook page url "<OLD_FB_URL>" v"3"
    And I enter a new Twitter page url "<OLD_TW_URL>" v"3"
    And I click on Save General Settings v"3"
    Then I navigate to page "<ADMIN_PAGE_3>"