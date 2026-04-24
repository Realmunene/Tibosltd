import React from 'react';
import Testimonials from './Testimonials';
import Services from "./Services";
import CurrentProjects from "./CurrentProjects";
import Designs from "./Designs";
import Contact from "./Contact";
import WhatsAppChat from './WhatsAppChat';
import HeroBanner from './HeroBanner';
import ProjectShowcase from './ProjectShowcase';
const Home = ({user, onRequireLogin}) => {
  return (
    <div>
    <HeroBanner />
    <ProjectShowcase />
    <Testimonials />
    <Services />
    <CurrentProjects />
    <Designs />
    <Contact />
    <WhatsAppChat />
    </div>
  )
}

export default Home
