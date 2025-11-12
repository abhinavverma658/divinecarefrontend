import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import { eventsAPI } from '@/utils/eventsApi';
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Event = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format date utility function
  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      fullDate: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      })
    };
  };

  useEffect(() => {
    const fetchLatestEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await eventsAPI.getEvents();
        
        if (response.success && response.events) {
          // Filter future events and sort in ascending order (earliest first)
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          const upcomingEvents = response.events
            .filter(event => {
              const eventDate = new Date(event.startDate);
              eventDate.setHours(0, 0, 0, 0);
              return eventDate > today; // Only future events
            })
            .sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) // Ascending order
            .slice(0, 2); // Take first 2 upcoming events
          
          setEvents(upcomingEvents);
        } else {
          throw new Error('Failed to load events');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestEvents();
  }, []);

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
                    {loading ? (
                        // Skeleton Loading
                        [...Array(2)].map((_, idx) => (
                            <Col lg={12} className="mb-50" key={idx}>
                                <div className="event-bg-flex" style={{ display: 'flex', gap: '30px', alignItems: 'center', padding: '30px', background: '#f8f9fa', borderRadius: '10px' }}>
                                    <div style={{ minWidth: '100px', textAlign: 'center' }}>
                                        <Skeleton height={50} width={60} style={{ marginBottom: '10px' }} />
                                        <Skeleton height={20} width={80} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <Skeleton height={20} width={200} style={{ marginBottom: '15px' }} />
                                        <Skeleton height={35} width="70%" style={{ marginBottom: '15px' }} />
                                        <Skeleton height={20} width="50%" style={{ marginBottom: '15px' }} />
                                        <Skeleton height={20} width={150} />
                                    </div>
                                    <div style={{ minWidth: '100%', maxWidth: '200px' }}>
                                        <Skeleton height={200} style={{ borderRadius: '8px' }} />
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : error ? (
                        <Col lg={12} className="text-center">
                            <div className="alert alert-warning">
                                <p>Unable to load events. Please try again later.</p>
                                <p><small>{error}</small></p>
                            </div>
                        </Col>
                    ) : events.length === 0 ? (
                        <Col lg={12} className="text-center">
                            <p>No events available at the moment.</p>
                        </Col>
                    ) : (
                        events.map((item, idx) => {
                            const eventDate = formatEventDate(item.startDate);
                            const endDate = item.endDate ? formatEventDate(item.endDate) : null;
                            return (
                                <Col lg={12} className="mb-50" key={item._id || idx}>
                                    <div className={`event-bg-flex ${hoveredIndex === idx ? 'active' : ''}`} 
                                         onMouseEnter={() => setHoveredIndex(idx)} 
                                         onMouseLeave={() => setHoveredIndex(null)}>
                                        <div className="event-date">
                                            <h3 className="title">{eventDate.date}</h3>
                                            <p className="year">{eventDate.month} <br /> {eventDate.year}</p>
                                        </div>
                                        <div className="event-content">
                                            <div className="event-meta">
                                                <p className="para">{eventDate.fullDate}
                                                    {endDate && (
                                                        <> - {endDate.fullDate}
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <Link to={`/event-single/${item._id}`} className="title">
                                                {item.title || 'Upcoming Event'}
                                            </Link>
                                            <p className="para">{item.venueDetails || 'Location TBA'}</p>
                                            <Link to={`/event-single/${item._id}`} className="details">
                                                Event Details <span><FaArrowRight /></span>
                                            </Link>
                                        </div>
                                        {item.image && (
                                            <div className="event-thumb">
                                                <img
                                                    className="w-100"
                                                    style={{ height: '200px', objectFit: 'cover' }}
                                                    src={getImageUrl(item.image)}
                                                    alt={item.title || 'Event Image'}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    
                                </Col>
                            );
                        })
                    )}
                </Row>
            </Container>
        </section>;
};
export default Event;