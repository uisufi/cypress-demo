/// <reference types="Cypress" />

import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

// Scenario: Search Pixel phones
Given('I navigate to Google', () => {
    cy.visit('/')
})

Then('I see Google page opened', () => {
    console.log('Another step')
})

And('I search for {string}', () => {
    console.log('Another step')
})

When('I hit enter', () => {
    console.log('Another step')
})

Then('Pixel phones are displayed in the search page', () => {
    cy.contains('Gmail').should('be.visible')
})

// Scenario: Searching Apples
Then('Apples are displayed in the search page', () => {
    cy.contains('Gmail1').should('be.visible')
})
