/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the {string} page', async (url) => {
    await cy.visit('https://the-internet.herokuapp.com' + url)
})