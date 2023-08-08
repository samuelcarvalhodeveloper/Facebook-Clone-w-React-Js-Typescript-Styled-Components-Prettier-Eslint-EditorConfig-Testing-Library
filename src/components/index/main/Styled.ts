import styled, { StyledComponent } from "styled-components";

const Styled: StyledComponent<"main", any, {}, never> = styled.main`
  .main__container {
    display: flex;
    justify-content: center;
    padding: 13rem 5rem 19rem 3rem;
    gap: 7.5rem;
    background: #f0f2f5;
  }

  @media screen and (max-width: 900px) {
    .main__container {
      padding: 3rem 3rem 15rem 3rem;
      flex-flow: column nowrap;
      gap: 4rem;
      align-items: center;
      text-align: center;
      margin-top: 0;
    }
  }
`;

export default Styled;
