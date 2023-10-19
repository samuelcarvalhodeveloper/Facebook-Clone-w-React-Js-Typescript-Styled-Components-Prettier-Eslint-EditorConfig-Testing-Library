import Styles from "../styles/Styles";

function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <Styles>
      <div className="footer__center">
        <div className="footer__lang">
          <ul className="footer__lang-list">
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                English (US)
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                Português (Brasil)
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                Español
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                Français (France)
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                Italiano
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                Deutsch
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                العربية
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                हिन्दी
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                中文(简体)
              </a>
            </li>
            <li className="footer__lang-list__item">
              <a
                href="#"
                className="footer__select">
                日本語
              </a>
            </li>
            <li className="footer__lang-list__item">
              <button
                type="button"
                className="footer__plus">
                +
              </button>
            </li>
          </ul>
        </div>
        <div className="footer__more">
          <ul className="footer__link">
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Sign Up
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Log In
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Messenger
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Facebook Lite
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Watch
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Places
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Games
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Marketplace
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Meta Pay
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Oculus
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Portal
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Instagram
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Bulletin
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Fundraisers
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Services
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Voting Information Center
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Groups
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                About
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Create Ad
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Create Page
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Developers
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Careers
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Privacy Policy
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Privacy Center
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Cookies
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Ad Choices
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Terms
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Help
              </a>
            </li>
            <li className="footer__link__item">
              <a
                href="#"
                className="footer__redirect">
                Contact Uploading & Non-Users
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright__text">Meta © {currentYear}</p>
        </div>
      </div>
    </Styles>
  );
}

export default Footer;
