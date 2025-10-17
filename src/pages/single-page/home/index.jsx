import TopBanner from '@/components/layouts/TopBanner';
import Header from './components/Header';
// import Hero from './components/Hero';
import CleanHero from './components/CleanHero';
import SuperSimpleTest from './components/SuperSimpleTest';
// import SimpleHeroTest from './components/SimpleHeroTest';
import About from './components/About';
import EventArea from './components/EventArea';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Blog from './components/Blog';
import CtaArea from '@/components/layouts/CtaArea';
import Footer from '@/components/layouts/Footer';
import BackToTop from "@/components/BackToTop.jsx";
const HomeSinglePage = () => {
  return <>
            <SuperSimpleTest />
            <TopBanner />
            <Header />
            <CleanHero />
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
export default HomeSinglePage;