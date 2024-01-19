import Button from "../button/Button";
import "./learn.css";

const Learn = () => {
  return (
    <>
      <section className="learn-container">
        <div className="learn-content-container">
          <div className="learn-content">
            <h2>Want To Learn More About Referrizer?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique at aliquam a viverra facilisi diam.</p>
          </div>
          <div className="learn-newsletter">
            <input type="email" placeholder="Enter your email" />
            <Button btnTxt={"Subscribe"} btnType={"primary"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Learn;
