import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Galleries from "./components/Galleries";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Header from "./components/header/Header";
import "./index.css";
function App() {
  return (
    <>
      <div>
        <Header />
        <AboutUs />
        <Services />
        <Testimonials />
        <Galleries />
        <Contact />
      </div>
    </>
  );
}

export default App;
