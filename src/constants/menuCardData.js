import images from "./images";

export const menuItems = [
  {
    category: "Frühstück",
    items: [
      {
        name: "Avocado Toast",
        price: "12 €",
        imageSrc: `${images.AvocadoToast}`,
        description: "Frisches Brot mit cremiger Avocado, Tomaten und Rucola.",
      },
      {
        name: "Pancakes mit Ahornsirup",
        price: "10 €",
        imageSrc: `${images.PancakesMitAhornsirup}`,
        description:
          "Fluffige Pancakes serviert mit echtem Ahornsirup und Beeren.",
      },
      {
        name: "Omelette mit Gemüse",
        price: "9 €",
        imageSrc: `${images.OmeletteMitGemüse}`,
        description: "Leckeres Omelette gefüllt mit frischem Gemüse und Käse.",
      },
      {
        name: "Frühstücks-Burrito",
        price: "11 €",
        imageSrc: `${images.FrühstücksBurrito}`,
        description: "Weiche Tortilla gefüllt mit Eiern, Bohnen und Salsa.",
      },
      {
        name: "Smoothie Bowl",
        price: "8 €",
        imageSrc: `${images.SmoothieBowl}`,
        description: "Gesunde Smoothie-Bowl mit frischen Früchten und Nüssen.",
      },
    ],
  },
  {
    category: "Hauptgerichte",
    items: [
      {
        name: "Rindersteak",
        price: "28 €",
        imageSrc: `${images.Rindersteak}`,
        description:
          "Saftiges Rindersteak, perfekt gegrillt, serviert mit Gemüse.",
      },
      {
        name: "Pasta Primavera",
        price: "18 €",
        imageSrc: `${images.PastaPrimavera}`,
        description: "Pasta mit frischem Gemüse in einer leichten Sauce.",
      },
      {
        name: "Gegrilltes Lachsfilet",
        price: "24 €",
        imageSrc: `${images.GegrilltesLachsfilet}`,
        description: "Zartes Lachsfilet, serviert mit Zitronenbutter.",
      },
      {
        name: "Vegetarisches Curry",
        price: "16 €",
        imageSrc: `${images.VegetarischesCurry}`,
        description: "Würziges Curry mit saisonalem Gemüse und Reis.",
      },
      {
        name: "Risotto alla Milanese",
        price: "222 €",
        imageSrc: `${images.RisottoMilanese}`,
        description: "Cremiges Risotto, zubereitet mit Safran und Parmesan, in einer romantischen Atmosphäre.",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Schokoladenkuchen",
        price: "6 €",
        imageSrc: `${images.Schokoladenkuchen}`,
        description: "Reicher Schokoladenkuchen, serviert mit Sahne.",
      },
      {
        name: "Tiramisu",
        price: "17 €",
        imageSrc: `${images.Tiramisu}`,
        description:
          "Klassisches italienisches Dessert mit Kaffee und Mascarpone.",
      },
      {
        name: "Eisbecher Deluxe",
        price: "8 €",
        imageSrc: `${images.EisbecherDeluxe}`,
        description: "Verschiedene Eissorten serviert mit Früchten und Sahne.",
      },
      {
        name: "Crème brûlée",
        price: "9 €",
        imageSrc: `${images.CremeBrulee}`,
        description:
          "Klassisches französisches Dessert mit karamellisierter Zuckerschicht.",
      },
      {
        name: "Obstsalat der Saison",
        price: "6 €",
        imageSrc: `${images.ObstsalatDerSaison}`,
        description:
          "Frischer Obstsalat aus saisonalen Früchten, leicht gesüßt.",
      },
    ],
  },
];
