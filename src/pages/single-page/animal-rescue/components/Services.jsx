import { useState } from 'react';
import { serviceData } from '../data';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <section className="vl-services2 sp2">
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto">
                        <div className="vl-section-title-3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Our
                                Service</h4>
                            <h2 className="title text-anime-style-3">Emergency Animal Rescue</h2>
                            <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Through each rescue,
                                we’re committed to the giving animals <br /> a new chance at life,
                                safety, &amp; happiness</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {serviceData.map((item, idx) => <Col lg={3} md={6} data-aos="zoom-in-up" data-aos-duration={item.animation.duration} data-aos-delay={item.animation.delay} key={idx}>
                                <div className={`vl-single-service-box mb-30 ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="vl-service-box-flex">
                                        <div className="icon">
                                            <span><img className="icon-1" src={item.icon} alt='icons' /></span>
                                        </div>
                                        <div className="thumb">
                                            <div className="sm-thumb">
                                                <img src={item.thumbnail} alt='thumbnail' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vl-service-box-content">
                                        <h4 className="title"><Link to="/pages/service">{item.title}</Link></h4>
                                        <p>{item.description}</p>
                                        <Link to="/pages/service" className="read-more">Read More <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Services;