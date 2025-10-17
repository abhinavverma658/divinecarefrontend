import aboutThum1 from '@/assets/img/about/vl-about-thum-inner-sm-1.1.png';
import aboutThum2 from '@/assets/img/about/vl-about-thum-inner-sm-1.2.png';
import aboutThum3 from '@/assets/img/about/vl-about-thum-inner-large-1.3.png';
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
const AboutUs = () => {
  return <section className="vl-about5 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-about-content">
                            <div className="vl-section-title-1 mb-50">
                                <h5 className="subtitle">About Us</h5>
                                <h2 className="title">Stronger Communities An One Gift at a Time</h2>
                                <p>Our organization is built on a simple yet powerful belief: together, we can create
                                    lasting change. Through compassion, dedication, and the generous support of our
                                    community, we work to uplift.</p>
                            </div>
                            <Row>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb mb-30">
                                        <img className="w-100" src={aboutThum1} alt='aboutThum1' />
                                    </div>
                                </Col>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb2 mb-30">
                                        <img className="w-100" src={aboutThum2} alt='aboutThum2' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content2 ml-20">
                            <div className="large-thumb mb-30">
                                <img className="w-100" src={aboutThum3} alt='aboutThum3' />
                            </div>
                            <div className="content mb-30">
                                <p className="para">From providing essential resources to funding life-changing
                                    projects, every effort is directed toward building a better, more equitable world.
                                    By uniting individuals, businesses, and communities.</p>
                                <div className="icon-list-box box2">
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default AboutUs;