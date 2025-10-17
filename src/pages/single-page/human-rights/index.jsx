import PageMeta from "@/components/PageMeta.jsx";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Counter from './components/Counter';
import ChooseUs from './components/ChooseUs';
import Brand from './components/Brand';
import Faq from './components/Faq';
import Work from './components/Work';
import Blog from './components/Blog';
import CtaArea from '@/components/layouts/CtaArea';
import Footer from '@/components/layouts/Footer';
import BackToTop from "@/components/BackToTop.jsx";
import favLogo5 from '@/assets/img/logo/fav-logo5.png';
const HumanRightsPage = () => {
  return <>
            <PageMeta title="Helpy 5" icon={favLogo5} />
            <Header />
            <Hero />
            <About />
            <Counter />
            <ChooseUs />
            <Brand />
            <Faq />
            <Work />
            <Blog />
            <CtaArea />
            <Footer />
            <BackToTop />
        </>;
};
export default HumanRightsPage;