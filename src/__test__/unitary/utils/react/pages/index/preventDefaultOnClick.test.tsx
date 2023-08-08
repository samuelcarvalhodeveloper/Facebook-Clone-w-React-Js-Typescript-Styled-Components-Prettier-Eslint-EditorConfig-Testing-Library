import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import { LOGIN_BUTTON_ELEMENT_TEXT } from "../../../../../constants/pages/index/pageElementsInnerTextConstants";
import Index from "../../../../../../pages/Index";

describe("Test Module preventDefaultOnClick Behavior", () => {
  test('Test If Method: "preventDefaultOnClick()"; Don Not Send Form From Index Correctly Correctly', () => {
    const { getByDisplayValue } = render(<Index />);

    fireEvent.click(getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT));

    expect(getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
  });
});
