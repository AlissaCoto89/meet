Feature: Specify number of events

    Scenario: If the user has not specified a number of events to be displayed, 32 is the default number
        Given the user has not specified a number of events to be displayed
        When the user opens the app
        Then the user should see a maximum of 32 events by default

    Scenario: The user can change the number of events they want to see
        Given the list of events is open
        When the user changes the number of events displayed
        Then the list should update to the specified number of events