import CTA from "../../cta/implementation/CTA";
import Login from "../../login/implementation/Login";
import Styles from "../styles/Styles";

function Main(): JSX.Element {
  return (
    <Styles>
      <div className="main__container">
        <CTA />
        <Login />
      </div>
    </Styles>
  );
}

export default Main;
