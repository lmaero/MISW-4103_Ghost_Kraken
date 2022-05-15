Feature: Settings actions

@user1 @web
Scenario: Switch nigth shift
    Given I navigate to page "<SIGN_IN_PAGE_3>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/settings/labs/']"
    Then I click on nigth shift toggle button v"3"
    Then I click on nigth shift toggle button v"3"