import { describe, test, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Index from "../../../pages/Index";
import {
  COPYRIGHT_ELEMENT_TEXT,
  CTA_ELEMENT_TEXT,
  LOGIN_BUTTON_ELEMENT_TEXT,
} from "../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Index Page Behavior", () => {
  test("Test If Elements Was Placed Correctly", () => {
    const { getByText } = render(<Index />);

    expect(getByText(CTA_ELEMENT_TEXT)).toBeTruthy();
    expect(screen.getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
    expect(getByText(COPYRIGHT_ELEMENT_TEXT)).toBeTruthy();
  });

  test("Test If Form Was Not Sent Correctly", () => {
    render(<Index />);

    fireEvent.click(screen.getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT));

    expect(screen.getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
  });
});
