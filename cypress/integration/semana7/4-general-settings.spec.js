import { signIn } from "../../support/utilities";
import { faker } from "@faker-js/faker";

require("cypress-xpath");

const getRandomNumber = (min, max) =>
  parseInt(Math.random() * (max - min) + min);
const getAPrioriDatapool = () =>
  require("../../support/priori_datapool_4-general-settings.json");
const getDynamicRandomDatapool = () => generateDynamicRandomDatapool();

const generateDynamicRandomDatapool = () => {
  const dynamicRandomDatapool = [];
  for (let i = 0; i < 10; i++) {
    dynamicRandomDatapool.push({
      blog_name: faker.lorem.sentence(10),
      blog_description: faker.lorem.sentence(10),
      blog_meta_title: faker.lorem.sentence(10),
      blog_meta_description: faker.lorem.sentence(10),
      blog_twitter_card_title: faker.lorem.sentence(10),
      blog_twitter_card_description: faker.lorem.sentence(10),
      blog_facebook_card_title: faker.lorem.sentence(10),
      blog_facebook_card_description: faker.lorem.sentence(10),
      facebook_url: `${faker.internet.protocol()}://www.facebook.com/${faker.internet.userName()}`,
      twitter_url: `${faker.internet.protocol()}://www.twitter.com/${faker.internet.userName()}`,
      invalid_blog_name: faker.lorem.sentence(100),
      invalid_blog_description: faker.lorem.sentence(100),
      invalid_blog_meta_title: faker.lorem.sentence(100),
      invalid_blog_meta_description: faker.lorem.sentence(100),
      invalid_facebook_url: `${faker.internet.url()}/${faker.internet.userName()}`,
      invalid_twitter_url: `${faker.internet.url()}/${faker.internet.userName()}`,
      invalid_blog_twitter_card_title: faker.lorem.sentence(100),
      invalid_blog_twitter_card_description: faker.lorem.sentence(100),
      invalid_blog_facebook_card_title: faker.lorem.sentence(100),
      invalid_blog_facebook_card_description: faker.lorem.sentence(100),
    });
  }
  return dynamicRandomDatapool;
};

beforeEach(() => {
  signIn();
});

describe(`c1_edit_blog_title`, function () {
  it(`should be edited blog name [allowed length][(II) Dynamic Random Datapool]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
    )
      .clear()
      .type(register.blog_name, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog name [empty value][(I) A priori Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog name [not allowed length][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
    )
      .clear()
      .type(faker.lorem.sentence(100), { force: true, delay: 0 });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath("/html/body/div[2]/div/main/section/div/header/section/button")
      .not(".gh-btn-green")
      .should("have.length", 1);
  });
});

describe(`c2_edit_blog_description`, function () {
  it(`should be edited blog description [allowed length][(I) A priori Datapool]`, function () {
    const datapool = getAPrioriDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input"
    )
      .clear()
      .type(register.blog_description, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog description [empty value][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog description [not allowed length][(II) Dynamic Random Datapool]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input"
    )
      .clear()
      .type(register.invalid_blog_description, { force: true, delay: 0 });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath("/html/body/div[2]/div/main/section/div/header/section/button")
      .not(".gh-btn-green")
      .should("have.length", 1);
    cy.wait(200);
  });
});

describe(`c3_edit_blog_meta_title`, function () {
  it(`should be edited blog meta title [allowed length][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[2]/div/div/div/div[1]/div[1]/input"
    )
      .clear()
      .type(faker.lorem.sentence(10), { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog meta title [empty value][(II) Dynamic Random Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[2]/div/div/div/div[1]/div[1]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog meta title [not allowed length][(I) A priori Datapool]`, function () {
    const datapool = getAPrioriDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[2]/div/div/div/div[1]/div[1]/input"
    )
      .clear()
      .type(register.invalid_blog_meta_title, { force: true, delay: 0 });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    // Error del request manejado
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include(
        "Request was rejected because it was invalid"
      );
      return false;
    });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-red");
    cy.wait(200);
  });
});

describe(`c4_edit_blog_meta_description`, function () {
  it(`should be edited blog meta description [allowed length][(II) Dynamic Random Datapool]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[2]/div/div/div/div[1]/div[2]/textarea"
    )
      .clear()
      .type(register.blog_meta_description, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog meta description [empty value][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[2]/div/div/div/div[1]/div[2]/textarea"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog meta description [not allowed length][(I) A priori Datapool]`, function () {
    const datapool = getAPrioriDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[1]/div[2]/div/div/div/div[1]/div[2]/textarea"
    )
      .clear()
      .type(register.invalid_blog_meta_description, {
        force: true,
        delay: 0,
      });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    // Error del request manejado
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include(
        "Request was rejected because it was invalid"
      );
      return false;
    });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-red");
    cy.wait(200);
  });
});

