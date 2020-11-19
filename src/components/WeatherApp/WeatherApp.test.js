import React from "react";
import { render } from "@testing-library/react";
import WeatherApp from "./WeatherApp";

describe("WeatherApp tests", () => {
  it("should render", () => {
    expect(render(<WeatherApp />)).toBeTruthy();
  });
});
