import PropTypes from "prop-types";

import { SPECIAL_MENU_TEXTS } from "../../constants";
import "./MenuItem.css";

export const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="menuitem-head">
      <div className="menuitem-name">
        <h3>
          {title}
        </h3>
      </div>
      <div className="menuitem-dash" />
      <div className="menuitem-price">
        <h3 className="p__cormorant">{price}</h3>
      </div>
    </div>

    <div className="menuitem-sub">
      <p className="p__opensans" style={{ color: `${SPECIAL_MENU_TEXTS.MENUITEM.SUB_COLOR}` }}>
        {tags}
      </p>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
