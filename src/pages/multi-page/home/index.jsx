import About from './components/About';
import Blog from './components/Blog';
import EventArea from './components/EventArea';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import TopBanner from "@/components/layouts/TopBanner.jsx";
import TopBar from "@/components/layouts/TopBar";
import CtaArea from "@/components/layouts/CtaArea.jsx";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";
import './components/HeroFix.css';
import { useState } from 'react';

const HomePage = () => {
  const [isHeroLoading, setHeroLoading] = useState(true);
  return <>
    <TopBanner />
    <TopBar isHeroLoading={isHeroLoading} />
    <Hero setHeroLoading={setHeroLoading} />
    <About />
    <EventArea />
    <Testimonial />
    <Gallery />
    <Team />
    <Blog />
    <CtaArea />
    <Footer />
    <BackToTop />
  </>;
};
export default HomePage;