import { faker } from "@faker-js/faker";
require("cypress-xpath");

const email = "diegof.eslava@gmail.com";
const password = "contrasenadiego1234";

describe(`d1_create_new_public_tag_with_name`, function () {
  it(`should create correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");
    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
    cy.wait(2000);
  });
});

describe(`d2_edit_public_tag_name`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Edita el nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    )
      .clear()
      .type("Prueba editada", { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d3_edit_public_tag_color`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Edita el color en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[2]/div/input"
    )
      .clear()
      .type("00FF00", { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d4_edit_public_tag_slug`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Edita el slug en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[2]/input"
    )
      .clear()
      .type("prueba-editada", { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d5_edit_public_tag_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Edita la descripcion en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d6_edit_public_tag_metadata_title`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[1]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d7_edit_public_tag_metadata_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la descripcion de metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[2]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d8_edit_public_tag_metadata_url_with_email`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la url de metadata con datos erroneos
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[3]/input"
    )
      .clear()
      .type(faker.internet.email(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d9_edit_public_tag_metadata_url_with_url`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la url de metadata con datos correctos
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[3]/input"
    )
      .clear()
      .type(faker.internet.url(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d10_edit_public_tag_twitter_card_title`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand twitter card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de twitter
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d11_edit_public_tag_twitter_card_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand twitter card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la descripcion de twitter
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[2]/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d12_edit_public_tag_facebook_card_title`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand Facebook card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de Facebook
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d13_edit_public_tag_facebook_card_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand Facebook card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la descripcion de Facebook
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[2]/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d14_edit_public_tag_twitter_card_long_title`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand twitter card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de twitter
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d15_edit_public_tag_facebook_card_long_title`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en el primer Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/section/ol/li[3]/a[1]"
    ).click();
    //Dar click en expand Facebook card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de Facebook
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d16_create_new_internal_tag_with_name`, function () {
  it(`should create correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");
    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
    cy.wait(2000);
  });
});

describe(`d17_edit_internal_tag_metadata__long_title`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[1]/input"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d18_edit_internal_tag_color`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Edita el color en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[2]/div/input"
    )
      .clear()
      .type("00FF00", { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d19_edit_internal_tag_slug`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);

    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");
    //Edita el slug en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d20_edit_internal_tag_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Edita la descripcion en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });
    cy.wait(2000);

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d21_edit_internal_tag_metadata_title`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[1]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d22_edit_internal_tag_metadata_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la descripcion de metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[2]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d23_edit_internal_tag_metadata_url_with_email`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la url de metadata con datos erroneos
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[3]/input"
    )
      .clear()
      .type(faker.internet.email(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d24_edit_internal_tag_metadata_url_with_url`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand metadata
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la url de metadata con datos correctos
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[3]/input"
    )
      .clear()
      .type(faker.internet.url(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d25_edit_internal_tag_twitter_card_title`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand twitter card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de twitter
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d26_edit_internal_tag_twitter_card_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand twitter card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la descripcion de twitter
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[2]/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d27_edit_internal_tag_facebook_card_title`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand Facebook card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de Facebook
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.word(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d28_edit_internal_tag_facebook_card_description`, function () {
  it(`should edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand Facebook card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita la descripcion de Facebook
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[2]/div/div/div[1]/div[3]/textarea"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d29_edit_internal_tag_twitter_card_long_title`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand twitter card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de twitter
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[2]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});

describe(`d30_edit_internal_tag_facebook_card_long_title`, function () {
  it(`should not edit correctly the tag`, function () {
    //Hace login
    cy.visit("http://localhost:3001/ghost/#/signin");
    cy.wait(2000);
    cy.get('input[name="identification"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get(
      'button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]'
    ).click();
    cy.wait(2000);
    //Va a la pestana Tags
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a"
    ).click();
    cy.wait(2000);
    //Da click en internal tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/header/section/div/button[2]"
    ).click();
    //Da click en New Tag
    cy.xpath("/html/body/div[2]/div/main/section/header/section/a").click();
    //Escribe un nombre en el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input"
    ).type("Prueba");

    //Dar click en expand Facebook card
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[1]/div[2]/button"
    ).click();

    cy.wait(2000);
    //Edita el titulo de Facebook
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div/div[2]/section[3]/div[2]/div/div/div[1]/div[2]/input"
    )
      .clear()
      .type(faker.lorem.paragraph(), { force: true });

    //Guarda el Tag
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/header/section/button"
    ).click();
  });
});
