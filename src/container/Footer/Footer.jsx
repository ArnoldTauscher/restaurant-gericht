import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { RiBlueskyLine } from "react-icons/ri";

import { FooterOverlay, Newsletter } from '../../components';
import { images, FOOTER_TEXTS } from '../../constants';
import './Footer.css';

export const Footer = () => (
  <div className='footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='footer-links'>
      <div className='footer-links_contact'>
        {/* Kontaktdaten */}
        <h2>{FOOTER_TEXTS.CONTACT_TITLE}</h2>
        <p className='p__opensans'>{FOOTER_TEXTS.ADDRESS}</p>
        <p className='p__opensans'>{FOOTER_TEXTS.PHONE}</p>
      </div>

      <div className='footer-links_logo'>
        <img src={images.gericht} alt='footer_logo' />
        {/* Zitat */}
        <blockquote className='p__opensans' cite={FOOTER_TEXTS.QUOTE_AUTHOR}>
          &quot;{FOOTER_TEXTS.QUOTE}&quot;<br />
          <small>{FOOTER_TEXTS.QUOTE_AUTHOR}</small>
        </blockquote>
        <img src={images.spoon} alt='Löffel' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='footer-links_icons'>
          <FiFacebook />
          <RiBlueskyLine />
          <FiInstagram />
        </div>
      </div>

      <div className='footer-links_work'>
        {/* Öffnungszeiten */}
        <h2>{FOOTER_TEXTS.OPENING_HOURS_TITLE}</h2>
        <p className='p__opensans'>{FOOTER_TEXTS.WEEKDAY_HOURS}</p>
        <p className='p__opensans'>{FOOTER_TEXTS.WEEKDAY_TIMES}</p>
        <p className='p__opensans'>{FOOTER_TEXTS.WEEKEND_HOURS}</p>
        <p className='p__opensans'>{FOOTER_TEXTS.WEEKEND_TIMES}</p>
      </div>
    </div>

    <div className='footer-links_pay'>
      {/* Zahlungsarten */}
      <h2>{FOOTER_TEXTS.PAYMENT_TITLE}</h2>
      <p className='p__opensans'>{FOOTER_TEXTS.PAYMENT_INFO}</p>
      <img src={images.mastercard} alt='mastercard_logo' />
      <img src={images.maestro} alt='maestro_logo' />
      <img src={images.visa} alt='visa_logo' />
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>{FOOTER_TEXTS.COPYRIGHT}</p>
    </div>
  </div>
);