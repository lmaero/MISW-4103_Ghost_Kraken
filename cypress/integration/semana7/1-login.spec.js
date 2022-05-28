import { faker } from "@faker-js/faker";

require("cypress-xpath");

/* Los datos del JSON se generaron de https://generatedata.com/generator */

const getLoginAPrioriDatapool = () =>
  require("../../support/priori_datapool_1-login_spec.json");
const blogField =
  "/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input";
const nameField =
  "/html/body/div[2]/div/main/div/div/section/form/div[3]/span/input";
const emailField =
  "/html/body/div[2]/div/main/div/div/section/form/div[4]/span/input";
const passwordField =
  "/html/body/div[2]/div/main/div/div/section/form/div[5]/span/input";
const createButton =
  "/html/body/div[2]/div/main/div/div/section/form/button/span";
const smallBlogName = faker.lorem.sentence(0);
const smallName = faker.lorem.sentence(0);
const smallEmail = faker.lorem.sentence(0);
const smallPassword = faker.lorem.sentence(0);

// 1-4
describe("One empty field", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  }); //1
  it("should reject the account creation if the blog title is the only field empty", () => {
    const jsonObject = getLoginAPrioriDatapool();
    cy.get("form").within(() => {
      cy.xpath(nameField).type(jsonObject[0].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[0].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[0].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  //2
  it("should reject the account creation if the person name is the only field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[1].titulo);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[1].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[1].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  //3
  it("should reject the account creation if the email is the only field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[2].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[2].name);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[2].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  // 4
  it("should reject the account creation if the password is the only field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[3].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[3].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[3].email);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});

// 5-10
describe("Two empty fields", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  }); // 5
  it("should reject the account creation if the blog field and name field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(emailField).type(jsonObject[4].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[4].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  // 6
  it("should reject the account creation if the blog field and email field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(nameField).type(jsonObject[5].name);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[5].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); // 7
  it("should reject the account creation if the blog field and password field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(nameField).type(jsonObject[6].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[6].email);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); // 8
  it("should reject the account creation if the name field and email field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[7].titulo);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[7].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); // 9
  it("should reject the account creation if the name field and password field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[8].titulo);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[8].email);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); // 10
  it("should reject the account creation if the email field and password field empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[9].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[9].name);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});
// 11-13
describe("Three empty fields", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  }); //11
  it("should reject the account creation if the blog, name, and email fields are empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(passwordField).type(jsonObject[10].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); // 12
  it("should reject the account creation if the blog, name, and password fields are empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(emailField).type(jsonObject[11].email);
      cy.wait(100);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); // 13
  it("should reject the account creation if the name, email and password fields are empty", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[12].titulo);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});
// 14
describe("Four empty fields", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  }); //14
  it("should reject the account creation if the blog, name, and email and password fields are empty", () => {
    cy.get("form").within(() => {
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});

// 15-20 (Aleatorios)
describe("Validate description message", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  }); //15
  it("should show the message of short blog name description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  //16
  it("should show the message of short name description", () => {
    cy.get("form").within(() => {
      cy.xpath(nameField).type(smallName);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); //17
  it("should show the message of short password description", () => {
    cy.get("form").within(() => {
      cy.xpath(passwordField).type(smallPassword);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); //18
  it("should show the message of short blog title and name description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(100);
      cy.xpath(nameField).type(smallName);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); //19
  it("should show the message of short blog title, name and password description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(100);
      cy.xpath(nameField).type(smallName);
      cy.xpath(passwordField).type(smallPassword);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); //20
  it("should show the message of short blog title, name and email description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(100);
      cy.xpath(nameField).type(smallName);
      cy.wait(100);
      cy.xpath(emailField).type(smallEmail);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});

// 21-23
describe("Length bigger than the allowed", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  }); //21
  it("should reject the account creation if the name is bigger than 1000", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[20].titulo);
      cy.wait(100);
      cy.xpath(nameField)
        .clear()
        .type(jsonObject[20].name, { force: true, delay: 0 });
      cy.wait(100);
      cy.on("uncaught:exception", (err) => {
        expect(err.message).to.include(
          "Request was rejected because it was invalid"
        );
        return false;
      });
      cy.xpath(emailField).type(jsonObject[20].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[20].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); //22
  it("should reject the account creation if the blog title is bigger than 1000", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[21].titulo, {
        force: true,
        delay: 0,
      });
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[21].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[21].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[21].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  }); //23
  it("should reject the account creation if the email is bigger than 1000", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[22].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[22].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[22].email, {
        force: true,
        delay: 0,
      });
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[22].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});

// 24-27
describe("Length equal to 1 character", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  });
  // 24
  it("should reject the account creation if the title, name and email length is equal to 1", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[23].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[23].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[23].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[23].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  // 25
  it("should reject the account creation if the title, name and password length is equal to 1", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[24].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[24].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[24].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[24].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  // 26
  it("should reject the account creation if the email length is equal to 1", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[25].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[25].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[25].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[25].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  // 27
  it("should reject the account creation if the password length is equal to 1", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[26].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[26].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[26].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[26].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});

// 28-30
describe("Password options", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  });
  // 28
  it("should reject the account creation if password has only 9 digits", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[27].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[27].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[27].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[27].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
  // 29
  it("should reject the account creation if email does not have the @ character", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[28].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[28].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[28].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[28].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});
// 30
describe("Create account", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(100);
  });
  it("should create the account with valid information", () => {
    cy.get("form").within(() => {
      const jsonObject = getLoginAPrioriDatapool();
      cy.xpath(blogField).type(jsonObject[29].titulo);
      cy.wait(100);
      cy.xpath(nameField).type(jsonObject[29].name);
      cy.wait(100);
      cy.xpath(emailField).type(jsonObject[29].email);
      cy.wait(100);
      cy.xpath(passwordField).type(jsonObject[29].contrasena);
      cy.wait(100);
      cy.xpath(createButton).click();
    });
    cy.wait(100);
  });
});
