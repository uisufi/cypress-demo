
/// <reference types="Cypress" />

import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given("I navigate to Google", () => {
    cy.visit("/");
})

Then("I see Google page opened", () => {
    console.log("Another step")
})

And("I search for a Pixel phone", () => {
    console.log("Another step")
})

When("I hit enter", () => {
    console.log("Another step")
})

Then("Pixel phones are displayed in the search page", () => {
    const Gmail = 'Gmail'
    cy.contains(Gmail).should('be.visible')
})