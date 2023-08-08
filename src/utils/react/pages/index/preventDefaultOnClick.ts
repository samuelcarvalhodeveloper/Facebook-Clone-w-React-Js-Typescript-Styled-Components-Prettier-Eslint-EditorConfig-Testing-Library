import { FormEvent } from "react";

function preventDefaultOnClick(e: FormEvent<HTMLFormElement>): void {
  e.preventDefault();
}

export default preventDefaultOnClick;
