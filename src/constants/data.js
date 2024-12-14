import images from './images';

// Mehrfach verwendet
export const COMMON_TEXTS = {
  ADDRESS: "Dierfeldring 1.2, 54533 Dierfeld",
  PHONE: "+49 1234-567890",
  OPENING_HOURS: "Öffnungszeiten",
  WEEKDAY_HOURS: "Montag-Freitag: 08:00 - 14:00",
  WEEKEND_HOURS: "Samstag-Sonntag: 07:00 - 23:00",
  PAYMENT_TITLE: "Zahlungsarten",
  PAYMENT_INFO: "Wir akzeptieren folgende Zahlungsmöglichkeiten:",
};

const SUBHEADING_TEXTS = {
  ALT_TEXTS_SPOON: "Löffel_Symbol"
};

// ScrollToTopButton
const SCROLL_TO_TOP_BUTTON_TEXT = {
  ARIA_LABEL: "Nach oben scrollen"
}

// Navbar
const NAV_TEXTS = {
  NAV_ITEMS: [
    { id: 'home', text: 'Startseite' },
    { id: 'about', text: 'Über uns' },
    { id: 'menu', text: 'Unsere Empfehlung' },
    { id: 'awards', text: 'Auszeichnungen' },
    { id: 'contact', text: 'Kontakt' }
  ],
  ALT_TEXT: 'app__logo'
};

// BookTable
const BOOKTABLE_TEXTS = {
  BOOK_TABLE: "Tisch reservieren",
  THANK_YOU: "Vielen Dank für Ihre Reservierung.",
  CANCEL: "Abbrechen"
};

// Header
const HEADER_TEXTS = {
  SUBHEADING: "Entdecken Sie neue Geschmackserlebnisse",
  HEADING: "Der Schlüssel zu hochwertiger Gastronomie",
  DESCRIPTION: "Genießen Sie unsere erlesene Auswahl an Speisen in gemütlicher Atmosphäre. Unsere Küche verbindet traditionelle Rezepte mit innovativen Zubereitungsmethoden für ein unvergessliches Geschmackserlebnis.",
  IMAGE_ALT: "Titelbild"
};

// MenuCard
const MENUCARD_TEXTS = {
  TITLE: "Unser Menü",
  MENUCARD_BUTTON_TEXT: "Speisekarte entdecken",
  POPUP_BUTTON_TEXT: "Schließen"
};

// AboutUs
const ABOUT_US_TEXTS = {
  TITLE: "Über uns",
  CONTENT: "Unser Restaurant verbindet Tradition mit Innovation. Wir legen großen Wert auf frische, regionale Zutaten und kreieren daraus Gerichte, die Ihre Sinne verzaubern werden. Erleben Sie Gastfreundschaft und kulinarische Exzellenz in einer einzigartigen Atmosphäre.",
  HISTORY_TITLE: "Unsere Geschichte",
  HISTORY_CONTENT: "Seit unserer Gründung vor über 30 Jahren haben wir uns stetig weiterentwickelt. Was als kleines Familienrestaurant begann, ist heute ein Ort, an dem Kochkunst zelebriert wird. Unsere Leidenschaft für exquisites Essen und erstklassigen Service ist über die Jahre nur gewachsen.",
  ALT_TEXTS: {
    G_OVERLAY: "G_Überlagerung",
    KNIFE: "Messer_Bild",
    SPOON: "Löffel_Symbol"
  }
};

