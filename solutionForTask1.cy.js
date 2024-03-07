
/// <reference types="cypress" />

it('Solution fo Task1', () => {
    cy.visit("https://demo.productionready.io/#/register");
    // conduit logo 
    cy.get(".navbar-brand")
    // Home link 
    cy.get(".nav-link").first()
    // Sign up link 
    cy.get(".nav-link").eq(2)
    // Sign up title 
    cy.contains("h1","Sign up")
    // Have an account link 
    cy.contains("a","Have an account?")
    // Username input field 
    cy.get("[placeholder=Username]")
    // email input field 
    cy.get("input[type=email]")
    // password input field 
    cy.get(".form-group").last() 
    // sign up button 
    cy.get("button").contains("Sign up")
    // conduit link 
    cy.get("footer").find("a").first();
    // copyright span 
    cy.get("footer > div > a + span")
    // or you can simply use this class for copyright span  
    cy.get(".attribution")

});