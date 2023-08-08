import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Index from "../../../pages/Index";
import { CTA_ELEMENT_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Index Page Behavior", () => {
  test("Test If Element Was Placed On Screen Correctly", () => {
    const { getByText } = render(<Index />);

    expect(getByText(CTA_ELEMENT_TEXT)).toBeTruthy();
  });
});
