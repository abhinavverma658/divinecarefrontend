import arrowUp from '@/assets/img/icons/vl-up-arrow.svg';
import aboutThumb1 from '@/assets/img/about/vl-about-thumb-3.1.png';
import aboutThumb2 from '@/assets/img/about/vl-about-thumb-3.2.png';
import videoThumb from '@/assets/img/about/vl-video-thumb.png';
import quoteUp from '@/assets/img/icons/vl-about-quote-up.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const About = () => {
  return <section id="about" className="vl-about3 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-about-thumb-flex mb-30">
                            <Link to="/about"><span><img src={arrowUp} alt='arrowUp' /></span></Link>
                            <Row>
                                <Col lg={6} md={6}>
                                    <div className="thumb-1 reveal"><img className="w-100" src={aboutThumb1} alt='aboutThumb1' /></div>
                                </Col>
                                <Col lg={6} md={6}>
                                    <div className="thumb-2 reveal"><img className="w-100" src={aboutThumb2} alt='aboutThumb2' /></div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content-3 ml-50 mb-30">
                            <div className="vl-section-title3">
                                <h4 className="subtitle" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={300}>About Us</h4>
                                <h2 className="title text-anime-style-3">Dedicated to a Healthier World Clean Water</h2>
                                <p className="para" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={300}>At our core, we believe that access to clean water is a basic
                                    human <br /> right. Our organization is dedicated to providing sustainable water.</p>
                                <div className="vl-btn3" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={300}>
                                    <Link to="/event" className="primary-btn-3">let&#39;s see work</Link>
                                </div>
                            </div>
                            <div className="vl-about-video-content" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                <Row className="align-items-center">
                                    <Col lg={6} md={6}>
                                        <div className="vl-video-thumb">
                                            <span> <img className="w-100" src={videoThumb} alt='videoThumb' /></span>
                                            <a href="https://www.youtube.com/watch?v=HkYGxh1XUGQ" className="video-play-button video popup-video" tabIndex={-1}>
                                                <span />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="vl-video-content">
                                            <div className="icon">
                                                <span><img src={quoteUp} alt='quoteUp' /></span>
                                            </div>
                                            <p className="para">“Our mission goe beyond providing water; we’re committed
                                                empowering communities improving.”</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default About;