/**
 * @author Agustina Edmé Aliciardi
 */
 import githubPage from '../pages/githubPage';
 import data from '../../fixtures/students.json'
 
 const gh = new githubPage;
 var user;
 const year = '2022';
 
for(let stuId = 0 ; stuId < data.length ; stuId++){
    describe('Ejercicios de HTML: '+ data[stuId].name , () => {

        beforeEach(() => {
            user = data[stuId].github_user;
            cy.log(data[stuId].github_user)
            cy.log(data[stuId].name)
            cy.visit('https://github.com/UCC-LabCompu2/ejercicios'+ year + '-'+ user);
        });

        it('Ejercicio 1: Primera Página web', () => {
            cy.log('https://ucc-labcompu2.github.io/filminas/U4_HTML.html#/9');

            gh.getHTMLfolder().click();
            cy.wait(200);
            gh.getBreadcrum().should('contain.text', 'ejercicios'+ year + '-' + data[stuId].github_user +'/Ejercicios-HTML/');
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

            gh.getHTMLfolder().click();
            cy.wait(200);
            gh.getBreadcrum().should('contain.text', 'ejercicios'+ year + '-' + data[stuId].github_user +'/Ejercicios-HTML/');
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

            gh.getHTMLfolder().click();
            cy.wait(200);
            gh.getBreadcrum().should('contain.text', 'ejercicios'+ year + '-' + data[stuId].github_user +'/Ejercicios-HTML/');
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

        it('Ejercicio 4: Listas', () => {
            cy.log('http://ucc-labcompu2.github.io/filminas/U4_HTML.html#/24');

            gh.getHTMLfolder().click();
            cy.wait(200);
            gh.getBreadcrum().should('contain.text', 'ejercicios'+ year + '-' + data[stuId].github_user +'/Ejercicios-HTML/');
            cy.get('a').contains('ej_listas.html').click();
            //Lists
            gh.getLineCode().contains('<ul>');
            gh.getLineCode().contains('</ul>');
            gh.getLineCode().contains('<li>');
            gh.getLineCode().contains('</li>');
            gh.getLineCode().contains('<ol>');
            gh.getLineCode().contains('</ol>');
            //Image
            gh.getLineCode().contains('<img src=');  
        });

        it('Ejercicio 4: Link', () => {
            cy.log('http://ucc-labcompu2.github.io/filminas/U4_HTML.html#/25');

            gh.getHTMLfolder().click();
            cy.wait(200);
            gh.getBreadcrum().should('contain.text', 'ejercicios'+ year + '-' + data[stuId].github_user +'/Ejercicios-HTML/');
            cy.get('a').contains('ej_noticia.html').click();
            //Nav
            gh.getLineCode().contains('<nav>');
            gh.getLineCode().contains('</nav>');
            //Link
            gh.getLineCode().contains('<a href=');
            gh.getLineCode().contains('</a');
        });

        it('Ejercicio 5: Tablas', () => {
            cy.log('http://ucc-labcompu2.github.io/filminas/U4_HTML.html#/35');

            gh.getHTMLfolder().click();
            cy.wait(200);
            gh.getBreadcrum().should('contain.text', 'ejercicios'+ year + '-' + data[stuId].github_user +'/Ejercicios-HTML/');
            cy.get('a').contains('ej_tablas.html').click();
            //Table
            gh.getLineCode().contains('<table>');
            gh.getLineCode().contains('</table>');
            gh.getLineCode().contains('<thead>');
            gh.getLineCode().contains('</thead>');
            gh.getLineCode().contains('<th>');
            gh.getLineCode().contains('</th>');
            gh.getLineCode().contains('<tbody>');
            gh.getLineCode().contains('</tbody>');
            gh.getLineCode().contains('<tr>');
            gh.getLineCode().contains('</tr>');
            gh.getLineCode().contains('<td>');
            gh.getLineCode().contains('</td>');
            gh.getLineCode().contains('colspan');
            gh.getLineCode().contains('rowspan');
            //Link
            gh.getLineCode().contains('<a href=');
            gh.getLineCode().contains('</a>');
            //Coments
            gh.getLineCode().contains('<!--');
            gh.getLineCode().contains('-->');
        });
    })
}
 