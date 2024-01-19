import facebook from "../../../public/assets/facebook.svg";
import instagram from "../../../public/assets/instagram.svg";
import linkedIn from "../../../public/assets/linkedIn.svg";
import logoFooter from "../../../public/assets/logoFooter.svg";
import twitter from "../../../public/assets/twitter.svg";
import youtube from "../../../public/assets/youtube.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer-top">
        <div className="logo">
          <img src={logoFooter} alt="logo" />
        </div>
        <div className="footer-nav-links">
          <div className="company">
            <ul>
              <li className="nav-link-header">Company</li>
              <li>About Us</li>
              <li>We&#39;re Hiring</li>
              <li>Investors</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="solutions">
            <ul>
              <li className="nav-link-header">Solutions</li>
              <li>Customer Lead Generation</li>
              <li>Customer Retention Boost</li>
              <li>Reputation Management</li>
              <li>Marketing Automation</li>
              <li>PartnerUp Network</li>
            </ul>
          </div>
          <div className="resources">
            <ul>
              <li className="nav-link-header">Resources</li>
              <li>Blog</li>
              <li>Videos</li>
              <li>Case Studies</li>
              <li>Marketplace</li>
              <li>Industries</li>
            </ul>
          </div>
          <div className="help">
            <ul>
              <li className="nav-link-header">Help</li>
              <li>Support</li>
              <li>Knowledge Base</li>
              <li>Live Chat</li>
            </ul>
          </div>
          <div className="partners">
            <ul>
              <li className="nav-link-header">Partners</li>
              <li>Development Partners</li>
              <li>Affiliate Program</li>
              <li>Partner Offers</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="socials">
          <ul>
            <li><img className="social-icon" src={linkedIn} alt="referrizer-linkedIn" /></li>
            <li><img className="social-icon" src={twitter} alt="referrizer-twitter" /></li>
            <li><img className="social-icon" src={instagram} alt="referrizer-instagram" /></li>
            <li><img className="social-icon" src={facebook} alt="referrizer-facebook" /></li>
            <li><img className="social-icon" src={youtube} alt="referrizer-youtube" /></li>
          </ul>
        </div>
        <div className="copyright-auth">
          <div className="copyright">© 2013-2021 Referrizer Inc.</div>
          <div className="auth-links">
            <div className="login">
              <a href="/">Login</a>
            </div>
            <div className="SignUp">
              <a href="/">Sign up for free</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
