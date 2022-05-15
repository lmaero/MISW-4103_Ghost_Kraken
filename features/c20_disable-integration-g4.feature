Feature: Settings actions

@user1 @web
Scenario: Disable integration AMP
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/settings/']"
    And I click in "[href='#/settings/integrations/']"
    And I click in "[href='#/settings/integrations/amp/']"
    And I click disable integration checkbox v"4"
    And I save integration settings v"4"
    Then I navigate to page "<DASHBOARD_URL_4>"