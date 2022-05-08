const props = require('../../properties.json');

describe('Feature: Page', () => {
    it('should create a page successfully', function () {
        // Given I navigate to page "<SETUP_PAGE_ONE>"
        cy.visit(props.SETUP_PAGE_ONE);

        // And I wait for 1 second
        cy.wait(1000);

        // When I click in "[href='#/setup/two/']"
        cy.contains('Create your account').click();

        // And I wait for 1 second
        cy.wait(1000);
        // Then I type "<BLOG_TITLE>" into "#blog-title"

        cy.get('#blog-title').clear().type(props.BLOG_TITLE);
        // And I type "<BLOG_NAME>" into "#name"

        cy.get('#name').clear().type(props.BLOG_NAME);
        // And I type "<BLOG_EMAIL>" into "#email"

        cy.get('#email').clear().type(props.BLOG_EMAIL);

        // And I type "<BLOG_PASS>" into "#password"
        cy.get('#password').clear().type(props.BLOG_PASS);

        // And I wait for 1 second
        cy.wait(1000);

        // When I click in "[type='submit']"
        cy.contains('Last step: Invite staff users ').click();

        // Then I click in "button.gh-flow-skip"
        cy.contains('I\'ll do this later, take me to my site!').click();

        // And I click in "[href='#/pages/']"
        cy.get('a[href="#/pages/"]').click();

        // And I click in "a[href='#/editor/page/']"
        cy.contains('New page').click();

        // And I type "<PAGE_TITLE>" into "[placeholder='Page Title']"
        cy.get('[placeholder="Page Title"]').clear().type(props.PAGE_TITLE);

        // And I type "<PAGE_CONTENT>" into "[data-placeholder='Begin writing your page...']"
        cy.get('div[data-placeholder="Begin writing your page..."]').clear().type(props.PAGE_CONTENT);

        // And I click in "div.gh-publishmenu-trigger"
        cy.get('div.gh-publishmenu-trigger').click();

        // And I click in "button.gh-publishmenu-button"
        cy.get('button.gh-publishmenu-button').click();

        // Then I navigate to page "<NEW_PAGE>"
        cy.visit(props.NEW_PAGE);

        // And I wait for 2 seconds
        cy.wait(2000);

        // And I take a screenshot as evidence "a_create-page.feature"
        cy.screenshot('a_create-page.cypress', {
            capture: 'runner', overwrite: true,
        });
    });

    describe('when a page exists', () => {
        beforeEach(() => {
            // Given I navigate to page "<SIGN_IN_PAGE>"
            cy.visit(props.SIGN_IN_PAGE);

            // And I wait for 1 second
            cy.wait(1000);

            // And I type "<BLOG_EMAIL>" into "[name='identification']"
            cy.get('input[name="identification"]').clear().type(props.BLOG_EMAIL);

            // And I type "<BLOG_PASS>" into "[name='password']"
            cy.get('input[name="password"]').clear().type(props.BLOG_PASS);

            // When I click in "[type='submit']"
            cy.get('button[type="submit"]').click();

            // And I click in "[href='#/pages/']"
            cy.get('a[href="#/pages/"]').click();

            // When I click in "[title='Edit this page']"
            cy.get('[title="Edit this page"]').first().click();
        });

        it('should be possible to update a previously created page', function () {
            // And I type "<PAGE_NEW_TITLE>" into "[placeholder='Page Title']"
            cy.get('[placeholder="Page Title"]').clear().type(props.PAGE_NEW_TITLE);

            // And I click in "div.gh-publishmenu-trigger"
            cy.get('div.gh-publishmenu-trigger').click();

            // And I click in "button.gh-publishmenu-button"
            cy.get('button.gh-publishmenu-button').click();

            // Then I navigate to page "<NEW_PAGE>"
            cy.visit(props.NEW_PAGE);

            // And I wait for 2 seconds
            cy.wait(2000);

            // And I take a screenshot as evidence "b_update-page.feature"
            cy.screenshot('b_update-page.cypress', {
                capture: 'runner', overwrite: true,
            });
        });

        it('should be possible to change the URL a previously created page', function () {
            // And I type "<NEW_URL>" into "[placeholder='Page Title']"
            cy.get('[placeholder="Page Title"]').clear().type(props.NEW_URL);

            // And I click in "div.gh-publishmenu-trigger"
            cy.get('div.gh-publishmenu-trigger').click();

            // And I click in "button.gh-publishmenu-button"
            cy.get('button.gh-publishmenu-button').click();

            // And I click in "[title='Settings']"
            cy.get('[title="Settings"]').click();

            // And I type "<NEW_ENDPOINT>" into "[name='post-setting-slug']"
            cy.get('[name="post-setting-slug"]').clear().type(props.NEW_ENDPOINT);

            // And I click in "button.close"
            cy.get('button.close').click();

            // Then I navigate to page "<NEW_URL>"
            cy.visit(props.NEW_URL);

            // And I wait for 2 seconds
            cy.wait(2000);

            // And I take a screenshot as evidence "b_update-page.feature"
            cy.screenshot('c_update-url.cypress', {
                capture: 'runner', overwrite: true,
            });
        });
    });

    describe('as a non-logged in user', () => {
        it('should be possible to go to the published page as non-registered user', function () {
            // Given I navigate to page "<NEW_URL>"
            cy.visit(props.NEW_URL);

            // And I wait for 2 seconds
            cy.wait(2000);

            // And I take a screenshot as evidence "d_visit-page.feature"
            cy.screenshot('d_visit-page.cypress', {
                capture: 'runner', overwrite: true,
            });
        });
    });

    describe('if I want to delete a page as an admin', () => {
        it('should be possible to delete a previously created page', function () {
            // Given I navigate to page "<SIGN_IN_PAGE>"
            cy.visit(props.SIGN_IN_PAGE);

            // And I wait for 1 second
            cy.wait(1000);

            // And I type "<BLOG_EMAIL>" into "[name='identification']"
            cy.get('input[name="identification"]').clear().type(props.BLOG_EMAIL);

            // And I type "<BLOG_PASS>" into "[name='password']"
            cy.get('input[name="password"]').clear().type(props.BLOG_PASS);

            // When I click in "[type='submit']"
            cy.get('button[type="submit"]').click();

            // And I click in "[href='#/pages/']"
            cy.get('a[href="#/pages/"]').click();

            // When I click in "[title='Edit this page']"
            cy.get('[title="Edit this page"]').first().click();

            // And I click in "[title='Settings']"
            cy.get('[title="Settings"]').click();

            // And I click in "button.settings-menu-delete-button"
            cy.get('button.settings-menu-delete-button').click();

            // And I click in "button.gh-btn-red"
            cy.get('button.gh-btn-red').first().click();

            // And I wait for 1 seconds
            cy.wait(1000);

            // Then I navigate to page "<NEW_URL>"
            cy.visit(props.NEW_URL, {failOnStatusCode: false});

            // And I wait for 2 seconds
            cy.wait(1000);

            // And I take a screenshot as evidence "e_delete-page.feature"
            cy.screenshot('e_delete-page.cypress', {
                capture: 'runner', overwrite: true,
            });
        });
    });
});