// SpecialMenu
const SPECIAL_MENU_TEXTS = {
  WINES: [
    {
      title: 'Chapel Hill Shiraz',
      price: '56 €',
      tags: 'AU | Flasche',
    },
    {
      title: 'Catena Malbec',
      price: '59 €',
      tags: 'AU | Flasche',
    },
    {
      title: 'La Vieille Rose',
      price: '44 €',
      tags: 'FR | 750 ml',
    },
    {
      title: 'Rhino Pale Ale',
      price: '31 €',
      tags: 'CA | 750 ml',
    },
    {
      title: 'Irish Guinness',
      price: '26 €',
      tags: 'IE | 750 ml',
    },
  ],

  COCKTAILS: [
    {
      title: 'Aperol Spritz',
      price: '20 €',
      tags: 'Aperol | Villa Marchesi Prosecco | Soda | 30 ml',
    },
    {
      title: "Dark 'N' Stormy",
      price: '16 €',
      tags: 'Dunkler Rum | Ginger Beer | Limettenscheibe',
    },
    {
      title: 'Daiquiri',
      price: '10 €',
      tags: 'Rum | Zitronensaft | Zucker',
    },
    {
      title: 'Old Fashioned',
      price: '31 €',
      tags: 'Bourbon | Brauner Zucker | Angostura Bitter',
    },
    {
      title: 'Negroni',
      price: '26 €',
      tags: 'Gin | Süßer Wermut | Campari | Orangengarnitur',
    },
  ],

  TEXTS: {
    SUBTITLE: "Ein Menü, das Ihrem Geschmack entspricht",
    TITLE: "Unsere Empfehlung",
    WINE_BEER: "Wein & Bier",
    COCKTAILS: "Cocktails",
    SHOW_MORE: "Mehr anzeigen",
    MENU_IMAGE_ALT: "Menübild",
  },

  MENUITEM: {
    SUB_COLOR: "#AAAAAA",
  },  
};

// Chef
const CHEF_TEXTS = {
  SUBTITLE: "Worte des Küchenchefs",
  TITLE: "Woran wir glauben",
  QUOTE: "Unsere Küche ist mehr als nur Essen. Sie ist eine Leidenschaft, eine Kunst und ein Erlebnis.",
  DESCRIPTION: "Wir glauben an die Kraft frischer, lokaler Zutaten und an die Magie, die entsteht, wenn Tradition auf Innovation trifft. Jedes Gericht erzählt eine Geschichte und lädt Sie ein, Teil dieser kulinarischen Reise zu werden. Unser Ziel ist es, nicht nur Ihren Gaumen zu verwöhnen, sondern auch bleibende Erinnerungen zu schaffen.",
  CHEF_NAME: "Kevin Meow",
  CHEF_TITLE: "Küchenchef & Gründer",
  ALT_TEXTS: {
    CHEF_IMAGE: "Chefkoch-Bild",
    QUOTE_ICON: "Zitat-Symbol"
  }
};

// Intro
const INTRO_TEXTS = {
  VIDEO_ARIA_LABEL: "Video über unser Essen",
  PLAY_BUTTON_LABEL: "Video abspielen",
  PAUSE_BUTTON_LABEL: "Video pausieren",
  PLAYING_STATUS: "Video wird abgespielt",
  PAUSED_STATUS: "Video ist pausiert"
};

// Laurels
const LAURELS_TEXTS = {
  SUBTITLE: "Auszeichnungen & Anerkennungen",
  TITLE: "Unsere Lorbeeren",
  ALT_TEXTS: {
    AWARD_IMAGE: "Auszeichnung:",
    LAURELS_IMAGE: "Lorbeeren und Auszeichnungen"
  },

  AWARDS: [
    {
      imgUrl: images.award02,
      title: 'Bib Gourmand',
      subtitle: 'Ausgezeichnete Küche zu moderaten Preisen.',
    },
    {
      imgUrl: images.award01,
      title: 'Aufsteigender Stern',
      subtitle: 'Innovative Küche mit großem Potenzial.',
    },
    {
      imgUrl: images.award05,
      title: 'Gastfreundschaft-Preis',
      subtitle: 'Herausragender Service und Atmosphäre.',
    },
    {
      imgUrl: images.award03,
      title: 'Herausragender Küchenchef',
      subtitle: 'Anerkennung für kulinarische Exzellenz.',
    },
  ]
};

