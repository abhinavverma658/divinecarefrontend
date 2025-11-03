import { useState, useEffect } from 'react';
import { eventData } from '../data';
import { eventsAPI } from '@/utils/eventsApi';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";

const Event = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(5); // Number of events per page

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await eventsAPI.getEvents();
        if (response && response.success && response.events) {
          setEvents(response.events);
        } else {
          setEvents(eventData);
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
        setEvents(eventData);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  if (loading) {
    return (
      <section className="vl-singlevent-iner sp1">
        <Container>
          <div className="text-center py-5">
            <div role="status">
            </div>
          </div>
        </Container>
      </section>
    );
  }
  return <section className="vl-singlevent-iner sp1">
            <Container>
                {error && (
                  <Row>
                    <Col>
                      <div className="alert alert-info mb-4">
                        Using fallback data due to API error: {error}
                      </div>
                    </Col>
                  </Row>
                )}
                <Row>
                    {events.map((item, idx) => {
                      const dateInfo = item.startDate ? formatEventDate(item.startDate) : {
                        date: item.date || '01',
                        month: item.month || 'Jan',
                        year: item.year || '2025'
                      };
                      
                      return (
                        <Col lg={12} className="mb-50" key={item._id || idx}>
                          <div className={`event-bg-flex ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                            <div className="event-date">
                              <h3 className="title">{dateInfo.date}</h3>
                              <p className="year">{dateInfo.month} <br /> {dateInfo.year}</p>
                            </div>
                            <div className="event-content">
                              <div className="event-meta">
                                {item.startDate && item.endDate ? (
                                  <p className="para">
                                    {new Date(item.startDate).toLocaleDateString('en-US', { 
                                      month: 'long', 
                                      day: 'numeric', 
                                      year: 'numeric'
                                    })} - {new Date(item.endDate).toLocaleDateString('en-US', { 
                                      month: 'long', 
                                      day: 'numeric', 
                                      year: 'numeric'
                                    })}
                                  </p>
                                ) : item.startDate ? (
                                  <p className="para">
                                    {new Date(item.startDate).toLocaleDateString('en-US', { 
                                      month: 'long', 
                                      day: 'numeric', 
                                      year: 'numeric'
                                    })}
                                  </p>
                                ) : (
                                  <p className="para">Event Date TBD</p>
                                )}
                              </div>
                              <Link to={`/event-single/${item._id || ''}`} className="title">{item.title}</Link>
                              <p className="para">{item.venueDetails}</p>
                              <Link to={`/event-single/${item._id || ''}`} className="details">Event
                                Details <span><FaArrowRight /></span></Link>
                            </div>
                            <div className="event-thumb">
                              <img 
                                src={item.image || item.images?.[0] || '/placeholder-event.jpg'} 
                                alt='event'
                                style={{
                                  width: '370px',
                                  height: '200px',
                                  objectFit: 'cover',
                                  objectPosition: 'center',
                                  borderRadius: '8px',
                                  display: 'block'
                                }}
                              />
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
                {events.length > 10 && (
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
                )}
            </Container>
        </section>;
};
export default Event;