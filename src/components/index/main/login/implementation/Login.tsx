import { FormEvent, MouseEvent } from "react";
import preventLoginFormSubmit from "../infrastructure/ui/prevent_login_form_submit/preventLoginFormSubmit";
import Styles from "../styles/Styles";

function Login(): JSX.Element {
  return (
    <Styles>
      <form
        action="#"
        className="login__form">
        <input
          type="text"
          autoComplete="new-password"
          className="login__email"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          autoComplete="new-password"
          className="login__password"
          placeholder="Password"
        />
        <input
          type="submit"
          className="login__submit"
          value="Log In"
          onClick={(
            event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>,
          ) => {
            const e: FormEvent<HTMLFormElement> =
              event as unknown as FormEvent<HTMLFormElement>;
            preventLoginFormSubmit(e);
          }}
        />
        <a
          href="#"
          className="login__forgotpassword">
          Forgot password?
        </a>
        <div className="login__hr" />
        <a
          href="#"
          className="login__createaccount">
          Create new account
        </a>
      </form>

      <p className="login__createpage">
        <a
          href="#"
          className="login__link">
          Create a Page
        </a>{" "}
        for a celebrity, brand or business.
      </p>
    </Styles>
  );
}

export default Login;
