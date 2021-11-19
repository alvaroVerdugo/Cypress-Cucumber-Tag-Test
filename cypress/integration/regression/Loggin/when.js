/// <reference types="cypress" />
import { When } from 'cypress-cucumber-preprocessor/steps'

When('I enter the {string} and {string}', async (username, password) => {
     cy
        .get('#username')
        .type(username)
     cy
        .get('#password')
        .type(password)
})