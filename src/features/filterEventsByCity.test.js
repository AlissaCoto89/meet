import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import CitySearch from "../CitySearch";
import { extractLocations } from "../api";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/filterEventsByCity.feature");

defineFeature(feature, (test) => {
  test("When the user has not searched for a city, show upcoming events from all cities", ({
    given,
    when,
    then,
  }) => {
    given("The user has not searched for any city", () => {});

    let AppWrapper;
    when("The user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("The user should see the list of upcoming events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });
  });

  test("The user should see a list of suggestions when they search for a city", ({
    given,
    when,
    then,
  }) => {
    let locations, CitySearchWrapper;
    given("The main page is open", () => {
      locations = extractLocations(mockData);
      CitySearchWrapper = shallow(
        <CitySearch updateEvents={() => {}} locations={locations} />
      );
    });

    when("The user starts typing in the city textbox", () => {
      CitySearchWrapper.find(".city").simulate("change", {
        target: { value: "Berlin" },
      });
    });

    then(
      "The user should receive a list of cities (suggestions) that match what they’ve typed",
      () => {
        expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(2);
      }
    );
  });

  test("The user can select a city from the suggested list", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given("The user was typing “Berlin” in the city textbox", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find(".city").simulate("change", {
        target: { value: "Berlin" },
      });
    });

    and("The list of suggested cities is showing", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".suggestions li")).toHaveLength(2);
    });

    when(
      "The user selects a city (e.g., “Berlin, Germany”) from the list",
      () => {
        AppWrapper.find(".suggestions li").at(0).simulate("click");
      }
    );

    then(
      "Their city should be changed to that city (i.e., “Berlin, Germany”)",
      () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state("query")).toBe("Berlin, Germany");
      }
    );

    and(
      "The user should receive a list of upcoming events in that city",
      () => {
        expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
      }
    );
  });
});
