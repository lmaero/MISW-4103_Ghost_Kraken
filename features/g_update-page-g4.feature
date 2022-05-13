Feature: Update Page

  @user1 @web
  Scenario: As a registered admin I can update a previously created page
  successfully
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I wait for 1 seconds
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/pages/']"
    When I click in ".gh-posts-list-item"
    And I type "<PAGE_NEW_TITLE>" into "[placeholder='Page title']"
    And I click in "div.gh-publishmenu-trigger"
    And I click in "button.gh-publishmenu-button"
    Then I navigate to page "<NEW_PAGE_4>"
    And I wait for 2 seconds
    And I take a screenshot as evidence "g_update-page-g4.feature"
