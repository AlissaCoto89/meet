import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import EventList from "../EventList";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("If the user has not specified a number of events to be displayed, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has not specified a number of events to be displayed",
      () => {}
    );
    let AppWrapper;
    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("the user should see a maximum of 32 events by default", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  test("The user can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the list of events is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user changes the number of events displayed", () => {
      AppWrapper.update();
      AppWrapper.find(NumberOfEvents)
        .find(".number-of-events-input")
        .simulate("change", { target: { value: 1 } });
    });

    then("the list should update to the specified number of events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(EventList).props().events).toHaveLength(1);
    });
  });
});
