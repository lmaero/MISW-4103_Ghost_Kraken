import { signIn } from "../../support/utilities";
import { faker } from "@faker-js/faker";
require("cypress-xpath");


const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min);
const getAPrioriDatapool = () => require("../../support/priori_datapool_4-general-settings.json");
const getDynamicRandomDatapool = () => generateDynamicRandomDatapool();
const blogField = '/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input';
const nameField = '/html/body/div[2]/div/main/div/div/section/form/div[3]/span/input';
const emailField = '/html/body/div[2]/div/main/div/div/section/form/div[4]/span/input';
const passwordField = '/html/body/div[2]/div/main/div/div/section/form/div[5]/span/input';
const createButton = '/html/body/div[2]/div/main/div/div/section/form/button/span';

// 1-4
describe('One empty field', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3001/ghost/#/setup/two')
      cy.wait(5000)
  })  //1
  it('should reject the account creation if the blog title is the only field empty', ()=>{
      cy.get('form').within(() => {
          cy.xpath(nameField).type('Alonso Cantu');
          cy.wait(1000);
          cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
          cy.wait(1000);
          cy.xpath(passwordField).type('Contrasena');
          cy.wait(1000);
          cy.xpath(createButton).click();
      })
      cy.wait(1000)
  })  
  //2
  it('should reject the account creation if the person name is the only field empty', ()=>{
    cy.get('form').within(() => {
        cy.xpath(blogField).type('Blog de ejemplo');  
        cy.wait(1000);
        cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
        cy.wait(1000);
        cy.xpath(passwordField).type('Contrasena')
        cy.wait(1000);
        cy.xpath(createButton).click();
    })
    cy.wait(1000)
})
//3
it('should reject the account creation if the email is the only field empty', ()=>{
    cy.get('form').within(() => {
        //cy.get('input[id="blog-title"]').type('')
        cy.xpath(blogField).type('Blog ejemplo');  
        cy.wait(1000);
        cy.xpath(nameField).type('Alonso Cantu');
        cy.wait(1000);
        cy.xpath(passwordField).type('Contrasena')
        cy.wait(1000);
        cy.xpath(createButton).click();
    })
    cy.wait(1000)
})  
// 4
it('should reject the account creation if the password is the only field empty', ()=>{
    cy.get('form').within(() => {
        //cy.get('input[id="blog-title"]').type('')
        cy.xpath(blogField).type('Blog ejemplo');  
        cy.wait(1000);
        cy.xpath(nameField).type('Alonso Cantu');
        cy.wait(1000);
        cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
        cy.wait(1000);
        cy.xpath(createButton).click();
    })
    cy.wait(1000)
})  
}); 
// 5-10
describe('Two empty fields', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001/ghost/#/setup/two')
        cy.wait(5000)
    })  // 5
    it('should reject the account creation if the blog field and name field empty', ()=>{
        cy.get('form').within(() => {
            //cy.xpath(blogField).type('Blog ejemplo');  
            //cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            cy.wait(1000);
            cy.xpath(passwordField).type('Contrasena');
            cy.wait(1000);
            cy.xpath(createButton).click();
        })
        cy.wait(1000)
    })  
    // 6
    it('should reject the account creation if the blog field and email field empty', ()=>{
      cy.get('form').within(() => {
            //cy.xpath(blogField).type('Blog ejemplo');  
            //cy.wait(1000);
            cy.xpath(nameField).type('Alonso Cantu');
            cy.wait(1000);
            //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            //cy.wait(1000);
            cy.xpath(passwordField).type('Contrasena');
            cy.wait(1000);
            cy.xpath(createButton).click();
      })
      cy.wait(1000)
  }) // 7
    it('should reject the account creation if the blog field and password field empty', ()=>{
        cy.get('form').within(() => {
            //cy.xpath(blogField).type('Blog ejemplo');  
            //cy.wait(1000);
            cy.xpath(nameField).type('Alonso Cantu');
            cy.wait(1000);
            cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            cy.wait(1000);
            //cy.xpath(passwordField).type('Contrasena');
            //cy.wait(1000);
            cy.xpath(createButton).click();
      })
      cy.wait(1000)
  })  // 8
    it('should reject the account creation if the name field and email field empty', ()=>{
        cy.get('form').within(() => {        
            cy.xpath(blogField).type('Blog ejemplo');  
            cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            //cy.wait(1000);
            cy.xpath(passwordField).type('Contrasena');
            cy.wait(1000);
            cy.xpath(createButton).click();
      })
      cy.wait(1000)
  })  // 9 
  it('should reject the account creation if the name field and password field empty', ()=>{
    cy.get('form').within(() => {        
            cy.xpath(blogField).type('Blog ejemplo');  
            cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            cy.wait(1000);
            //cy.xpath(passwordField).type('Contrasena');
            //cy.wait(1000);
            cy.xpath(createButton).click();
    })
    cy.wait(1000)
  })  // 10
  it('should reject the account creation if the email field and password field empty', ()=>{
    cy.get('form').within(() => {        
            cy.xpath(blogField).type('Blog ejemplo');  
            cy.wait(1000);
            cy.xpath(nameField).type('Alonso Cantu');
            cy.wait(1000);
            //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            //cy.wait(1000);
            //cy.xpath(passwordField).type('Contrasena');
            //cy.wait(1000);
            //cy.xpath(createButton).click();
    })
    cy.wait(1000)
  })
}); 
// 11-13
describe('Three empty fields', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001/ghost/#/setup/two')
        cy.wait(5000)
    })  //11
  it('should reject the account creation if the blog, name, and email fields are empty', ()=>{
    cy.get('form').within(() => {        
            //cy.xpath(blogField).type('Blog ejemplo');  
            //cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            //cy.wait(1000);
            cy.xpath(passwordField).type('Contrasena');
            cy.wait(1000);
            cy.xpath(createButton).click();
    })
    cy.wait(1000)
  }) // 12
  it('should reject the account creation if the blog, name, and password fields are empty', ()=>{
    cy.get('form').within(() => {        
            //cy.xpath(blogField).type('Blog ejemplo');  
            //cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            cy.wait(1000);
            //cy.xpath(passwordField).type('Contrasena');
            //cy.wait(1000);
            cy.xpath(createButton).click();
    })
    cy.wait(1000)
  }) // 13
  it('should reject the account creation if the name, email and password fields are empty', ()=>{
    cy.get('form').within(() => {        
            cy.xpath(blogField).type('Blog ejemplo');  
            cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            //cy.wait(1000);
            //cy.xpath(passwordField).type('Contrasena');
            //cy.wait(1000);
            cy.xpath(createButton).click();
    })
    cy.wait(1000)
  }) 
});
// 11-13
describe('Four empty fields', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3001/ghost/#/setup/two')
        cy.wait(5000)
    })  //14
  it('should reject the account creation if the blog, name, and email and password fields are empty', ()=>{
    cy.get('form').within(() => {        
            //cy.xpath(blogField).type('Blog ejemplo');  
            //cy.wait(1000);
            //cy.xpath(nameField).type('Alonso Cantu');
            //cy.wait(1000);
            //cy.xpath(emailField).type('a.cantu@uniandes.edu.co');
            //cy.wait(1000);
            //cy.xpath(passwordField).type('Contrasena');
            //cy.wait(1000);
            cy.xpath(createButton).click();
    })
    cy.wait(1000)
  })
});