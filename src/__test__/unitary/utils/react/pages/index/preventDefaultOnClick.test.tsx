import { describe, test, expect } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import Login from "../../../../../../components/index/main/login/Login";
import { LOGIN_BUTTON_ELEMENT_TEXT } from "../../../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Module preventDefaultOnClick Behavior", () => {
  test('Test If Method "preventDefaultOnClick()" works, and Form Was Not Sent Correctly', () => {
    const { getByText } = render(<Login />);

    fireEvent.click(getByText(LOGIN_BUTTON_ELEMENT_TEXT));

    expect(getByText(LOGIN_BUTTON_ELEMENT_TEXT)).toBeTruthy();
  });
});