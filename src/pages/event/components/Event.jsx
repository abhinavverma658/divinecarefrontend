import { useState } from 'react';
import { eventData } from '../data';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Event = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <section className="vl-singlevent-iner sp1">
            <Container>
                <Row>
                    {eventData.map((item, idx) => <Col lg={12} className="mb-50" key={idx}>
                                <div className={`event-bg-flex ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="event-date">
                                        <h3 className="title">{item.date}</h3>
                                        <p className="year">{item.month} <br /> {item.year}</p>
                                    </div>
                                    <div className="event-content">
                                        <div className="event-meta">
                                            <p className="para">{item.meta}</p>
                                        </div>
                                        <Link to="/event-single" className="title">{item.title}</Link>
                                        <p className="para">{item.location}</p>
                                        <Link to="/event-single" className="details">Event
                                            Details <span><FaArrowRight /></span></Link>
                                    </div>
                                    <div className="event-thumb">
                                        <img className="w-100" src={item.image} alt='image' />
                                    </div>
                                </div>
                            </Col>)}
                </Row>
                <Row>
                    <Col xs={12} className="m-auto">
                        <div className="theme-pagination thme-pagination-mt text-center mt-18">
                            <ul>
                                <li><a href="#"><FaAngleLeft className="fa-solid fa-angle-left" /></a></li>
                                <li><a className="active" href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li>...</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#"><FaAngleRight className="fa-solid fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Event;