// Gallery
const GALLERY_TEXTS = {
  SUBTITLE: "Bilder",
  TITLE: "Fotogalerie",
  DESCRIPTION: "Entdecken Sie die Vielfalt unserer Küche und die Atmosphäre unseres Restaurants in unserer Bildergalerie. Lassen Sie sich von den visuellen Eindrücken inspirieren und tauchen Sie ein in die Welt unserer kulinarischen Kreationen.",
  ALT_TEXT: (index) => `Galeriebild ${index + 1}`,
  AMOUNT_OF_SCROLL: 316
};

//FindUs
const FIND_US_TEXTS = {
  SUBTITLE: "Kontakt",
  TITLE: "Ihr Weg zu uns",
  ADDRESS: "Dierfeldring 1.2, 54533 Dierfeld",
  OPENING_HOURS: "Öffnungszeiten",
  WEEKDAY_HOURS: "Montag-Freitag: 08:00 - 14:00",
  WEEKEND_HOURS: "Samstag-Sonntag: 07:00 - 23:00",
  BUTTON_TEXT: "Besuchen Sie uns",
  ALT_TEXT_IMAGE: "finden_sie_uns_bild"
};

// Map
const MAP_TEXTS = {
  // Kartenposition (Breitengrad, Längengrad)
  MAP_CENTER: [50.0846, 6.891],
  MAP_ZOOM: 17,
  MAP_HEIGHT: "600px",
  MAP_WIDTH: "100%",
  MARKER_SIZE: [40, 40],
  POPUP_DELAY: 100,
  TILE_LAYER_URL: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  TILE_LAYER_ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  RESTAURANT_NAME: "GERICHT",
  RESTAURANT_ADDRESS: "Dierfeldring 1.2,",
  RESTAURANT_CITY: "54533 Dierfeld",
  RESTAURANT_PHONE: "+49 1234-567890",
  CLOSE_BUTTON_TEXT: "X"
  };

// Footer
const FOOTER_TEXTS = {
  CONTACT_TITLE: "Kontaktdaten",
  ADDRESS: "Dierfeldring 1.2, 54533 Dierfeld",
  PHONE: "+49 1234-567890",
  QUOTE: "Die beste Art, sich selbst zu finden, ist, sich im Dienst an anderen zu verlieren.",
  QUOTE_AUTHOR: "Mahatma Gandhi",
  OPENING_HOURS_TITLE: "Öffnungszeiten",
  WEEKDAY_HOURS: "Montag-Freitag:",
  WEEKDAY_TIMES: "08:00 - 14:00",
  WEEKEND_HOURS: "Samstag-Sonntag:",
  WEEKEND_TIMES: "07:00 - 23:00",
  PAYMENT_TITLE: "Zahlungsarten",
  PAYMENT_INFO: "Wir akzeptieren folgende Zahlungsmöglichkeiten:",
  COPYRIGHT: "@2024 SOMETHING. All Rights reserved."
};

// Newsletter
const NEWSLETTER_TEXTS = {
  NEWSLETTER_SUBTITLE: "Newsletter",
  NEWSLETTER_HEADING: "Abonnieren Sie unseren Newsletter",
  NEWSLETTER_SUBTEXT: "Verpassen Sie keine Neuigkeiten!",
};

export {
  SUBHEADING_TEXTS,
  SCROLL_TO_TOP_BUTTON_TEXT,
  NAV_TEXTS,
  BOOKTABLE_TEXTS,
  HEADER_TEXTS,
  MENUCARD_TEXTS,
  ABOUT_US_TEXTS,
  SPECIAL_MENU_TEXTS,
  CHEF_TEXTS,
  INTRO_TEXTS,
  LAURELS_TEXTS,
  GALLERY_TEXTS,
  FIND_US_TEXTS,
  MAP_TEXTS,
  FOOTER_TEXTS,
  NEWSLETTER_TEXTS
};