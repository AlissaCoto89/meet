Feature: Show/hide event details

    Scenario: An event element is collapsed by default
        Given the list of events is open
        When the user scrolls through the list of events
        Then all event details should be hidden

    Scenario: The user can expand an event to show its details
        Given the list of events is open
        When the user clicks on an event
        Then the event details should be shown

    Scenario: The user can collapse an event to hide its details
        Given the user has previously expanded an event to show its details
        When the user clicks on the hide button
        Then the event details should be hidden