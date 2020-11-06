Feature: User CRUD

  Scenario: User create
    When user create
    Then check that user was created

  Scenario: User update
    When user updated
    Then check that user was updated

  Scenario: User read
    When user read
    Then check that user was read

  Scenario: User delete
    When user delete
    Then check that user was deleted

  Scenario: User read
    When try to read deleted user
    Then check that deleted user was read
