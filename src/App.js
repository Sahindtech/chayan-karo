import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Service from "./Components/Service";
import Plan from "./Components/Plan";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import GoToTopButton from "./Components/GoToTopButton";
import Mission from "./Components/Mission";

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <About />
        <Mission />
        <Service />
        <Work />
        <Plan />
        <Testimonial />
        <Contact />
        <FAQ />
      </div>
      <Footer />
      <GoToTopButton />
    </>
  );
}

export default App;