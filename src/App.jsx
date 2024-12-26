<<<<<<< HEAD


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero';
import Masakan from './components/Masakan';
import Footer from './components/Footer';
import Product from './components/Product';
import Testimonial from './components/Testimonial';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import { AuthProvider } from './contexts/AuthContext';

import AOS from 'aos';
import 'aos/dist/aos.css';
=======
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
>>>>>>> origin/master

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen justify-between">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

<<<<<<< HEAD
const Home = () => (
  <div>
    <Hero />
    <Masakan />
    <Product />
    <Testimonial />
  </div>
);

=======
<<<<<<< HEAD
>>>>>>> origin/master
export default App;
=======
export default App;
>>>>>>> f73c80a6dc70369b667aca6ee6538a44c968a5c7
