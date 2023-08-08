import CTA from "./cta/CTA";
import Login from "./login/Login";
import Styled from "./Styled";

function Main(): JSX.Element {
  return (
    <Styled>
      <div className="main__container">
        <CTA />
        <Login />
      </div>
    </Styled>
  );
}

export default Main;
