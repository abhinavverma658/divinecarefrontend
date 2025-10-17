import { useState } from 'react';
import { serviceData } from '../data';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <section className="vl-services2 service-inner-page sp2">
            <Container>
                <Row>
                    {serviceData.map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className={`vl-single-service-box mb-30 ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="vl-service-box-flex">
                                        <div className="icon">
                                            <span><img src={item.icon} alt='icons' /></span>
                                        </div>
                                        <div className="thumb">
                                            <div className="sm-thumb">
                                                <img src={item.thumbnail} alt='thumb' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vl-service-box-content">
                                        <h4 className="title"><a href="#">{item.title}</a></h4>
                                        <p>{item.description}</p>
                                        <a href="#" className="read-more">Read More <span><FaArrowRight /></span></a>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Service;