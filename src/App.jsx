import React from "react";
import Hero from "./components/Hero";
import Masakan from "./components/Masakan";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Product from "./components/Product";
import Testimonial from "./components/Testimonial"

=======
import Testimonial from "./components/Testimonial"
import Product from './components/Product';
>>>>>>> f73c80a6dc70369b667aca6ee6538a44c968a5c7
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Hero />
        <Masakan />
        <Product />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> f73c80a6dc70369b667aca6ee6538a44c968a5c7
