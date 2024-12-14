import { SubHeading } from "../../components";
import { images, CHEF_TEXTS } from "../../constants";
import "./Chef.css";

export const Chef = () => (
  <div className="chef bg wrapper section__padding">
    <div className="wrapper_img wrapper_img-reverse">
      <img src={images.chef} alt={CHEF_TEXTS.ALT_TEXTS.CHEF_IMAGE} />
    </div>
    <div className="wrapper_info">
      <SubHeading title={CHEF_TEXTS.SUBTITLE} />
      {/* Woran wir glauben */}
      <h1 className="headtext__cormorant">{CHEF_TEXTS.TITLE}</h1>

      <div className="chef-content">
        <div className="chef-content_quote">
          <img src={images.quote} alt={CHEF_TEXTS.ALT_TEXTS.QUOTE_ICON} />
          <p className="p__opensans">{CHEF_TEXTS.QUOTE}</p>
          <img src={images.quote} alt={CHEF_TEXTS.ALT_TEXTS.QUOTE_ICON} />
        </div>
        <p className="p__opensans">{CHEF_TEXTS.DESCRIPTION}</p>
      </div>

      <div className="chef-sign">
        <h2>{CHEF_TEXTS.CHEF_NAME}</h2>
        <p className="p__opensans">{CHEF_TEXTS.CHEF_TITLE}</p>
      </div>
    </div>
  </div>
);

