class LandingPage {

    getPageHeader(){
        return cy.get('h1.heading')
    }

    getPageSubHeader(){
        return cy.get('h2')
    }

    getDropdownLink(){
        return cy.get('li a[href="/dropdown"]')
    }

    getCheckboxLink(){
        return cy.get('li a[href="/checkboxes"]')
    }

    getFormAuthenticationLink(){
        return cy.get('li a[href="/login"]')
    }

    getMultiWindowLink(){
        return cy.get('li a[href="/windows"]')
    }

}

export default LandingPage
