import FacebookLogo from "../../../../assets/img/index/FacebookLogo.svg";
import Styles from "../styles/Styles";

function CTA(): JSX.Element {
  return (
    <Styles>
      <div className="cta__title">
        <img
          src={FacebookLogo}
          alt="FacebookL Logo"
          className="cta__logo"
        />
      </div>
      <h2 className="cta__label">
        Connect with friends and the world around you on Facebook.
      </h2>
    </Styles>
  );
}

export default CTA;
