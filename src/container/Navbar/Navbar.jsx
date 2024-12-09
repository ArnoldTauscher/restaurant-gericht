import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { BookTable } from "../BookTable/BookTable";
import { NAV_TEXTS } from "../../constants";
import images from "../../constants/images";
import "./Navbar.css";

// Navbar-Komponente: Hauptnavigationsleiste der Anwendung
export const Navbar = () => {
  // State für das Toggle-Menü (für mobile Ansicht)
  const [toggleMenu, setToggleMenu] = useState(false);

  const renderNavItems = (mobile = false) => (
    NAV_TEXTS.NAV_ITEMS.map(item => (
      <li key={item.id} className={mobile ? '' : 'p__opensans'}>
        <a 
          href={`#${item.id}`} 
          onClick={mobile ? () => setToggleMenu(false) : undefined}
        >
          {item.text}
        </a>
      </li>
    ))
  );

  return (
    <nav className="navbar">
      {/* Logo-Bereich */}
      <div className="navbar-logo">
        <img src={images.gericht} alt={NAV_TEXTS.ALT_TEXT} />
      </div>

      {/* Hauptnavigationslinks */}
      <ul className="navbar-links">
        {renderNavItems()}
      </ul>

      {/* Tischreservierungs-Komponente */}
      <div>
        <BookTable />
      </div>

      {/* Mobile Menü-Komponente */}
      <div className="navbar-smallscreen">
        {/* Hamburger-Menü-Icon zum Öffnen des mobilen Menüs */}
        <GiHamburgerMenu
          color="var(--color-white)"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {/* Mobiles Menü-Overlay, wird nur angezeigt, wenn toggleMenu true ist */}
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            {/* Schließen-Icon für das mobile Menü */}
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            {/* Mobile Navigationslinks */}
            <ul className="navbar-smallscreen_links">
              {renderNavItems(true)}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

