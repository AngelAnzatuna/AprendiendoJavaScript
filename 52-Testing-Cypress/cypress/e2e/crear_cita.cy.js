/// <reference types="cypress" />

describe('Validad el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook');

        cy.get('[data-cy="propietario-input"]')
            .type('Angel');
        
        cy.get('[data-cy="telefono-input"]')
            .type('0123456789');

        cy.get('[data-cy="fecha-input"]')
            .type('2026-01-22');

        cy.get('[data-cy="hora-input"]')
            .type('19:05');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('mucho sueño');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        // Seleccionar Alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')
    });
});