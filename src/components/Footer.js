import logo from "../media/logo.svg";
import {
  LuPhone,
  LuMapPin,
  LuMail,
  LuInstagram,
  LuTwitter,
  LuFacebook,
  LuYoutube
} from "react-icons/lu";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-top">
          <article className="company-info">
            <div className="footer-logo">
              <img src={logo} alt="Essentials Hub Logo" />
              <h2 className="logo-text">Essentials Hub</h2>
            </div>
            <p className="company-about">
              Curated essentials for the modern wardrobe and home. Designed to
              last, priced to love.
            </p>
            <ul className="location-info">
              <li>
                <LuMapPin />
                <span>21 Atelier Lane, MB</span>
              </li>
              <li>
                <LuMail />
                <span>hello@essentialshub.co</span>
              </li>
              <li>
                <LuPhone />
                <span>+1 (431) 388-0025</span>
              </li>
            </ul>
            <ul className="socials-list">
              <li>
                <LuInstagram />
              </li>
              <li>
                <LuFacebook />
              </li>
              <li>
                <LuTwitter />
              </li>
              <li>
                <LuYoutube />
              </li>
            </ul>
          </article>
          <div className="footer-list">
            <h4>Shop</h4>
            <ul>
              <li>Women's Clothing</li>
              <li>Men's Clothing</li>
              <li>Jewelry</li>
              <li>Electronics</li>
            </ul>
          </div>
          <div className="footer-list">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="footer-list">
            <h4>Help</h4>
            <ul>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2026 Essentials Hub. All rights reserved.
          </p>
          <ul className="policies">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
