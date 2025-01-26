import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Counter from "./counter";

describe("Counter component", () => {
  render(<Counter />);

  test("Initializing the counter with 0", () => {
    expect(screen.getByRole("heading", { level: 2, name: "0" })).toBeDefined();
  });

  test("Increment counter by 1", () => {
    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByRole("heading", { level: 2, name: "1" })).toBeDefined();
  });
});
