import { useState, useEffect } from 'react';
import { eventData } from '../data';
import { eventsAPI } from '@/utils/eventsApi';
import { getImageUrl } from '@/utils/imageUtils';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import calendarImg from '@/assets/img/icons/calender.svg';

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
          // Filter future events and sort in ascending order
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set to start of today
          
          const upcomingEvents = response.events
            .filter(event => {
              const eventDate = new Date(event.startDate || event.date);
              eventDate.setHours(0, 0, 0, 0);
              return eventDate > today; // Only future events
            })
            .sort((a, b) => {
              const dateA = new Date(a.startDate || a.date);
              const dateB = new Date(b.startDate || b.date);
              return dateA - dateB; // Ascending order (earliest first)
            });
          
          setEvents(upcomingEvents);
        } else {
          // Apply same filtering to fallback data
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          const upcomingEvents = eventData
            .filter(event => {
              const eventDate = new Date(event.startDate || event.date);
              eventDate.setHours(0, 0, 0, 0);
              return eventDate > today;
            })
            .sort((a, b) => {
              const dateA = new Date(a.startDate || a.date);
              const dateB = new Date(b.startDate || b.date);
              return dateA - dateB;
            });
          
          setEvents(upcomingEvents);
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
        
        // Apply same filtering to fallback data
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const upcomingEvents = eventData
          .filter(event => {
            const eventDate = new Date(event.startDate || event.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate > today;
          })
          .sort((a, b) => {
            const dateA = new Date(a.startDate || a.date);
            const dateB = new Date(b.startDate || b.date);
            return dateA - dateB;
          });
        
        setEvents(upcomingEvents);
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
                {events.length === 0 ? (
                  <Row>
                    <Col lg={12} className="d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                      <div className="w-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                        <div className="text-center w-100">
                          <img 
                            src={calendarImg} 
                            alt="Calendar" 
                            style={{ 
                              width: '200px', 
                              height: '200px',
                              marginBottom: '20px'
                            }}
                          />
                          <p className="text-muted mb-0" style={{ fontSize: '28px', fontWeight: '800' }}>
                            No upcoming events.
                            <br/>
                          </p>
                          <span className='fs-6'>
                              Stay tuned for further updates.
                            </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                ) : (
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
                            <div className="event-content" style={{ textAlign: 'left' }}>
                              <div className="event-meta">
                                {item.startDate && item.endDate ? (
                                  <p className="para" style={{ textAlign: 'left' }}>
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
                                  <p className="para" style={{ textAlign: 'left' }}>
                                    {new Date(item.startDate).toLocaleDateString('en-US', { 
                                      month: 'long', 
                                      day: 'numeric', 
                                      year: 'numeric'
                                    })}
                                  </p>
                                ) : (
                                  <p className="para" style={{ textAlign: 'left' }}>Event Date TBD</p>
                                )}
                              </div>
                              <Link to={`/event-single/${item._id || ''}`} className="title" style={{ textAlign: 'left', display: 'block' }}>{item.title}</Link>
                              <p className="para" style={{ textAlign: 'left' }}>{item.venueDetails}</p>
                              <Link to={`/event-single/${item._id || ''}`} className="details" style={{ textAlign: 'left', display: 'inline-block' }}>Event
                                Details <span><FaArrowRight /></span></Link>
                            </div>
                            {(item.image || item.images?.[0]) && (
                              <div className="event-thumb">
                                <img 
                                  src={getImageUrl(item.image || item.images?.[0])} 
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
                            )}
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                )}
                {/* {events.length > 10 && (
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
                )} */}
            </Container>
        </section>;
};
export default Event;