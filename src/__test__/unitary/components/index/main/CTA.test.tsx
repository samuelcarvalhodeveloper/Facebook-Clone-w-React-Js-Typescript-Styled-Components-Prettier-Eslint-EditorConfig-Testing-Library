import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import CTA from "../../../../../components/index/main/cta/CTA";
import { CTA_ELEMENT_TEXT } from "../../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test CTA Component Behavior", () => {
  test("Test If Component Elements Was Placed on Screen Correctly", () => {
    const { getByText } = render(<CTA />);

    expect(getByText(CTA_ELEMENT_TEXT)).toBeTruthy();
  });
});
