import puppeteer from "puppeteer";
import { mockData } from "../mock-data";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ["--disable-extensions"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .show-details");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .hide-details");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  afterEach(async () => {
    await page.reload();
  });

  test("When the user has not searched for a city, show upcoming events from all cities", async () => {
    const numOfEvents = await page.$$eval(
      ".event",
      (element) => element.length
    );
    expect(numOfEvents).toBe(mockData.length);
  });

  test("The user should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin", { delay: 100 });
    const numOfCities = await page.$$eval(
      ".suggestions li",
      (element) => element.length
    );
    expect(numOfCities).toBe(mockData.length);
  });

  test("The user can select a city from the suggested list", async () => {
    await page.type(".city", "Berlin", { delay: 100 });
    await page.click(".suggestions li");
    const locationText = await page.$eval(".event", (el) => el.innerText);
    expect(locationText).toContain("Berlin");
  });
});
