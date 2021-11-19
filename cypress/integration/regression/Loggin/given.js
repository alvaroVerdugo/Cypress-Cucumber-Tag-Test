/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I click on continue button', async () => {
    await cy
        .get('form > button[type="submit"]')
        .click()
})