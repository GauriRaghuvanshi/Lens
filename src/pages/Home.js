import React from 'react';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import AboutUs from '../components/about/AboutUs';
import MeetTruAI from '../components/meet-ai/Meet-AI';
import WhyChooseLens from '../components/whychooselens/WhyChooseLens';
import LandingPage from './LandingPage';
import Vision from '../components/vision/Vision';
import Blogs from '../components/blogs/Blogs';
import Clients from '../components/clients/Clients';
import ByTheNumbers from '../components/numbers/Numbers';
import FAQ from '../components/faq/FAQ';
import Contact from '../components/contact/ContactUs';
import Footer from '../components/footer/Footer';


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Services />
      <MeetTruAI/>
      <WhyChooseLens/>
      <LandingPage/>
      <Vision/>
      <Blogs/>
      <Clients/>
      <ByTheNumbers/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
