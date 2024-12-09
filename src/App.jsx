import {
  Navbar,
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./container";
import { ScrollToTopButton } from "./components";
import "./App.css";


const App = () => (
  <div>
    <Navbar />
    <Header />
    <section id="scrollUp">
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </section>
    <ScrollToTopButton />
  </div>
);

export default App;
