import shape5 from '@/assets/img/shape/vl-shape-5.2.png';
import arrow5 from '@/assets/img/shape/vl-hero-shape-arrow-5.svg';
import arrow1 from '@/assets/img/shape/vl-home-arrow-5.1.svg';
import arrow3 from '@/assets/img/shape/vl-home-shape-5.3.svg';
import arrow4 from '@/assets/img/shape/vl-home-shape-5.4.svg';
import thumb5 from '@/assets/img/banner/vl-hero-thumb5.1.png';
import charity5 from '@/assets/img/icons/vl-charity5.1.svg';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
const Hero = () => {
  return <section className="vl-banner5">
            <div className="shape shape-1"><img className="aniamtion-key-2" src={shape5} alt='shape5' /></div>
            <div className="shape shape-2"><img className="aniamtion-key-1" src={arrow1} alt='arrow1' /></div>
            <div className="shape shape-3"><img className="aniamtion-key-1" src={arrow3} alt='arrow3' /></div>
            <div className="shape shape-4"><img className="aniamtion-key-1" src={arrow4} alt='arrow4' /></div>
            <div className="shape shape-5"><img src={arrow5} alt='arrow5' /></div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="section-title">
                            <h4 className="subtitle" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}><span><img src={charity5} alt='charity5' /></span> Defending Human
                                Rights Everywhere</h4>
                            <h1 className="title text-anime-style-3">Human Rights for <br /> All Building A The Fairer
                                World</h1>
                            <p className="para pb-32" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>Our commitment to human rights advocacy is rooted in <br /> the
                                belief every individual deserves to live with dignity.</p>
                            <div className="btn5" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                                <Link to="/pages/contact" className="btn-priamry1">Support Human
                                    Rights <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-banner-thumb reveal">
                            <img src={thumb5} alt='thumb5' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Hero;