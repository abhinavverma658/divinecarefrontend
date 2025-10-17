import vlIcon1 from '@/assets/img/icons/vl-ic-5.1.svg';
import vlIcon2 from '@/assets/img/icons/vl-ic-5.2.svg';
import thumb1 from '@/assets/img/choose/vl-choose-thumb-1.1.png';
import thumb2 from '@/assets/img/choose/vl-choose-thumb-1.2.png';
import chooseUpArrow from '@/assets/img/icons/vl-choose-up-arow.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from "react-router";
const ChooseUs = () => {
  return <section id="WhyChooseUs" className="vl-choose5 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-choose-content mb-30">
                            <div className="vl-section-title5">
                                <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>Why Choose Us</h5>
                                <h2 className="title text-anime-style-3">Dedicated to a Healthier World Clean Water</h2>
                                <p className="para" data-aos-duration={800} data-aos-delay={300}>At our core, we believe
                                    that access to clean water is a basic human <br /> right. Our organization is
                                    dedicated to providing sustainable waterto providing sustainable water.</p>
                            </div>
                        </div>
                        <Row>
                            <Col lg={6} md={6} data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                <div className="vl-icon-box mb-30">
                                    <div className="icon">
                                        <span><img src={vlIcon1} alt='vlIcon1' /></span>
                                    </div>
                                    <div className="content">
                                        <Link to="/pages/service" className="title">Give Right Place</Link>
                                        <p className="para">Increase the likelihood of being in the right place at the
                                            goals and work.</p>
                                        <Link to="/pages/service" className="readmore">Read
                                            More <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} data-aos="zoom-in-up" data-aos-duration={1100} data-aos-delay={300}>
                                <div className="vl-icon-box mb-30">
                                    <div className="icon">
                                        <span><img src={vlIcon2} alt='vlIcon2' /></span>
                                    </div>
                                    <div className="content">
                                        <Link to="/pages/service" className="title">Money &amp; Helath</Link>
                                        <p className="para">Between physical, mental and the financial health explore
                                            this in people.</p>
                                        <Link to="/pages/service" className="readmore">Read
                                            More <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <div className="single-thumb-box ml-50">
                            <div className="box-icon">
                                <Link to="/about"><span><img src={chooseUpArrow} alt='chooseUpArrow' /></span></Link>
                            </div>
                            <Row>
                                <Col lg={6} md={6}>
                                    <div className="single-thmb mb-30 reveal">
                                        <img className="w-100" src={thumb1} alt='thumb1' />
                                    </div>
                                </Col>
                                <Col lg={6} md={6}>
                                    <div className="single-thmb2 mb-30 reveal">
                                        <img className="w-100" src={thumb2} alt='thumb2' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default ChooseUs;