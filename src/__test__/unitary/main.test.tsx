import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import { CTA_ELEMENT_TEXT } from "../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Main Module Behavior", () => {
  test("Test If React Dom with React-Router-Dom BrowserRouter Component was Configured Correctly", () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });

    expect(getByText(CTA_ELEMENT_TEXT)).toBeTruthy();
  });
});
