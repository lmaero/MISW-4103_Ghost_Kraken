Feature: Settings actions

@user1 @web
Scenario: Add navbar submenu item
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    Then I navigate to page "<GHOST_4_GENERAL_NAVIGATION>"
    And I enter a new submenu label "<SUBMENU_LABEL>" v"4"
    And I enter a new submenu url "<DASHBOARD_URL_4>" v"4"
    And I click in "button.gh-blognav-add" 
    And I click on Save Design Settings v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"