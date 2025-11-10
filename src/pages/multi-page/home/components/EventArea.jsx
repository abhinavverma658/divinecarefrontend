import React, { useState, useEffect } from 'react';
import blogThmb from '@/assets/img/blog/vl-blog-larg-thmb.png';
import { homeAPI, eventsAPI } from '../../../../utils/api';
import { getImageUrl } from '@/utils/imageUtils';
import calendarImg from '@/assets/img/icons/calender.svg';
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';

const EventArea = () => {
  const [eventData, setEventData] = useState({
    heading: '',
    description: '',
    backgroundImage: '',
    ctaButton: {
      text: 'Vineyard Venues',
      link: '/event-single'
    },
    isActive: true
  });
  
  const [events, setEvents] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [sectionLoading, setSectionLoading] = useState(true);
  const [eventsByDate, setEventsByDate] = useState({});

  useEffect(() => {
    fetchEventData();
    fetchEvents();
  }, []);

  const fetchEventData = async () => {
    try {
      setSectionLoading(true);
      console.log('Fetching event section data from API...');
      
      const response = await homeAPI.getEventsData();
      
      console.log('Event section API response:', response);
      
      if (response.success && response.event) {
        console.log('🎪 Event section image data:', {
          rawImage: response.event.image,
          convertedImage: getImageUrl(response.event.image)
        });
        
        const imageUrl = response.event.image ? getImageUrl(response.event.image) : blogThmb;
        
        setEventData({
          heading: response.event.heading || '',
          description: response.event.description || '',
          backgroundImage: imageUrl,
          ctaButton: {
            text: 'Vineyard Venues',
            link: '/event-single'
          },
          isActive: true
        });
        console.log('Event section data loaded successfully:', response.event);
        console.log('🎪 Final background image URL:', imageUrl);
      } else {
        console.error('Invalid API response format:', response);
      }
    } catch (error) {
      console.error('Error fetching event section data:', error);
    } finally {
      setSectionLoading(false);
    }
  };

  const fetchEvents = async () => {
    try {
      setLoading(true);
      
      console.log('Fetching events list from API...');
      
      const response = await eventsAPI.getEvents();
      
      if (response.success && response.events && response.events.length > 0) {
        // Filter for upcoming events only (exclude today and past events)
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of today

        const upcomingEvents = response.events
          .filter(event => {
            if (event.startDate) {
              const eventDate = new Date(event.startDate);
              eventDate.setHours(0, 0, 0, 0);
              return eventDate > today; // Only future events (exclude today)
            }
            return false; // Exclude events without dates
          })
          .sort((a, b) => {
            // Sort in ascending order (earliest first)
            return new Date(a.startDate) - new Date(b.startDate);
          })
          .slice(0, 3); // Limit to 3 latest events

        setEvents(upcomingEvents);
        
        // Group events by date for tabs
        const groupedEvents = groupEventsByDate(upcomingEvents);
        setEventsByDate(groupedEvents);
        
        console.log('Events loaded successfully:', upcomingEvents);
      } else {
        console.log('No events found');
        setEvents([]);
        setEventsByDate({});
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
      setEventsByDate({});
    } finally {
      setLoading(false);
    }
  };

  const groupEventsByDate = (events) => {
    const grouped = {};
    const maxTabs = 4;

    events.forEach((event, index) => {
      if (index >= maxTabs) return;

      const eventDate = event.startDate ? new Date(event.startDate) : new Date();
      const dateKey = `tab${index + 1}`;
      
      grouped[dateKey] = {
        date: eventDate,
        events: [event] // Each tab gets only one event
      };
    });

    return grouped;
  };

  const formatDate = (date) => {
    if (!date) return { day: '01', month: 'JAN', year: '2025' };
    
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const year = d.getFullYear();
    
    return { day, month, year };
  };

  // Show white area until event section data is fetched
  if (sectionLoading) {
    return (
      <section className="vl-blog sp2">
        <Container>
          <Row>
            <Col lg={5} style={{ background: '#fff', minHeight: '400px' }}></Col>
            <Col lg={7} style={{ background: '#fff', minHeight: '400px' }}></Col>
          </Row>
        </Container>
      </section>
    );
  }
  // Don't render if not active
  if (!eventData.isActive) {
    return null;
  }

  // Check if we have any events to display
  const hasEvents = events.length > 0;
  const tabKeys = Object.keys(eventsByDate);
  
  // Debug: Log the background image URL being used in render
  console.log('🖼️ Rendering with background image:', eventData.backgroundImage);
  
  return <section className="vl-blog sp2">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="vl-blog-lar-thumb-bg mb-30" style={{
            position: 'relative',
            backgroundImage: `url("${eventData.backgroundImage}")`
          }}>
                            {/* Overlay */}
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              background: 'rgba(0,0,0,0.5)',
                              zIndex: 1
                            }} />
                            <div className="vl-section-title-1">
                                <div style={{ position: 'relative', zIndex: 2 }}>
                                  <h5 className="subtitle" data-aos="fade-right" style={{fontSize:'21px'}} data-aos-duration={800} data-aos-delay={300}>Events &amp; Programs</h5>
                                  {sectionLoading ? (
                                    <div style={{ minHeight: '1px' }}></div>
                                  ) : (
                                    <>
                                      <h2 className="title text-anime-style-3">{eventData.heading}</h2>
                                      <p className="pb-32" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                                        {eventData.description}
                                      </p>
                                      <div className="btn-area" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                                          <Link to="/event" className="header-btn1">
                                            Events & Programs <span><FaArrowRight /></span>
                                          </Link>
                                      </div>
                                    </>
                                  )}
                                  {loading && (
                                    <div style={{ minHeight: '1px' }}></div>
                                  )}
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    {hasEvents ? (
                      <TabContainer defaultActiveKey={tabKeys[0] || 'tab1'}>
                        <Col lg={2} data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
                            <div className="event-tabs">
                                <Nav className="nav-pills mb-30" id="pills-tab" role="tablist">
                                    {tabKeys.slice(0, 4).map((tabKey, index) => {
                                      const tabData = eventsByDate[tabKey];
                                      const dateInfo = formatDate(tabData.date);
                                      return (
                                        <NavItem className="mb-30" role="presentation" key={tabKey}>
                                            <NavLink eventKey={tabKey}>
                                                <div className="event-tab-content" >
                                                    <div className="subheading">{index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} Day</div>
                                                    <div className="date-event1">
                                                        <ul>
                                                            <li><span className="date">{dateInfo.day}</span></li>
                                                            <li><span className="year">{dateInfo.month} <br /> {dateInfo.year}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                      );
                                    })}
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={5} className="mb-10" data-aos="zoom-in-up" data-aos-duration={700} data-aos-delay={300}>
                            <TabContent id="pills-tabContent">
                                {tabKeys.slice(0, 4).map((tabKey) => {
                                  const tabData = eventsByDate[tabKey];
                                  return (
                                    <TabPane className="fade" eventKey={tabKey} key={tabKey}>
                                        {tabData.events.map((event, idx) => (
                                          <div className="vl-single-blog-box mb-20" key={event._id || idx}>
                                                <Row>
                                                    <Col lg={8} md={8}>
                                                        <div className="vl-single-blog-box-content">
                                                            <h4 className="title">
                                                              <Link to={`/event-single/${event._id}`}>
                                                                {event.title || event.name || 'Event Title'}
                                                              </Link>
                                                            </h4>
                                                            <Link to={`/event-single/${event._id}`} className="details">
                                                              Event Details <span><FaArrowRight /></span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4}>
                                                        <div className="sm-thumb">
                                                            <Link to={`/event-single/${event._id}`}>
                                                              {(event.image || event.featuredImage) ? (
                                                                <img 
                                                                  className="w-100" 
                                                                  src={getImageUrl(event.image || event.featuredImage)} 
                                                                  alt={event.title || 'Event'} 
                                                                  onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                  }}
                                                                />
                                                              ) : (
                                                                <div style={{ 
                                                                  width: '100%', 
                                                                  height: '120px', 
                                                                  backgroundColor: '#f5f5f5',
                                                                  display: 'flex',
                                                                  alignItems: 'center',
                                                                  justifyContent: 'center'
                                                                }}>
                                                                </div>
                                                              )}
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </TabPane>
                                  );
                                })}
                            </TabContent>
                        </Col>
                      </TabContainer>
                    ) : (
                      loading ? (
                        <Col lg={7} style={{ background: '#fff', minHeight: '400px' }}></Col>
                      ) : (
                        <Col lg={7} className="d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
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
                      )
                    )}
                </Row>
            </Container>
        </section>;
};
export default EventArea;