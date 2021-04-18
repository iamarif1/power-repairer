import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer';
import DoneProjects from '../DoneProjects/DoneProjects';

const Home = () => {
    return (
      <div>
        <Header />
        <Services />
        <About />
        <Testimonials />
        <DoneProjects />
        <Contact />
        <Footer />
      </div>
    );
};

export default Home;