describe(`c5_edit_blog_twitter_card_title`, function () {
  it(`should be edited blog twitter card title [allowed length][(II) Dynamic Random Datapool]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[2]/div/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(register.blog_twitter_card_title, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog twitter card title [empty value][(I) A priori Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[2]/div/div/div/div[1]/div[2]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog twitter card title [not allowed length][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[2]/div/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.sentence(100), { force: true, delay: 0 });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    // Error del request manejado
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include(
        "Request was rejected because it was invalid"
      );
      return false;
    });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-red");
    cy.wait(200);
  });
});

describe(`c6_edit_blog_twitter_card_description`, function () {
  it(`should be edited blog twitter card description [allowed length][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[2]/div/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.sentence(10), { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog twitter card description [empty value][II) Dynamic Random Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[2]/div/div/div/div[1]/div[3]/textarea"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog twitter card description [not allowed length][(I) A priori Datapool]`, function () {
    const datapool = getAPrioriDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[2]/div[2]/div/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(register.invalid_blog_twitter_card_description, {
        force: true,
        delay: 0,
      });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    // Error del request manejado
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include(
        "Request was rejected because it was invalid"
      );
      return false;
    });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-red");
    cy.wait(200);
  });
});

describe(`c7_edit_blog_facebook_card_title`, function () {
  it(`should be edited blog twitter card title [allowed length][(I) A priori Datapool]`, function () {
    const datapool = getAPrioriDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[2]/div/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(register.blog_facebook_card_title, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog twitter card title [empty value][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[2]/div/div/div/div[1]/div[2]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog twitter card title [not allowed length][(II) Dynamic Random Datapool]]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[2]/div/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(register.invalid_blog_facebook_card_title, {
        force: true,
        delay: 0,
      });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    // Error del request manejado
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include(
        "Request was rejected because it was invalid"
      );
      return false;
    });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-red");
    cy.wait(200);
  });
});

describe(`c8_edit_blog_facebook_card_description`, function () {
  it(`should be edited blog facebook card description [allowed length][(II) Dynamic Random Datapool]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[2]/div/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(register.blog_facebook_card_description, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog facebook card description [empty value][(I) A priori Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[2]/div/div/div/div[1]/div[3]/textarea"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be not edited blog facebook card description [not allowed length][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[1]/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[6]/div[3]/div[2]/div/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.sentence(100), { force: true, delay: 0 });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    // Error del request manejado
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include(
        "Request was rejected because it was invalid"
      );
      return false;
    });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-red");
    cy.wait(200);
  });
});

describe(`c9_edit_blog_facebook_social_account_url`, function () {
  it(`should be edited blog facebook url [valid url][(I) A priori Datapool]`, function () {
    const datapool = getAPrioriDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[1]/input"
    )
      .clear()
      .type(register.facebook_url, { force: true });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog facebook url [empty value][(II) Dynamic Random Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[1]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog facebook url [invalid url][(III) Random escenario]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[1]/input"
    )
      .clear()
      .type(`${faker.internet.url()}/${faker.internet.userName()}`, {
        force: true,
        delay: 0,
      });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });
});

describe(`c10_edit_blog_twitter_social_account_url`, function () {
  it(`should be edited blog twitter url [valid url][(III) Random escenario`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[2]/input"
    )
      .clear()
      .type(
        `${faker.internet.protocol()}://www.twitter.com/${faker.internet.userName()}`,
        { force: true }
      );
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog twitter url [empty value][(I) A priori Datapool]`, function () {
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[2]/input"
    ).clear();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });

  it(`should be edited blog twitter url [invalid url][(II) Dynamic Random Datapool]`, function () {
    const datapool = getDynamicRandomDatapool();
    const randomIndex = getRandomNumber(0, datapool.length - 1);
    const register = datapool[randomIndex];
    cy.wait(200);
    cy.get('a[href="#/settings/general/"]').click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[2]/input"
    )
      .clear()
      .type(register.invalid_twitter_url, { force: true, delay: 0 });
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).click();
    cy.wait(200);
    cy.xpath(
      "/html/body/div[2]/div/main/section/div/header/section/button"
    ).should("have.class", "gh-btn-green");
    cy.wait(200);
  });
});
