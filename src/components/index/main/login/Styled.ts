import styled, { StyledComponent } from "styled-components";

const Styled: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  gap: 2.8rem;
  width: 100%;
  max-width: 39.5rem;

  .login__form {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background: #fff;
    border-radius: 0.8rem;
    padding: 1.6rem 1.6rem 2.4rem 1.6rem;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    width: 100%;
    max-width: 43rem;

    .login__email {
      font-size: 1.7rem;
      height: 5.2rem;
      width: 100%;
      padding: 1.6rem 1.6rem;
      background: white;
      line-height: 2.2;
      color: #1d2129;
      border: 0.1rem solid #dddfe2;
      border-radius: 0.6rem;
      margin-bottom: 1.2rem;
    }

    .login__email::placeholder {
      color: #8a8d91;
    }

    .login__password {
      font-size: 1.7rem;
      height: 5.2rem;
      width: 100%;
      padding: 1.6rem 1.6rem;
      line-height: 2.2;
      color: #1d2129;
      border: 0.1rem solid #dddfe2;
      border-radius: 0.6rem;
      margin-bottom: 1.7rem;
    }

    .login__password::placeholder {
      color: #8a8d91;
    }

    .login__submit {
      width: 100%;
      height: 4.8rem;
      border-radius: 0.6rem;
      border: none;
      background: #1877f2;
      color: white;
      font-size: 2rem;
      font-weight: 700;
    }

    .login__submit:hover {
      background: #166fe5;
    }

    .login__submit:active {
      background: #29487d;
    }

    .login__forgotpassword {
      color: #1877f2;
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 500;
      margin: 2rem 0;
    }

    .login__forgotpassword:hover {
      text-decoration: underline;
    }

    .login__hr {
      width: 100%;
      height: 0.1rem;
      background: rgb(28, 30, 33, 0.2);
      margin-bottom: 2.6rem;
    }

    .login__createaccount {
      background: #42b72a;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      padding: 1.5rem;
      text-decoration: none;
      font-weight: 700;
      border-radius: 0.6rem;
      font-size: 1.7rem;
    }

    .login__createaccount:hover {
      background: #36a420;
    }

    .login__createaccount:active {
      background: #2b9217;
    }
  }

  .login__createpage {
    font-size: 1.4rem;
    color: #1c1e21;

    .login__link {
      font-weight: 600;
      text-decoration: none;
      color: #1c1e21;
    }

    .login__link:hover {
      text-decoration: underline;
    }
  }
`;

export default Styled;
