import PageMeta from "@/components/PageMeta.jsx";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CtaArea from './components/CtaArea';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import BackToTop from "@/components/BackToTop.jsx";
import favLogo3 from '@/assets/img/logo/fav-logo3.png';
const WaterAidPage = () => {
  return <>
            <PageMeta title="Helpy 3" icon={favLogo3} />
            <Header />
            <Hero />
            <About />
            <Service />
            <Gallery />
            <Testimonial />
            <Faq />
            <Contact />
            <Blog />
            <CtaArea />
            <Footer />
            <BackToTop />
        </>;
};
export default WaterAidPage;