import React from "react";
import { render } from "@testing-library/react";
import Router from "./Router";

describe("Router tests", () => {
  it("should render", () => {
    expect(render(<Router />)).toBeTruthy();
  });
});
