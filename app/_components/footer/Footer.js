import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer u-margin-top-lg">
      <div className="container">
        <div className="footer__list grid grid--3--cols gap-md">
          <div className="footer__list-col">
            <h2 className="heading-2 gold u-margin-bottom-md">Belle Étoile</h2>
            <div className="footer__icon-container u-margin-bottom-md">
              <IoLogoInstagram className="footer__icon" />
              <IoLogoFacebook className="footer__icon" />
              <IoLogoTwitter className="footer__icon" />
            </div>
            <p className="copyright">
              Copyright &copy; by Belle Elliot at {new Date().getFullYear()}.
              All rights Reserved.
            </p>
          </div>
          <div className="footer__list-col">
            <p className="footer__list-heading">Contact Us</p>
            <ul className="footer__list-main">
              <li>Via della Stella, 24 </li>
              <li>Piazza del Colosseo, 00100</li>
              <li>Rome, Italy </li>
              <li>Tel: +39 06 1234 5678</li>
              <li>Email: info@belleetoile.com</li>
            </ul>
          </div>
          <div className="footer__list-col">
            <p className="footer__list-heading">Company</p>
            <ul className="footer__list-main">
              <li>About</li>
              <li>For business</li>
              <li>Cooking partners </li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
