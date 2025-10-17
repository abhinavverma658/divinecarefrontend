import aboutImg1 from '@/assets/img/about/vl-about-4.1.png';
import aboutImg2 from '@/assets/img/about/vl-about-4.2.png';
import about1 from '@/assets/img/icons/vl-about-1.1.svg';
import about2 from '@/assets/img/icons/vl-about-1.2.svg';
import shape4Img from '@/assets/img/shape/hand-shape4.1.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const About = () => {
  return <section id="about" className="vl-about4 sp2">
            <Container>
                <Row className=" flex-lg-row flex-column-reverse">
                    <Col lg={6}>
                        <div className="vl-about-thumb mb-30">
                            <Row>
                                <Col lg={6} md={6}>
                                    <div className="thumb-1 mb-30 reveal">
                                        <img className="w-100 img-fluid" src={aboutImg1} alt='aboutImg1' />
                                    </div>
                                </Col>
                                <Col lg={6} md={6}>
                                    <div className="thumb-2">
                                        <div className="shape d-none d-md-block"><img src={shape4Img} alt='shape4Img' />
                                        </div>
                                        <img className="thmb2 reveal w-100" src={aboutImg2} alt='aboutImg2' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content mb-30 ml-50">
                            <div className="vl-section-title4">
                                <h5 className="subtitle" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>About Us</h5>
                                <h2 className="title text-anime-style-3">A Legacy of Care Serving Senior Citizens</h2>
                                <p className="para pb-32" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>Our organization is dedicated empowering senior citizens
                                    honoring <br /> their lifetime of experiences, and enhancing their quality of life.
                                </p>
                            </div>
                            <Row>
                                <Col lg={12} md={6} data-aos="fade-left" data-aos-duration={900} data-aos-delay={300}>
                                    <div className="vl-about-icon-box mb-30">
                                        <div className="vl-about-icon">
                                            <span><img src={about1} alt='about1' /></span>
                                        </div>
                                        <div className="vl-icon-content">
                                            <h3 className="title"><Link to="/pages/service">Helping people rebuild and
                                                prepare</Link></h3>
                                            <p>We help them rebuild stronger more resilient for the future. Together
                                                with supporters like.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={6} data-aos="fade-left" data-aos-duration={1000} data-aos-delay={300}>
                                    <div className="vl-about-icon-box mb-30">
                                        <div className="vl-about-icon">
                                            <span><img src={about2} alt='about2' /></span>
                                        </div>
                                        <div className="vl-icon-content">
                                            <h3 className="title"><Link to="/pages/service">Putting people first in
                                                everything we do</Link></h3>
                                            <p>Guided by compassion driven the belief that every act kindness makes a
                                                difference.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="btn-area4" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={300}>
                                <Link to="/about" className="header-btn1">Learn More <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default About;