Feature: Create Page

  @user1 @web
  Scenario: As registered admin I create a page successfully
    Given I navigate to page "<SETUP_PAGE_ONE_4>"
    Then I type "<BLOG_TITLE>" into "#blog-title"
    And I type "<BLOG_NAME>" into "#name"
    And I type "<BLOG_EMAIL>" into "#email"
    And I type "<BLOG_PASS>" into "#password"
    When I click in "[type='submit']"
    When I click in "h6=Explore Ghost admin"
    And I click in "[href='#/pages/']"
    And I click in "[href='#/editor/page/']"
    And I type "<PAGE_TITLE>" into "[placeholder='Page title']"
    And I type "<PAGE_CONTENT>" into "[data-placeholder='Begin writing your page...']"
    And I click in "div.gh-publishmenu-trigger"
    And I click in "button.gh-publishmenu-button"
    Then I navigate to page "<NEW_PAGE_4>"
