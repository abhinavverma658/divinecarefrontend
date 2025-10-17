import about1 from '@/assets/img/icons/vl-about-2.1.svg';
import about2 from '@/assets/img/icons/vl-about-2.2.svg';
import dog1 from '@/assets/img/shape/vl-dog-shap-1.1.png';
import cat2 from '@/assets/img/shape/vl-cat-shap-1.2.png';
import meetShape1 from '@/assets/img/shape/vl-meet-shape1.png';
import thumb2 from '@/assets/img/about/vl-about-latg-thumb-2.2.png';
import arrowShap from '@/assets/img/icons/vl-about-arow-shap-2.1.svg';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
  return <div className="vl-about2 p-relative sp2">
            <div className="vl-ab-shap shap-1"><img src={arrowShap} alt='arrowShap' /></div>
            <div className="vl-ab-shap shap-2"><img src={dog1} alt='dog1' /></div>
            <div className="vl-ab-shap shap-3"><img src={cat2} alt='cat2' /></div>
            <div className="vl-ab-shap shap-4"><img src={about1} alt='about1' /></div>
            <div className="vl-ab-shap shap-5"><img src={about2} alt='about2' /></div>
            <div className="vl-ab-shap shap-6"><img src={about2} alt='about2' /></div>
            <div className="vl-ab-shap shap-7"><img src={about2} alt='about2' /></div>
            <div className="vl-ab-shap shap-8"><img src={about2} alt='about2' /></div>
            <Container>
                <Row>
                    <div className="p-relative">
                        <Row className=" align-items-center">
                            <Col lg={6}>
                                <div className="vl-about-thumb mb-30">
                                    <div className="bottom-shape">
                                        <img src={meetShape1} alt='meetShape1' />
                                    </div>
                                    <span><img className="long-width reveal" src={thumb2} alt='thumb2' /></span>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="vl-about-content-box mb-30">
                                    <div className="vl-section-title-3">
                                        <h4 className="subtitle" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={300}>About Us</h4>
                                        <h2 className="title text-anime-style-3">Meet the Team Advocate for Animal
                                            Welfare</h2>
                                        <p className="pb-32" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={300}>At the heart of our organization is deep commitment
                                            protecting, rescuing, and caring for animals in need believe every
                                            animal.</p>
                                    </div>
                                    <div className="vl-mission-content-checkbox">
                                        <ul>
                                            <li><span><FaCheck className="fa-solid fa-check" /></span>Protecting Animals,
                                                Inspiring Change
                                            </li>
                                            <li><span><FaCheck className="fa-solid fa-check" /></span> A Safe Haven for
                                                Every Animal
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="vl-about-btn">
                                        <Link to="/about" className="btn-primary2">Save a Life <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>;
};
export default About;