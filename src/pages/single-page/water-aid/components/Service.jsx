import galleryImg from '@/assets/img/icons/vl-gallerylarge-3.1.svg';
import { serviceData } from '../data';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Service = () => {
  return <section id="service" className="vl-service3 sp2">
            <div className="shape"><img src={galleryImg} alt='galleryImg' /></div>
            <Container>
                <Row>
                    <Col lg={"6"} className="mx-auto">
                        <div className="vl-section-title3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Charity Services</h4>
                            <h2 className="title text-anime-style-3">Dedicated to a Healthier World Clean Water</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {serviceData.map((item, idx) => <Col lg={4} md={6} data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300} key={idx}>
                                <div className="vl-service-box-parent mb-30">
                                    <div className="vl-service-icon">
                                        <span><img src={item.iconImg} alt='thumbnailImg' /></span>
                                    </div>
                                    <div className="vl-service-box-3">
                                        <div className="service-thumb">
                                            <img className="w-100" src={item.thumbnailImg} alt='thumbnailImg' />
                                        </div>
                                        <div className="service-content">
                                            <Link to="/pages/service" className="title">{item.title}</Link>
                                            <p className="para">{item.description}</p>
                                            <Link to="/pages/service" className="rmore">Read More <span><FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Service;