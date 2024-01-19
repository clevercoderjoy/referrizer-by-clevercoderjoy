import mission from "../../../public/assets/mission.svg";
import "./mission.css";

const Mission = () => {
  return (
    <>
      <section className="mission-container">
        <div className="mission-content">
          <div className="title">Mission</div>
          <h2>Our Mission</h2>
          <div className="mission-text">
            <div className="textOne">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada. Mauris dignissim et tellus enim diam sed.
            </div>
            <div className="textTwo">
              Pellentesque id tellus, molestie non, imperdiet sed vitae nullam odio. Morbi tellus, odio in duis quis lorem. Malesuada nisl sapien gravida elementum ac, et placerat eu.
            </div>
          </div>
        </div>
        <div className="mission-img-container">
          <img className="mission-img" src={mission} alt="team of people" />
        </div>
      </section>
    </>
  );
}

export default Mission;
