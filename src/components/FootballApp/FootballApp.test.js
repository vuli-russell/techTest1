import React from "react";
import { render } from "@testing-library/react";
import FootballApp from "./FootballApp";

describe("FootballApp tests", () => {
  it("should render", () => {
    expect(render(<FootballApp />)).toBeTruthy();
  });
});
