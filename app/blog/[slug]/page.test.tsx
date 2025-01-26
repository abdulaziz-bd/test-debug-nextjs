import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import BlogDetailsPage from "./page";

test("Test Blog Dynamic Route", () => {
  render(<BlogDetailsPage params={{ slug: "Test" }} />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Param: Test" })
  ).toBeDefined();
});
