import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Footer from "../../../../../../components/index/footer/implementation/Footer";
import { COPYRIGHT_ELEMENT_TEXT } from "../../../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Footer Component Behavior", () => {
  test("Test If Component Elements Was Placed on Screen Correctly", () => {
    const { getByText } = render(<Footer />);

    expect(getByText(COPYRIGHT_ELEMENT_TEXT)).toBeTruthy();
  });
});
