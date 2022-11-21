import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("Render summary of event", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("Render summary of mock event correctly", () => {
    expect(EventWrapper.find(".summary").text()).toBe(event.summary);
  });

  test("Render information of event", () => {
    expect(EventWrapper.find(".information")).toHaveLength(1);
  });

  test("Render information of mock event correctly", () => {
    expect(EventWrapper.find(".information").text()).toBe(
      `${event.start.dateTime} ${event.start.timeZone} ${event.location}`
    );
  });

  test("Render button to show details", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("Do not render details by default", () => {
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

  test("Render details when show details button is clicked", () => {
    EventWrapper.find(".show-details").at(0).simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("Render title, link, and description when details visible", () => {
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find(".details-title")).toHaveLength(1);
    expect(EventWrapper.find(".details-link")).toHaveLength(1);
    expect(EventWrapper.find(".details-description")).toHaveLength(1);
  });

  test("Render button to hide details when details visible", () => {
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find(".hide-details")).toHaveLength(1);
  });

  test("Do not render details when hide details button is clicked", () => {
    EventWrapper.setState({ detailsVisible: true });
    EventWrapper.find(".hide-details").at(0).simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });
});
