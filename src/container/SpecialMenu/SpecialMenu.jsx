import React from "react";
import PropTypes from 'prop-types';

import { SubHeading, MenuItem } from "../../components";
import { SPECIAL_MENU_TEXTS, images } from "../../constants";
import "./SpecialMenu.css";

// MenuSection: Eine wiederverwendbare Komponente für einen Abschnitt des Menüs
const MenuSection = ({ title, items }) => (
  <div className="specialMenu-menu_section flex__center">
    <h2 className="specialMenu-menu_heading">{title}</h2>
    <div className="specialMenu_menu_items">
      {/* Rendert jedes Menüelement mit der MenuItem-Komponente */}
      {items.map((item, index) => (
        <MenuItem
          key={`${item.title}-${index}`}
          title={item.title}
          price={item.price}
          tags={item.tags}
        />
      ))}
    </div>
  </div>
);

// PropTypes für die MenuSection-Komponente zur Typüberprüfung
MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })).isRequired,
};

// SpecialMenu: Hauptkomponente für die Darstellung des speziellen Menüs
// React.memo wird verwendet, um unnötige Neurendering zu vermeiden
export const SpecialMenu = React.memo(() => {

  return (
    <section className="specialMenu section__padding" id="menu">
      {/* Titel-Bereich des speziellen Menüs */}
      <div className="specialMenu-title">
        <SubHeading title={SPECIAL_MENU_TEXTS.TEXTS.SUBTITLE} />
        <h1 className="headtext__cormorant">{SPECIAL_MENU_TEXTS.TEXTS.TITLE}</h1>
      </div>

      {/* Hauptbereich des speziellen Menüs */}
      <div className="specialMenu-menu">
        {/* Wein- und Bier-Sektion */}
        <MenuSection title={SPECIAL_MENU_TEXTS.TEXTS.WINE_BEER} items={SPECIAL_MENU_TEXTS.WINES} />

        {/* Bild in der Mitte des Menüs */}
        <div className="specialMenu-menu_img">
          <img src={images.menu} alt={SPECIAL_MENU_TEXTS.TEXTS.MENU_IMAGE_ALT} />
        </div>

        {/* Cocktail-Sektion */}
        <MenuSection title={SPECIAL_MENU_TEXTS.TEXTS.COCKTAILS} items={SPECIAL_MENU_TEXTS.COCKTAILS} />
      </div>
    </section>
  );
});

// Setzt den Anzeigenamen für die React DevTools
SpecialMenu.displayName = 'SpecialMenu';

