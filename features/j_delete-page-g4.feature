Feature: Delete Page

  @user1 @web
  Scenario: As a registered admin I can delete a previously created page
  successfully
    Given I navigate to page "<SIGN_IN_PAGE_4>"
    And I wait for 1 seconds
    And I type "<BLOG_EMAIL>" into "[name='identification']"
    And I type "<BLOG_PASS>" into "[name='password']"
    When I click in "[type='submit']"
    And I click in "[href='#/pages/']"
    When I click in ".gh-posts-list-item"
    And I click in "[title='Settings']"
    And I click in "button.settings-menu-delete-button"
    And I click in "button.gh-btn-red"
    And I wait for 1 seconds
    Then I navigate to page "<NEW_URL_4>"
    And I wait for 2 seconds
    And I take a screenshot as evidence "j_delete-page-g4.feature"
