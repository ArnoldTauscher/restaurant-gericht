import { images, ABOUT_US_TEXTS } from "../../constants";
import "./AboutUs.css";

export const AboutUs = () => (
  <div className="aboutus bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt={ABOUT_US_TEXTS.ALT_TEXTS.G_OVERLAY} />
    </div>

    {/* Über uns */}
    <div className="aboutus-content flex__center">
      <div className="aboutus-content_about">
        <h1 className="headtext__cormorant">{ABOUT_US_TEXTS.TITLE}</h1>
        <img src={images.spoon} alt={ABOUT_US_TEXTS.ALT_TEXTS.SPOON} className="spoon__img" />
        <p className="p__opensans">{ABOUT_US_TEXTS.CONTENT}</p>
      </div>

      <div className="aboutus-content_knife flex__center">
        <img src={images.knife} alt={ABOUT_US_TEXTS.ALT_TEXTS.KNIFE} />
      </div>

      {/* Unsere Geschichte */}
      <div className="aboutus-content_history">
        <h1 className="headtext__cormorant">{ABOUT_US_TEXTS.HISTORY_TITLE}</h1>
        <img src={images.spoon} alt={ABOUT_US_TEXTS.ALT_TEXTS.SPOON} className="spoon__img" />
        <p className="p__opensans">{ABOUT_US_TEXTS.HISTORY_CONTENT}</p>
      </div>
    </div>
  </div>
);
