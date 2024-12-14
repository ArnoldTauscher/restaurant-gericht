import PropTypes from "prop-types";

import { images, SUBHEADING_TEXTS } from "../../constants";
import "./SubHeading.css"

export const SubHeading = ({ title }) => (
  <div className="sub-heading">
    <h2>{title}</h2>
    <img src={images.spoon} alt={SUBHEADING_TEXTS.ALT_TEXTS_SPOON} className="spoon__img" />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
