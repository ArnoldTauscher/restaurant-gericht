import PropTypes from "prop-types";

import { SPECIAL_MENU_TEXTS } from "../../constants";
import "./MenuItem.css";

export const MenuItem = ({ title, price, tags }) => (
  <div className="menuitem">
    <div className="menuitem-head">
      <div className="menuitem-name">
        <p className="p__cormorant" style={{ color: `${SPECIAL_MENU_TEXTS.MENUITEM.NAME_COLOR}` }}>
          {title}
        </p>
      </div>
      <div className="menuitem-dash" />
      <div className="menuitem-price">
        <p className="p__cormorant">{price}</p>
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
