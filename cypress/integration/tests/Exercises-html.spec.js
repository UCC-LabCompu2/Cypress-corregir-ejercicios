/**
 * @author Agustina Edmé Aliciardi
 */
import githubPage from '../pages/githubPage';
import data from '../../fixtures/students.json'

const gh = new githubPage;
var stuId = 0;

describe('Ejercicios de HTML', () => {

    before(() => {
        cy.visit(data[stuId].github_exercises);
    });

    it('Ejercicio 1: Primera Página web', () => {
        let repositoryName = data[stuId].github_exercises.split('/');
        repositoryName = repositoryName[repositoryName.length-1]

        gh.getHTMLfolder().click();
        cy.wait(200);
        gh.getBreadcrum().should('contain.text', repositoryName+'/Ejercicios-HTML/');
        cy.get('a').contains('index.html').click();
        gh.getLineCode().contains('<!DOCTYPE html>');
    });
})