import React from "react";
import { render } from "@testing-library/react";
import QuizApp from "./QuizApp";

describe("QuizApp tests", () => {
  it("should render", () => {
    expect(render(<QuizApp />)).toBeTruthy();
  });
});
