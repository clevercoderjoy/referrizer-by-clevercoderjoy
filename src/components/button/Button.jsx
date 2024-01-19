import PropTypes from "prop-types";
import "./button.css";

const Button = ({ btnTxt, btnType }) => {

  const btnClass = btnType === "primary" ? "btnPrimary" : "btnSecondary";
  const combinedClass = `btn ${btnClass}`
  return (
    <>
      <button className={combinedClass} type={btnType}>{btnTxt}</button>
    </>
  );
}

Button.propTypes = {
  btnTxt: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
}

export default Button;
