import { describe, test, expect } from "@jest/globals";
import { render, fireEvent } from "@testing-library/react";
import Main from "../../../../../components/index/main/Main";
import {
  CTA_ELEMENT_TEXT,
  LOGIN_BUTTON_ELEMENT_TEXT,
} from "../../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Main Component Behavior", () => {
  test("Test If Component Elements Was Placed on Screen Correctly", () => {
    const { getByText } = render(<Main />);

    expect(getByText(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
  });

  test("Test If Formulary Prevent Event Is Working, Not Send Formulary and Staying In The Same Page Correctly", () => {
    const { getByText } = render(<Main />);

    fireEvent.click(getByText(LOGIN_BUTTON_ELEMENT_TEXT));

    expect(getByText(CTA_ELEMENT_TEXT)).toBeTruthy();
  });
});
