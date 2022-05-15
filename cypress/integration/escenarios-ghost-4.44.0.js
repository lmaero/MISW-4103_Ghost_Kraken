describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3002/ghost/#setup').screenshot('EmptyBlogName4400-1')
      cy.wait(7000)
  })
  it('EmptyBlogName4400', ()=>{
      cy.get('form').within(() => {
          //cy.get('input[id="blog-title"]').type('')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('EmptyBlogName4400-2')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('EmptyBlogName4400-3')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('EmptyBlogName4400-4')
          cy.get('button[id="ember9"]').click().screenshot('EmptyBlogName4400-5')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3002/ghost/#/setup').screenshot('UserWithoutName4400-1')
      cy.wait(7000)
  })
  it('UserWithoutName4400', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('UserWithoutName4400-2')
          //cy.get('input[id="name"]').type('Alonso Cantu')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('UserWithoutName4400-3')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('UserWithoutName4400-4')
          cy.get('button[id="ember9"]').click().screenshot('UserWithoutName4400-5')

      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3002/ghost/#/setup').screenshot('InvalidEmail4400-1')
      cy.wait(7000)
  })
  it('InvalidEmail4400', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('InvalidEmail4400-2')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('InvalidEmail4400-3')
          cy.get('input[id="email"]').type('a.cantu#uniandes.edu.co').screenshot('InvalidEmail4400-4')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('InvalidEmail4400-5')
          cy.get('button[id="ember9"]').click().screenshot('InvalidEmail4400-6')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3002/ghost/#/setup').screenshot('InvalidPassword4400-1')
      cy.wait(7000)
  })
  it('InvalidPassword4400', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('InvalidPassword4400-2')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('InvalidPassword4400-3')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('InvalidPassword4400-4')
          cy.get('input[id="password"]').type('MISO4').screenshot('InvalidPassword4400-5')
          cy.get('button[id="ember9"]').click().screenshot('InvalidPassword4400-6')
      })
      cy.wait(1000)
  })
});

describe('CypressGhost', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3002/ghost/#/setup').screenshot('Login4400-1')
      cy.wait(7000)
  })
  it('Login4400', ()=>{
      cy.get('form').within(() => {
          cy.get('input[id="blog-title"]').type('Ghost Blog').screenshot('Login4400-2')
          cy.get('input[id="name"]').type('Alonso Cantu').screenshot('Login4400-3')
          cy.get('input[id="email"]').type('a.cantu@uniandes.edu.co').screenshot('Login4400-4')
          cy.get('input[id="password"]').type('MISO420899494949494').screenshot('Login4400-5')
          cy.get('button[id="ember9"]').click().screenshot('Login4400-6')
      })
      cy.wait(1000)
  })
});