import { SubHeading } from "../../components";
import { HEADER_TEXTS, images } from "../../constants";
import "./Header.css";
import { MenuCard } from "../MenuCard/MenuCard";

export const Header = () => {

  return (
  <header className="header wrapper section__padding" id="home">
    <div className="wrapper_info">
    <SubHeading title={HEADER_TEXTS.SUBHEADING} />
        <h1 className="header-h1">{HEADER_TEXTS.HEADING}</h1>
        <p className="p__opensans">
          {HEADER_TEXTS.DESCRIPTION}
        </p>
      {/* Speisekarte */}  
      <MenuCard />      
    </div>

    <div className="wrapper_img">
      <img src={images.welcome} alt={HEADER_TEXTS.IMAGE_ALT} loading="eager" />
    </div>
  </header>
)};


