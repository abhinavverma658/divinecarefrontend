import '../../assets/scss/layout/pages/_service-single.scss';

import Hero from './components/Hero';
import ServiceDetail from './components/ServiceDetail';
import WhyDivine from './components/WhyDivine';
import Stories from './components/Stories';

const ServiceSingle = () => {
  return (
    <>
      <Hero />
      <WhyDivine />
      <Stories />
    </>
  );
};

export default ServiceSingle;