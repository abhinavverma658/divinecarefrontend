import PageMeta from "@/components/PageMeta.jsx";
import About from './components/About';
import BrandArea from './components/BrandArea';
import Causes from './components/Causes';
import Contact from './components/Contact';
import CtaArea from './components/CtaArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import News from './components/News';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import BackToTop from "@/components/BackToTop.jsx";
import favLogo2 from '@/assets/img/logo/fav-logo2.png';
const AnimalRescuePage = () => {
  return <>
            <PageMeta title="Helpy 2" icon={favLogo2} />
            <Header />
            <Hero />
            <Mission />
            <Services />
            <About />
            <Causes />
            <Testimonial />
            <Contact />
            <CtaArea />
            <News />
            <BrandArea />
            <Footer />
            <BackToTop />
        </>;
};
export default AnimalRescuePage;