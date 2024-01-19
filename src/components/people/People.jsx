import peopleFrame from "../../../public/assets/peopleFrame.svg";
import peoplePattern from "../../../public/assets/peoplePattern.svg";
import "./people.css";

const People = () => {
  return (
    <>
      <section className="people-container">
        <div className="people-content">
          <div className="title">People First</div>
          <h2>Community That Has Impact</h2>
          <div className="people-text">
            <p className="people-text-first">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ipsum ut morbi feugiat ut egestas vulputate phasellus malesuada. Mauris dignissim et tellus enim diam sed.
            </p>
            <p className="people-text-second">
              Pellentesque id tellus, molestie non, imperdiet sed vitae nullam odio. Morbi tellus, odio in duis quis lorem. Malesuada nisl sapien gravida elementum ac, et placerat eu.
            </p>
          </div>
        </div>
        <div className="people-frame-container">
          <img className="people-frame-img" src={peopleFrame} alt="people-frame" />
          <img src={peoplePattern} alt="people-pattern" className="people-frame-pattern" />
        </div>
      </section>
    </>
  );
}

export default People;
