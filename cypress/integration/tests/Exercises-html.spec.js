/**
 * @author Agustina Edmé Aliciardi
 */
 import githubPage from '../pages/githubPage';
 import data from '../../fixtures/students.json'
 
 const gh = new githubPage;
 var stuId = 0;
 
 describe('Ejercicios de HTML', () => {
 
    beforeEach(() => {
        cy.visit(data[stuId].github_exercises);
    });

    it('Ejercicio 1: Primera Página web', () => {
        cy.log('https://ucc-labcompu2.github.io/filminas/U4_HTML.html#/9');
        let repositoryName = data[stuId].github_exercises.split('/');
        repositoryName = repositoryName[repositoryName.length-1]

        gh.getHTMLfolder().click();
        cy.wait(200);
        gh.getBreadcrum().should('contain.text', repositoryName+'/Ejercicios-HTML/');
        cy.get('a').contains('index.html').click();
        gh.getLineCode().contains('<!DOCTYPE html>');
        gh.getLineCode().contains('<head>');
        gh.getLineCode().contains('<title>');
        gh.getLineCode().contains('</title>');
        gh.getLineCode().contains('name="autor"').contains('meta');
        gh.getLineCode().contains('name="descripcion"').contains('meta');
        gh.getLineCode().contains('name="keywords"').contains('meta');
    });

    it('Ejercicio 2: Secciones', () => {
        cy.log('https://ucc-labcompu2.github.io/filminas/U4_HTML.html#/17');
        let repositoryName = data[stuId].github_exercises.split('/');
        repositoryName = repositoryName[repositoryName.length-1]

        gh.getHTMLfolder().click();
        cy.wait(200);
        gh.getBreadcrum().should('contain.text', repositoryName+'/Ejercicios-HTML/');
        cy.get('a').contains('ej_noticia.html').click();
        //Header
        gh.getLineCode().contains('<header>');
        gh.getLineCode().contains('</header>');
        gh.getLineCode().contains('<img src="imagenes/');
        //Section
        gh.getLineCode().contains('<section>');
        gh.getLineCode().contains('</section>');
        gh.getLineCode().contains('<p>');
        gh.getLineCode().contains('</p>');
        gh.getLineCode().contains('<u>');
        gh.getLineCode().contains('</u>');
        gh.getLineCode().contains('<b>');
        gh.getLineCode().contains('</b>');
        gh.getLineCode().contains('<i>');
        gh.getLineCode().contains('</i>');
        //Footer
        gh.getLineCode().contains('<footer>');
        gh.getLineCode().contains('</footer>');
    });

    it('Ejercicio 3: Títulos', () => {
        cy.log('https://ucc-labcompu2.github.io/filminas/U4_HTML.html#/18');
        let repositoryName = data[stuId].github_exercises.split('/');
        repositoryName = repositoryName[repositoryName.length-1]

        gh.getHTMLfolder().click();
        cy.wait(200);
        gh.getBreadcrum().should('contain.text', repositoryName+'/Ejercicios-HTML/');
        cy.get('a').contains('ej_noticia.html').click();
        gh.getLineCode().contains('<h1>');
        gh.getLineCode().contains('</h1>');
        gh.getLineCode().contains('<h3>');
        gh.getLineCode().contains('</h3>');
        gh.getLineCode().contains('<h6>');
        gh.getLineCode().contains('</h6>');
        gh.getLineCode().contains('<h5>');
        gh.getLineCode().contains('</h5>');
    });
 })