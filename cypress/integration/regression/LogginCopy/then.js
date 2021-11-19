/// <reference types="cypress" />
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('i can see the alert with {string}', async (text) => {
    await cy
        .get('#flash')
        .should('to.contain', text)
})