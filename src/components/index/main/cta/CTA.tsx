import Styled from "./Styled";
import FacebookLogo from "../../../../assets/img/index/FacebookLogo.svg";

function CTA(): JSX.Element {
  return (
    <Styled>
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
    </Styled>
  );
}

export default CTA;
