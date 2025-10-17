import PageMeta from "@/components/PageMeta.jsx";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Cause from './components/Cause';
import CtaArea from './components/CtaArea';
import Event from './components/Event';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Volunteer from './components/Volunteer';
import BackToTop from "@/components/BackToTop.jsx";
import favLogo4 from '@/assets/img/logo/fav-logo4.png';
const SeniorCitizenPage = () => {
  return <>
            <PageMeta title="Helpy 4" icon={favLogo4} />
            <Header />
            <Hero />
            <About />
            <Cause />
            <Event />
            <Testimonial />
            <Volunteer />
            <CtaArea />
            <Blog />
            <Footer />
            <BackToTop />
        </>;
};
export default SeniorCitizenPage;