import PropTypes from "prop-types";

import { SubHeading } from "../../components";
import { images, LAURELS_TEXTS } from "../../constants";
import "./Laurels.css";

// Komponente für einzelne Auszeichnungskarten
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="laurels_awards-card">
    <img src={imgUrl} alt={`${LAURELS_TEXTS.ALT_TEXTS.AWARD_IMAGE} ${title}`} />
    <div className="laurels_awards-card_content">
      <h2>
        {title}
      </h2>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

// Hauptkomponente für den Auszeichnungsbereich
export const Laurels = () => (
  <div className="bg wrapper section__padding" id="awards">
    <div className="wrapper_info">
      <SubHeading title={LAURELS_TEXTS.SUBTITLE} />
      <h1 className="headtext__cormorant">{LAURELS_TEXTS.TITLE}</h1>

      {/* Rendert alle Auszeichnungen */}
      <div className="laurels_awards">
        {LAURELS_TEXTS.AWARDS.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="wrapper_img">
      <img src={images.laurels} alt={LAURELS_TEXTS.ALT_TEXTS.LAURELS_IMAGE} />
    </div>
  </div>
);

AwardCard.propTypes = {
  award: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

