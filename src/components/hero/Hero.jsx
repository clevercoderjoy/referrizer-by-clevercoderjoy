import blueCircle from "../../../public/assets/blueCircle.svg";
import hero from "../../../public/assets/heroImg.svg";
import heroPattern from "../../../public/assets/heroPattern.svg";
import redCircle from "../../../public/assets/redCircle.svg";
import yellowCircle from "../../../public/assets/yellowCircle.svg";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <div className="title">About Us</div>
          <h2>Who we are and what we do</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis eget viverra integer aliquam enim volutpat nisi, in.</p>
        </div>
        <div className="heroImg-container">
          <img className="heroImg" src={hero} alt="hero-image" />
          <img className="blueCircle" src={blueCircle} alt="blue-circle" />
          <img className="yellowCircle" src={yellowCircle} alt="yellow-circle" />
          <img className="redCircle" src={redCircle} alt="red-circle" />
          <img className="heroPattern" src={heroPattern} alt="hero-pattern" />
        </div>
      </section>
    </>
  );
}

export default Hero;
