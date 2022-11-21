import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents.js";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("Render element", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test("Render input for number of events", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events-input")).toHaveLength(
      1
    );
  });

  test("Render default input for number of events of 32", () => {
    expect(
      NumberOfEventsWrapper.find(".number-of-events-input").prop("value")
    ).toBe("32");
  });

  test("Render change of input for number of events to 16", () => {
    const eventObject = { target: { value: "16" } };
    NumberOfEventsWrapper.find(".number-of-events-input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("eventsNumber")).toBe("16");
  });
});
