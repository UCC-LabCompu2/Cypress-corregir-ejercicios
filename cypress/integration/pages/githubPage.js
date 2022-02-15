/// <reference types="cypress" />

class GithubPageLocators {
    constructor() {
      this.html_exercises = 'a[title="Ejercicios-HTML"]';
      this.css_exercises = 'a[title="Ejercicios-CSS"]';
      this.js_exercises = 'a[title="Ejercicios-JavaScript"]';
      this.breadcrum = 'div[class="d-none d-sm-block"]';
      this.lineCode = 'tbody tr td';
    }
  }
  
  export default class Github {
    constructor() {
      this.locators = new GithubPageLocators();
    }

    getHTMLfolder(){
      return cy.get(this.locators.html_exercises);
    }

    getCSSfolder(){
        return cy.get(this.locators.css_exercises);
    }

    getJSfolder(){
        return cy.get(this.locators.js_exercises);
    }

    getBreadcrum(){
        return cy.get(this.locators.breadcrum);
    }

    getLineCode(){
        return cy.get(this.locators.lineCode);
    }
  }
  