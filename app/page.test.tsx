import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "./page";

test("Test Page component", () => {
  render(<Page />);

  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();

  expect(screen.getByRole("link", { name: "About" })).toHaveProperty(
    "href",
    "http://localhost:3000/about"
  );
});
