import { Link } from "react-router";
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { eventData } from '../data';
const Event = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <section className="vl-singlevent-iner pb-50">
            <Container>
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="more-title text-center mb-60">
                            <h2 className="title">More Events</h2>
                        </div>
                    </Col>
                </Row>
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
                                        <Link to="/event-single" className="details">Event Details <span><FaArrowRight /></span></Link>
                                    </div>
                                    <div className="event-thumb">
                                        <img className="w-100" src={item.image} alt='image' />
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Event;