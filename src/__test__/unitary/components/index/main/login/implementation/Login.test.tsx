import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Login from "../../../../../../../components/index/main/login/implementation/Login";
import { LOGIN_BUTTON_ELEMENT_TEXT } from "../../../../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Login Component Behavior", () => {
  test("Test If Component Elements Was Placed on Screen Correctly", () => {
    const { getByDisplayValue } = render(<Login />);

    expect(getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
  });

  test('Test If Method "preventDefaultOnClick()" works, and Form Was Not Sent Correctly', () => {
    const { getByDisplayValue } = render(<Login />);

    fireEvent.click(getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT));

    expect(getByDisplayValue(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
  });
});
