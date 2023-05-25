import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Galleries from "./components/Galleries";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Testimonials />
      <Galleries />
      <Contact />
    </>
  );
}

export default App;
