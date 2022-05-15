describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.wait(2000)
      cy.visit('http://localhost:3001/ghost/#/setup/two').screenshot('EmptyBlogName3411-1')
      cy.wait(7000)
  })
  it('EmptyBlogName3411', ()=>{
      cy.get('form').within(() => {
          //cy.get('input[id="blog-title"]').type('')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('EmptyBlogName3411-2')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('EmptyBlogName3411-3')
          cy.viewport(1280,800)
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('EmptyBlogName3411-4')
          cy.viewport(1280,800)
          cy.get('button[id="ember19"]').click().screenshot('EmptyBlogName3411-5')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3001/ghost/#/setup/two').screenshot('UserWithoutName3411-1')
      cy.wait(7000)
  })
  it('UserWithoutName3411', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('UserWithoutName3411-2')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('UserWithoutName3411-3')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('UserWithoutName3411-4')
          cy.get('button[id="ember19"]').click().screenshot('UserWithoutName3411-5')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3001/ghost/#/setup/two').screenshot('InvalidEmail3411-1')
      cy.wait(7000)
  })
  it('InvalidEmail3411', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('InvalidEmail3411-2')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('InvalidEmail3411-3')
          cy.get('input[id="email"]').type('a.cantu#uniandes.edu.co').screenshot('InvalidEmail3411-4')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('InvalidEmail3411-5')
          cy.get('button[id="ember19"]').click().screenshot('InvalidEmail3411-6')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3001/ghost/#/setup/two').screenshot('InvalidPassword3411-1')
      cy.wait(7000)
  })
  it('InvalidPassword3411', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('InvalidPassword3411-2')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('InvalidPassword3411-3')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('InvalidPassword3411-4')
          cy.get('input[id="password"]').type('MISO4').screenshot('InvalidPassword3411-5')
          cy.get('button[id="ember19"]').click().screenshot('InvalidPassword3411-6')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3001/ghost/#/setup/two').screenshot('Login3411-1')
      cy.wait(7000)
  })
  it('Login3411', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('Login3411-2')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('Login3411-3')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('Login3411-4')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('Login3411-5')
          cy.get('button[id="ember19"]').click().screenshot('Login3411-6')
      })
      cy.wait(1000)
  })
});


