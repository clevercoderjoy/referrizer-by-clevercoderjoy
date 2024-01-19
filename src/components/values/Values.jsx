import valueOne from "../../../public/assets/valueOne.svg";
import valueThree from "../../../public/assets/valueThree.svg";
import valueTwo from "../../../public/assets/valueTwo.svg";
import "./values.css";


const Values = () => {
  return (
    <>
      <section className="values-container">
        <div className="value-title-container">
          <div className="title">Values</div>
          <h2>Our Values</h2>
        </div>
        <div className="values">
          <div className="value-one">
            <div className="icon-container">
              <img className="value-icon" src={valueOne} alt="shield-icon" />
            </div>
            <h3>People First</h3>
            <p>Create high-converting landing pages in minutes, even if you are not a marketing.</p>
          </div>
          <div className="value-two">
            <div className="icon-container">
              <img className="value-icon" src={valueTwo} alt="target-icon" />
            </div>
            <h3>People First</h3>
            <p>Create high-converting landing pages in minutes, even if you are not a marketing.</p>
          </div>
          <div className="value-three">
            <div className="icon-container">
              <img className="value-icon" src={valueThree} alt="eye-icon" />
            </div>
            <h3>People First</h3>
            <p>Create high-converting landing pages in minutes, even if you are not a marketing.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Values;
