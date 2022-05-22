import { faker } from "@faker-js/faker";

require("cypress-xpath");

const getRandomNumber = (min, max) =>
  parseInt(Math.random() * (max - min) + min);
const getAPrioriDatapool = () =>
  require("../../support/priori_datapool_4-general-settings.json");
const getDynamicRandomDatapool = () => generateDynamicRandomDatapool();
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
const invalidBlogName = faker.lorem.sentence(100);
const invalidName = faker.lorem.sentence(100);
const invalidEmail = invalidName + faker.lorem.sentence(100);
const invalidPassword = faker.lorem.sentence(1000);
const smallBlogName = faker.lorem.sentence(0);
const smallName = faker.lorem.sentence(0);
const smallEmail = faker.lorem.sentence(0);
const smallPassword = faker.lorem.sentence(0);
const passwordWith9Digits = 123456789;
const emailWithoutValidFormat = "a.cantu#uniandes.edu.co";

// 1-4
describe("One empty field", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  }); //1
  it("should reject the account creation if the blog title is the only field empty", () => {
    cy.get("form").within(() => {
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  //2
  it("should reject the account creation if the person name is the only field empty", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog de ejemplo");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  //3
  it("should reject the account creation if the email is the only field empty", () => {
    cy.get("form").within(() => {
      //cy.get('input[id="blog-title"]').type('')
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  // 4
  it("should reject the account creation if the password is the only field empty", () => {
    cy.get("form").within(() => {
      //cy.get('input[id="blog-title"]').type('')
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});
// 5-10
describe("Two empty fields", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  }); // 5
  it("should reject the account creation if the blog field and name field empty", () => {
    cy.get("form").within(() => {
      //cy.xpath(blogField).type('Blog ejemplo');
      //cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  // 6
  it("should reject the account creation if the blog field and email field empty", () => {
    cy.get("form").within(() => {
      //cy.xpath(blogField).type('Blog ejemplo');
      //cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
      //cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); // 7
  it("should reject the account creation if the blog field and password field empty", () => {
    cy.get("form").within(() => {
      //cy.xpath(blogField).type('Blog ejemplo');
      //cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); // 8
  it("should reject the account creation if the name field and email field empty", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
      //cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); // 9
  it("should reject the account creation if the name field and password field empty", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); // 10
  it("should reject the account creation if the email field and password field empty", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
      //cy.wait(200);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(200);
      //cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});
// 11-13
describe("Three empty fields", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  }); //11
  it("should reject the account creation if the blog, name, and email fields are empty", () => {
    cy.get("form").within(() => {
      //cy.xpath(blogField).type('Blog ejemplo');
      //cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
      //cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); // 12
  it("should reject the account creation if the blog, name, and password fields are empty", () => {
    cy.get("form").within(() => {
      //cy.xpath(blogField).type('Blog ejemplo');
      //cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); // 13
  it("should reject the account creation if the name, email and password fields are empty", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
      //cy.wait(200);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});
// 14
describe("Four empty fields", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  }); //14
  it("should reject the account creation if the blog, name, and email and password fields are empty", () => {
    cy.get("form").within(() => {
      //cy.xpath(blogField).type('Blog ejemplo');
      //cy.wait(200);
      //cy.xpath(nameField).type('Alonso Cantu');
      //cy.wait(200);
      //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
      //cy.wait(200);
      //cy.xpath(passwordField).type('Contrasena');
      //cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});

// 15-20
describe("Validate description message", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  }); //15
  it("should show the message of short blog name description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  //16
  it("should show the message of short name description", () => {
    cy.get("form").within(() => {
      cy.xpath(nameField).type(smallName);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); //17
  it("should show the message of short password description", () => {
    cy.get("form").within(() => {
      cy.xpath(passwordField).type(smallPassword);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); //18
  it("should show the message of short blog title and name description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(200);
      cy.xpath(nameField).type(smallName);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); //19
  it("should show the message of short blog title, name and password description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(200);
      cy.xpath(nameField).type(smallName);
      cy.xpath(passwordField).type(smallPassword);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); //20
  it("should show the message of short blog title, name and email description", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(200);
      cy.xpath(nameField).type(smallName);
      cy.wait(200);
      cy.xpath(emailField).type(smallEmail);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});

// 21-23
describe("Length bigger than the allowed", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  }); //21
  it("should reject the account creation if the name is bigger than 100", () => {
    cy.get("form").within(() => {
      cy.wait(200);
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).clear().type(invalidName, {
        force: true,
        delay: 0,
      });
      cy.wait(200);
      cy.on("uncaught:exception", (err, runnable) => {
        expect(err.message).to.include(
          "Request was rejected because it was invalid"
        );
        return false;
      });
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); //22
  it("should reject the account creation if the blog title is bigger than 100", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(invalidBlogName, { force: true, delay: 0 });
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  }); //23
  it("should reject the account creation if the email is bigger than 100", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type(invalidEmail + "@djdjd.com", {
        force: true,
        delay: 0,
      });
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasena");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});

// 24-27
describe("Length equal to 1 character", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  });
  // 24
  it("should reject the account creation if the title, name and email length is equal to 1", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(200);
      cy.xpath(nameField).type(smallName);
      cy.wait(200);
      cy.xpath(emailField).type(smallEmail);
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasenavalida");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  // 25
  it("should reject the account creation if the title, name and password length is equal to 1", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type(smallBlogName);
      cy.wait(200);
      cy.xpath(nameField).type(smallName);
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type(smallPassword);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  // 26
  it("should reject the account creation if the email length is equal to 1", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type(smallEmail);
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasenavalida");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  // 27
  it("should reject the account creation if the password length is equal to 1", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type(smallPassword);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});

// 27-30
describe("Password options", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  });
  // 28
  it("should reject the account creation if password has only 9 digits", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type(passwordWith9Digits);
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
  // 29
  it("should reject the account creation if email does not have the @ character", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type(emailWithoutValidFormat);
      cy.wait(200);
      cy.xpath(passwordField).type("Contrasenavalida");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});
// 30
describe("Create account", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/ghost/#/setup/two");
    cy.wait(200);
  });
  it("should create the account with valid information", () => {
    cy.get("form").within(() => {
      cy.xpath(blogField).type("Blog ejemplo");
      cy.wait(200);
      cy.xpath(nameField).type("Alonso Cantu");
      cy.wait(200);
      cy.xpath(emailField).type("a.cantu@uniandes.edu.co");
      cy.wait(200);
      cy.xpath(passwordField).type("Micontrasenaestaencriptada1990!");
      cy.wait(200);
      cy.xpath(createButton).click();
    });
    cy.wait(200);
  });
});
