import { Link } from "react-router";
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { eventData } from '../data';
import { eventsAPI } from '@/utils/eventsApi';

const Event = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <section className="vl-singlevent-iner pb-50">
        <Container>
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }
  return <section className="vl-singlevent-iner pb-50">
            <Container>
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="more-title text-center mb-60">
                            <h2 className="title">More Events</h2>
                        </div>
                    </Col>
                </Row>
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
                                <p className="para">{item.shortDescription || item.meta || 'Event Details'}</p>
                              </div>
                              <Link to={`/event-single/${item._id || ''}`} className="title">{item.title}</Link>
                              <p className="para">{item.location}</p>
                              <Link to={`/event-single/${item._id || ''}`} className="details">Event Details <span><FaArrowRight /></span></Link>
                            </div>
                            <div className="event-thumb">
                              <img className="w-100" src={item.image || item.images?.[0] || '/placeholder-event.jpg'} alt='event' />
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
            </Container>
        </section>;
};
export default Event;