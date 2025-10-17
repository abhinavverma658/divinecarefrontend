import ctaBg4 from '@/assets/img/cta/cta-bg4.png';
import thumb1Img from '@/assets/img/cta/vl-cta-thumb-4.1.png';
import arrow4 from '@/assets/img/icons/cta-shape-arrow-4.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
const CtaArea = () => {
  return <section className="vl-cta4">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="vl-cta-bg4" style={{
            backgroundImage: `url(${ctaBg4})`
          }}>
                            <div className="shape"><img src={arrow4} alt='arrow4' /></div>
                            <Row>
                                <Col lg={6} className="mb-30">
                                    <div className="cta-content">
                                        <h3 className="title text-anime-style-3">Become a volunteer</h3>
                                        <p className="para" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={300}>Your support has the power to make a lasting difference
                                            in the <br /> lives of our senior citizens, individuals who have
                                            dedicated <br /> their lives to building the communities we cherish today.
                                        </p>
                                        <div className="vl-ctaform" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={300}>
                                            <form action="#">
                                                <input type="email" placeholder="Your Email.." />
                                            </form>
                                            <div className="btn-area4">
                                                <button className="header-btn1">Sign In <span><FaArrowRight /></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="mb-30">
                                    <div className="vl-ctathumb reveal">
                                        <img src={thumb1Img} alt='thumb1Img' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default CtaArea;