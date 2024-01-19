import Button from "../button/Button";
import "./join.css";

const Join = () => {
  return (
    <>
      <section className="join-container">
        <div className="join-content">
          <h2>Ready To Join Referrizer?</h2>
          <p>Our clients see an average 20% growth in their business within the first month of using Referrizer. Why get left behind?</p>
        </div>
        <div className="join-buttons">
          <Button className="btn-signup" btnTxt={"Signup For Free"} btnType={"primary"} />
          <Button className="btn-demo" btnTxt={"Book a Demo"} btnType={"secondary"} />
        </div>
      </section>
    </>
  );
}

export default Join;
