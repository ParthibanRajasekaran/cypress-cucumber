# cypress-cucumber 
  <p align="left">
    <a href="https://github.com/ParthibanRajasekaran/cypress-cucumber/actions">
      <img alt="Tests" src="https://github.com/ParthibanRajasekaran/cypress-cucumber/workflows/Cypress Tests/badge.svg" />
    </a>
    <br />
  </p>

Official documentation: [Cypress](https://docs.cypress.io)
To know about recent Cypress feature click [here](https://www.cypress.io/features/)

## Pre-requisite:

Minimum configuration for optimal usage:
[NPM](https://www.npmjs.com) -  6.14.14
[Node](https://nodejs.org/en/download/) - 14.17.4

Note: 
- Node installation will automatically intall NPM from the above link
- You can validate the version installed via
```bash 
npm --version
node --version
```

**IDE Installation:** [Visual Studio code / VS code](https://code.visualstudio.com)
Extensions suggested for optimal Cypress usage: https://docs.cypress.io/guides/tooling/IDE-integration#Visual-Studio-Code
Extensions for icon theme: https://marketplace.visualstudio.com/search?term=icon&target=VSCode&category=All%20categories&sortBy=Relevance

## Gettings started:

Clone: https://github.com/vwdfive/cypress-cucumber
Open the project in your editor
Open Terminal at bottom right corner and do the below:
```bash 
npm install --save-dev
```
To ensure Cypress installation type the below in your terminal:
```bash 
npx cypress open
```
Verify if the [Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner#Overview) is launched

In the test runner, select the feature to execute and the desired browser from the dropdown and visualize the test execution

To run the tests via CLI on a headless mode
```bash 
npx cypress run
```

To run the tests via CLI with an env config
```bash 
npx cypress run --env configFile=<<env file>>
```

To run the tests via CLI with an env config
```bash 
npx cypress run --browser chrome
```

To run the tests via CLI and generate a execution report
```bash 
npx cypress run --reporter mochawesome
```

## Implementing tests

- Create a XXX.feature file within **cypress / integration / cucumber** (*Eg. XYZ.feature*)
- Create scenarios within the feature file in gherkin format for your requirement 
- Select the scenario create and right click on it and copy step definition to the clip board
- Create a folder with the same name as the **.feature** file name (*Eg. XYZ if the feature file name was XYZ.feature*)
- Within the created folder, create a **StepDefinition class**
- Paste the step definitions from the clipboard with blank step definitions
- Create pages and components class in **cypress / pageObjects** and add only locators to it (Only [CSS selectors](https://saucelabs.com/resources/articles/selenium-tips-css-selectors) can be used as locators)
- Create an object for the page class within the StepDefinition class and access the locators and add relevant actions and validations 

## Bonus
[Cypress Cheat Sheet](https://chercher.tech/cypress-io/cheat-sheet-cypress-io)
