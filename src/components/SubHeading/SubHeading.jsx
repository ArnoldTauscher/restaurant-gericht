import PropTypes from "prop-types";

import { images, SUBHEADING_TEXTS } from "../../constants";

export const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt={SUBHEADING_TEXTS.ALT_TEXTS_SPOON} className="spoon__img" />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};
