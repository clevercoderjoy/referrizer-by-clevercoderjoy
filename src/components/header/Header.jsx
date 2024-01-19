import logo from "../../../public/assets/logo.svg";
import Button from "../button/Button";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav-links">
          <ul>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </nav>
        <div className="auth">
          <Button btnTxt={"Log in"} btnType={"secondary"} />
          <Button btnTxt={"Get Started for Free"} btnType={"primary"} />
        </div>
      </header>
    </>
  );
}

export default Header;
