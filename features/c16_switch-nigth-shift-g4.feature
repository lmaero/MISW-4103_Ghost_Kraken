Feature: Settings actions

@user1 @web
Scenario: Switch nigth shift
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    Then I click on nigth shift toggle button v"4"
    Then I click on nigth shift toggle button v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"