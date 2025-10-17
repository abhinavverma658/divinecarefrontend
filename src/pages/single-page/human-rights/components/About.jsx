import thumb1 from '@/assets/img/about/vl-about-thumb-sm-5.1.png';
import thumb2 from '@/assets/img/about/vl-about-thumb-sm-5.2.png';
import thumb3 from '@/assets/img/about/vl-about-thumb-large-5.3.png';
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const About = () => {
  return <section id="about" className="vl-about5 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-about-content">
                            <div className="vl-section-title5 mb-40">
                                <h5 className="subtitle" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={300}>About Us</h5>
                                <h2 className="title text-anime-style-3">Our Journey: Protecting Human Rights for
                                    All</h2>
                                <p className="para" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={300}>We are a dedicated group of advocates, partners, allies
                                    committed <br /> to protecting and promoting human rights for all. Our mission is
                                    to <br /> stand up for those whose voices often go unheard, defend.</p>
                            </div>
                            <div className="vl-sm-thumb mb-30 reveal">
                                <img className="w-100" src={thumb1} alt='thumb1' />
                            </div>
                            <div className="vl-sm-thumb2 mb-30 reveal">
                                <img className="w-100" src={thumb2} alt='thumb2' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content2 ml-20 reveal">
                            <div className="large-thumb mb-30">
                                <img className="w-100" src={thumb3} alt='thumb3' />
                            </div>
                            <div className="content mb-30">
                                <p className="para" data-aos="fade-left" data-aos-duration={900} data-aos-delay={300}>Through advocacy, education, and community empowerment, we work
                                    to create a world where every individual can live with dignity, equality, and
                                    freedom from policy reform grassroots mobilization.</p>
                                <div className="icon-list-box" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={300}>
                                    <ul>
                                        <li><span><FaCheck className="fa-solid fa-check" /></span>Join Our Mission to
                                            Make a Difference
                                        </li>
                                        <li><span><FaCheck className="fa-solid fa-check" /></span>Transforming Lives and
                                            Communities
                                        </li>
                                        <li><span><FaCheck className="fa-solid fa-check" /></span>Standing Up for Human
                                            Rights
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn5" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={300}>
                                    <Link to="/about" className="btn-priamry1">Stand with
                                        Us <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default About;