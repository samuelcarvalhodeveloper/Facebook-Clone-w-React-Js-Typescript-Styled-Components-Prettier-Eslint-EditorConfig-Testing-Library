import { FormEvent } from "react";

function preventLoginFormSubmit(
  formHTMLElement: FormEvent<HTMLFormElement>,
): void {
  formHTMLElement.preventDefault();
}

export default preventLoginFormSubmit;
