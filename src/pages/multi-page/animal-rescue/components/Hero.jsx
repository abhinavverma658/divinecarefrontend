import home21 from '@/assets/img/shape/vl-home2-1.1.png';
import homeBg from '@/assets/img/banner/vl-home-bg-2.1.png';
import hand2 from '@/assets/img/icons/vl-hand-2.svg';
import shape2 from '@/assets/img/shape/vl-banner-shape2.1.png';
import shape1 from '@/assets/img/shape/vl-dog-shape-1.1.png';
import home22 from '@/assets/img/shape/vl-home2-1.2.png';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const Hero = () => {
  return <section className="vl-banner2 p-relative" style={{
    backgroundImage: `url(${homeBg})`
  }}>
            <div className="vl-banner-shape-2 shape-1"><img src={home21} alt='home21' /></div>
            <div className="vl-banner-shape-2 shape-2"><img src={home21} alt='home21' /></div>
            <div className="vl-banner-shape-2 shape-3"><img src={home22} alt='home22' /></div>
            <div className="vl-banner-shape-2 shape-4"><img src={home22} alt='home22' /></div>
            <div className="vl-banner-shape-2 shape-5 d-none d-lg-block"><img src={shape1} alt='shape1' /></div>
            <div className="vl-banner-shape-2 shape-6"><img src={shape2} alt='shape2' /></div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-section-title-2 mb-30">
                            <h4 className="subtitle" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}><span><img src={hand2} alt='hand2' /></span> A Mission for Animal
                                Welfare</h4>
                            <h1 className="title text-anime-style-3">Hope and Healing for Every Animal</h1>
                            <div className="home-btn-2" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                                <Link to="/pages/contact" className="btn-2">Join The Relief Effort <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-banner2-content" data-aos="fade-left" data-aos-duration={900} data-aos-delay={300}>
                            <p>Our Animal Rescue Heroes work tirelessly to give vulnerable animals the second chance
                                they deserve <br /> From rescuing stray &amp; abused animals to providing.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Hero;