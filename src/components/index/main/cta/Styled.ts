import styled, { StyledComponent } from "styled-components";

const Styled: StyledComponent<"div", any, {}, never> = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  margin-top: 5rem;
  gap: 1;

  .cta__title {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 9rem;

    .cta__logo {
      position: relative;
      left: -2.8rem;
      width: 100%;
      max-width: 30rem;
    }
  }

  .cta__label {
    font-size: 2.8rem;
    font-weight: 400;
    color: #1c1e21;
  }

  @media screen and (max-width: 900px) {
    margin: 0;
    max-width: 40rem;

    .cta__title {
      justify-content: center;
      height: 10rem;

      .cta__logo {
        left: 0;
      }
    }
    .cta__label {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }
`;

export default Styled;
