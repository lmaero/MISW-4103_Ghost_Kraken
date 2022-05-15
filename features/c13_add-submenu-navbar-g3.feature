Feature: Settings actions

@user1 @web
Scenario: Add navbar submenu item
    Given I navigate to page "<SIGN_IN_PAGE_3>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/settings/design/']"
    And I enter a new submenu label "<SUBMENU_LABEL>" v"3"
    And I enter a new submenu url "<ADMIN_PAGE_3>" v"3"
    And I click in "button.gh-blognav-add" 
    And I click on Save Design Settings v"3"
    Then I navigate to page "<ADMIN_PAGE_3>"