/// <reference types="cypress" />
import { When } from 'cypress-cucumber-preprocessor/steps'

When('I enter the {string} and {string}', async (username, password) => {
    await cy
        .get('#username')
        .type(username)
    await cy
        .get('#password')
        .type(password)
})