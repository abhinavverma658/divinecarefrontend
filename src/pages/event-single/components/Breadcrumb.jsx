import { useState, useEffect } from 'react';
import thumbImg from '@/assets/img/event/vl-learg-thumb-enent.png';
import eventDate1 from '@/assets/img/icons/vl-event-date1.1.svg';
import eventImg from '@/assets/img/icons/vl-event-loca1.1.svg';
import customImg from '@/assets/img/icons/custom-amou.svg';
import dollarImg from '@/assets/img/icons/dollar.svg';
import { Link, useParams } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { eventsAPI } from '@/utils/eventsApi';
const Breadcrumb = () => {
  const { eventId } = useParams(); // Get dynamic eventId from URL parameters
  const prices = [10, 20, 30, 40, 50];
  const [value, setValue] = useState(10);
  const [eventDetail, setEventDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format date utility function
  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return {
      full: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      time: date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  };

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use dynamic eventId from URL params, fallback to default if not provided
        const currentEventId = eventId ; 
        const response = await eventsAPI.getSingleEvent(currentEventId);
        
        if (response.success && response.event) {
          setEventDetail(response.event);
        } else {
          throw new Error('Failed to load event details');
        }
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };  

    fetchEventDetail();
  }, [eventId]); // Re-run effect when eventId changes
  return <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="vl-event-content-area">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p>Loading event details...</p>
                                </div>
                            ) : error ? (
                                <div className="alert alert-warning text-center">
                                    <p>Unable to load event details. Please try again later.</p>
                                    <p><small>{error}</small></p>
                                </div>
                            ) : (
                                <>
                                    <div className="vl-large-thumb">
                                        <img 
                                            className="w-100 img-fluid" 
                                            src={eventDetail?.image || thumbImg} 
                                            alt={eventDetail?.title || 'Event Image'} 
                                        />
                                    </div>
                                    <div className="vl-event-content">
                                        <h2 className="title">{eventDetail?.title || 'Unity Giving Community Charity Event'}</h2>
                                        <p className="para pb-16">
                                            {eventDetail?.shortDescription || 'Our events bring people together to make a difference, uniting communities in support of meaningful causes. Each event—whether a fundraiser, awareness campaign, or volunteer day—serves as an opportunity to create real impact.'}
                                        </p>
                                        <div className="para pb-32" dangerouslySetInnerHTML={{ __html: eventDetail.description }} />
                                    </div>
                                </>
                            )}
                            <div className="vl-event-box-bg">
                                <Row className="g-4">
                                    <Col lg={6} md={6}>
                                        <div className="icon-box mb-30 h-100 d-flex">
                                            <div className="icon">
                                                <span><img src={eventDate1} alt='eventDate1' /></span>
                                            </div>
                                            <div className="content flex-grow-1">
                                                <h4 className="title text-white">Events Date</h4>
                                                <p className="para text-white">
                                                    {eventDetail?.startDate 
                                                        ? `${formatEventDate(eventDetail.startDate).full}` 
                                                        : ''
                                                    } <br /> 
                                                    {eventDetail?.startDate 
                                                        ? formatEventDate(eventDetail.startDate).time 
                                                        : ''
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="icon-box mb-30 h-100 d-flex">
                                            <div className="icon">
                                                <span><img src={eventImg} alt='eventImg' /></span>
                                            </div>
                                            <div className="content flex-grow-1">
                                                <h4 className="title text-white">Events Location</h4>
                                                <p className="para text-white">
                                                    {eventDetail?.location || 'Vineyard Venues 5396'} <br /> 
                                                    {eventDetail?.venueDetails || 'North Reese Avenue'}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default Breadcrumb;