/// <reference types="cypress" />

import { type } from "os";

it('google test', function() {
    cy.visit('https://www.google.com')
    //cy.get('.gLFyf').type('Qmetry Framework {enter}')
    cy.get('.gLFyf').type('Qmetry Framework')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
})