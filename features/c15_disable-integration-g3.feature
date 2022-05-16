Feature: Settings actions

@user1 @web
Scenario: Disable integration AMP
    Given I navigate to page "<SIGN_IN_PAGE_3>"
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I navigate to page "<GHOST_3_GENERAL_INTEGRATION>"
    And I click in "[href='#/settings/integrations/amp/']"
    And I click disable integration checkbox v"3"
    And I save integration settings v"3"
    Then I navigate to page "<ADMIN_PAGE_3>"