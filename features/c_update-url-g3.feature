Feature: Change URL of a Page

  @user1 @web
  Scenario: As a registered admin I can change the URL of a previously created
  page successfully
    Given I navigate to page "<SIGN_IN_PAGE_3>"
    And I wait for 1 seconds
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/pages/']"
    When I click in "[title='Edit this page']"
    And I type "<NEW_URL_3>" into "[placeholder='Page Title']"
    And I click in "div.gh-publishmenu-trigger"
    And I click in "button.gh-publishmenu-button"
    And I click in "[title='Settings']"
    And I type "<NEW_ENDPOINT>" into "[name='post-setting-slug']"
    And I click in "button.close"
    Then I navigate to page "<NEW_URL_3>"
    And I wait for 2 seconds
    And I take a screenshot as evidence "c_update-url-g3.feature"
