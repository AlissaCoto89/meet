# Meet App
## Intro
A serverless, progressive web application (PWA) built with React, using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
## Key features:
```
Feature 1: Filter Events by City
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Scenario 2: User should see a list of suggestions when they search for a city.
Scenario 3: User can select a city from the suggested list.
```
   
 *As a user I should be able to “filter events by city”, so that I can see the list of events that take place in that city.*
 
 ```
Feature 2: Show/hide an event's details
Scenario 1: An event element is collapsed by default
Scenario 2: User can expand an event to see its details
Scenario 3: User can collapse an event to hide its details
```
*As a user I should be able to show/hide event details, so that I can see more/less information about an event.*

```
Feature 3: Specify number of events
Scenario 1: When user hasn’t specified a number, 32 is the default number
Scenario 2: User can change the number of events they want to see
```
*As a user I should be able to specify number of events, so that I can see the exact number of events I want.*

```
Feature 4: Use the app when offline
Scenario 1: Show cached data when there’s no internet connection
Scenario 2: Show error when user changes the settings (city, time range)
```
*As a user I should be able to use the app when offline, so that I can get the information I 	searched for when I was online.*

```
Feature 5: Data visualization
Scenario 1: Show a chart with the number of upcoming events in each city
```
*As a user I should be able to see a chart with the upcoming events in each city, so that I am 	familiar with the events and maybe find something that interests me.*

Technologies used: JavaScript, React, Google Calendar API, AWS lambda, Jest / Enzyme, Jest-Cucumber, Puppeteer, Recharts

Deployed app link: https://alissacoto89.github.io/meet/
![meet](https://user-images.githubusercontent.com/109038162/208187942-8424dafd-0b6e-4cee-a345-211d52e5a818.png)
![meet2](https://user-images.githubusercontent.com/109038162/208201008-c5f76b42-cb24-4363-a601-cddbf6fec2db.png)
