import React from "react";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

describe("PlayerCard tests", () => {
  it("should render", () => {
    expect(render(<PlayerCard />)).toBeTruthy();
  });
});
