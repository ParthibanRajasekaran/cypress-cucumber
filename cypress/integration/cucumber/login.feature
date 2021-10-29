Feature: User Login 

    User Authentication

    @validCredentials
    Scenario: Login with valid credentials
    Given I open Login Page
    When I enter valid credentials
    Then User must be able to login

    @invalidCredentials
    Scenario Outline: Login with invalid credentials
    Given I open Login Page
    When I enter invalid "<username>" "<password>"
    Then User must not be able to login

    Examples:
        |username | password |
        |username | password |
        |123456   | 123456   |