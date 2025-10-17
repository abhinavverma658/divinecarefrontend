import React, { useState, useEffect } from 'react';
import blogThmb from '@/assets/img/blog/vl-blog-larg-thmb.png';
import { tab1Data, tab2Data, tab3Data } from '../data';
import { homeAPI } from '../../../../utils/api';
import clockImg from '@/assets/img/icons/vl-clock-1.1.svg';
import calendarImg from '@/assets/img/icons/calender.svg';
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';

const EventArea = () => {
  const [eventData, setEventData] = useState({
    heading: 'Heroes in Action Disaster Relief Fundraiser',
    description: 'Our events are more than just gatherings they powerful opportunities to bring communities together, raise awareness, and generate.',
    backgroundImage: blogThmb,
    ctaButton: {
      text: 'Vineyard Venues',
      link: '/event-single'
    },
    isActive: true
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    try {
      setLoading(true);
      
      console.log('Fetching event data using centralized API...');
      
      // Use centralized API with token management and fallback handling
      const response = await homeAPI.getEventsData();
      
      if (response.success && response.event) {
        setEventData(prevData => ({
          ...prevData,
          heading: response.event.heading || prevData.heading,
          description: response.event.description || prevData.description,
          backgroundImage: response.event.backgroundImage || prevData.backgroundImage,
          ctaButton: response.event.ctaButton || prevData.ctaButton,
          isActive: response.event.isActive !== undefined ? response.event.isActive : prevData.isActive
        }));
        console.log('Event data loaded successfully:', response.event);
      } else {
        console.log('Using fallback event data');
      }
    } catch (error) {
      console.error('Error fetching event data:', error);
      // Keep default data on error
    } finally {
      setLoading(false);
    }
  };

  // Don't render if not active
  if (!eventData.isActive) {
    return null;
  }
  return <section className="vl-blog sp2">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="vl-blog-lar-thumb-bg mb-30" style={{
            backgroundImage: `url(${eventData.backgroundImage})`
          }}>
                            <div className="vl-section-title-1">
                                <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>Events &amp; programs</h5>
                                <h2 className="title text-anime-style-3">{eventData.heading}</h2>
                                <p className="pb-32" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                                  {eventData.description}
                                </p>
                                <div className="btn-area" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                                    <Link to="/event" className="header-btn1">
                                      Events <span><FaArrowRight /></span>
                                    </Link>
                                </div>
                                {loading && (
                                  <div className="text-center mt-3">
                                    <small className="text-muted">Loading latest content...</small>
                                  </div>
                                )}
                            </div>
                        </div>
                    </Col>
                    {/* <TabContainer defaultActiveKey={'pills-home'}>
                        <Col lg={2} data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
                            <div className="event-tabs">
                                <Nav className="nav-pills mb-30" id="pills-tab" role="tablist">
                                    <NavItem className=" mb-30" role="presentation">
                                        <NavLink eventKey="pills-home" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                            <div className="event-tab-content">
                                                <div className="subheading">1st Day</div>
                                                <div className="date-event1">
                                                    <ul>
                                                        <li><span className="date">01</span></li>
                                                        <li><span className="year">JAN <br /> 2025</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=" mb-30" role="presentation">
                                        <NavLink eventKey="pills-profile" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                            <div className="event-tab-content">
                                                <div className="subheading">2nd Day</div>
                                                <div className="date-event1">
                                                    <ul>
                                                        <li><span className="date">08</span></li>
                                                        <li><span className="year">JAN <br /> 2025</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=" mb-30" role="presentation">
                                        <NavLink eventKey="pills-contact" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                                            <div className="event-tab-content">
                                                <div className="subheading">3rd Day</div>
                                                <div className="date-event1">
                                                    <ul>
                                                        <li><span className="date">15</span></li>
                                                        <li><span className="year">JAN <br /> 2025</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=" mb-30" role="presentation">
                                        <NavLink eventKey="pills-contact4" data-bs-toggle="pill" data-bs-target="#pills-contact4" role="tab" aria-controls="pills-contact" aria-selected="false">
                                            <div className="event-tab-content">
                                                <div className="subheading">4th Day</div>
                                                <div className="date-event1">
                                                    <ul>
                                                        <li><span className="date">20</span></li>
                                                        <li><span className="year">JAN <br /> 2025</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>
                        <Col lg={5} className="mb-10" data-aos="zoom-in-up" data-aos-duration={700} data-aos-delay={300}>
                            <TabContent id="pills-tabContent">
                                <TabPane className="fade" eventKey="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                    {tab1Data.map((item, idx) => <div className="vl-single-blog-box mb-20" key={idx}>
                                                <Row>
                                                    <Col lg={8} md={8}>
                                                        <div className="vl-single-blog-box-content">
                                                            <div className="date">
                                                                <span><img src={clockImg} alt='clockImg' /></span>
                                                                <span className="time">11:00 AM</span>
                                                            </div>
                                                            <h4 className="title"><Link to="/event-single">{item.title}</Link></h4>
                                                            <Link to="/event-single" className="details">Event
                                                                Details <span><FaArrowRight /></span></Link>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4}>
                                                        <div className="sm-thumb">
                                                            <Link to="/event-single"><img className="w-100" src={item.image} alt='blog' /></Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>)}
                                </TabPane>
                                <TabPane className="fade" eventKey="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                    {tab2Data.map((item, idx) => <div className="vl-single-blog-box mb-20" key={idx}>
                                                <Row>
                                                    <Col lg={8} md={8}>
                                                        <div className="vl-single-blog-box-content">
                                                            <div className="date">
                                                                <span><img src={clockImg} alt='clockImg' /></span>
                                                                <span className="time">11:00 AM</span>
                                                            </div>
                                                            <h4 className="title"><Link to="/event-single">{item.title}</Link></h4>
                                                            <Link to="/event-single" className="details">Event
                                                                Details <span><FaArrowRight /></span></Link>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4}>
                                                        <div className="sm-thumb">
                                                            <Link to="/event-single"><img className="w-100" src={item.image} alt='blog' /></Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>)}
                                </TabPane>
                                <TabPane className="fade" eventKey="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab1" tabIndex={0}>
                                    {tab3Data.map((item, idx) => <div className="vl-single-blog-box mb-20" key={idx}>
                                                <Row>
                                                    <Col lg={8} md={8}>
                                                        <div className="vl-single-blog-box-content">
                                                            <div className="date">
                                                                <span><img src={clockImg} alt='clockImg' /></span>
                                                                <span className="time">11:00 AM</span>
                                                            </div>
                                                            <h4 className="title"><Link to="/event-single">{item.title}</Link></h4>
                                                            <Link to="/event-single" className="details">Event
                                                                Details <span><FaArrowRight /></span></Link>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4}>
                                                        <div className="sm-thumb">
                                                            <Link to="/event-single"><img className="w-100" src={item.image} alt='blog' /></Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>)}
                                </TabPane>
                                <TabPane className="fade" eventKey="pills-contact4" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                    {tab1Data.map((item, idx) => <div className="vl-single-blog-box mb-20" key={idx}>
                                                <Row>
                                                    <Col lg={8} md={8}>
                                                        <div className="vl-single-blog-box-content">
                                                            <div className="date">
                                                                <span><img src={clockImg} alt='clockImg' /></span>
                                                                <span className="time">11:00 AM</span>
                                                            </div>
                                                            <h4 className="title"><Link to="/event-single">{item.title}</Link></h4>
                                                            <Link to="/event-single" className="details">Event
                                                                Details <span><FaArrowRight /></span></Link>
                                                        </div>
                                                    </Col>
                                                    <Col lg={4} md={4}>
                                                        <div className="sm-thumb">
                                                            <Link to="/event-single"><img className="w-100" src={item.image} alt='blog' /></Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>)}
                                </TabPane>
                            </TabContent>
                        </Col>
                    </TabContainer> */}
              <Col lg={7}>
                  <div className="vl-single-blog-box-content d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                      <div className="text-center">
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
                              <span className='fs-6'>
                                  Stay tuned for further updates.
                              </span>
                          </p>
                      </div>
                  </div>
              </Col>
                </Row>
            </Container>
        </section>;
};
export default EventArea;