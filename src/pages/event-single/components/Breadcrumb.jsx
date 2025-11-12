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
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Breadcrumb = () => {
  const { eventId } = useParams(); // Get dynamic eventId from URL parameters
  const prices = [10, 20, 30, 40, 50];
  const [value, setValue] = useState(10);
  const [eventDetail, setEventDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Registration form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  // Format date utility function
  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
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
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setRegistrationError('Please fill in all fields');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setRegistrationError(null);
      
      const API_BASE_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_BASE_URL}/events/${eventId}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setRegistrationSuccess(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: ''
        });
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setRegistrationError(err.message || 'Failed to register. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="vl-event-content-area">
                            {loading ? (
                                // Skeleton Loading
                                <>
                                    <div className="vl-large-thumb">
                                        <Skeleton height={500} style={{ borderRadius: '10px' }} />
                                    </div>
                                    <div className="vl-event-content mt-4">
                                        <Skeleton height={40} width="80%" style={{ marginBottom: '20px' }} />
                                        <Skeleton count={3} style={{ marginBottom: '10px' }} />
                                        <Skeleton count={5} style={{ marginBottom: '10px', marginTop: '20px' }} />
                                    </div>
                                </>
                            ) : error ? (
                                <div className="alert alert-warning text-center">
                                    <p>Unable to load event details. Please try again later.</p>
                                    <p><small>{error}</small></p>
                                </div>
                            ) : (
                                <>
                                    {eventDetail?.image && (
                                        <div className="vl-large-thumb">
                                            <img 
                                                className="w-100 img-fluid" 
                                                src={getImageUrl(eventDetail.image)} 
                                                alt={eventDetail?.title || 'Event Image'} 
                                            />
                                        </div>
                                    )}
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
                                    {loading ? (
                                        // Skeleton for event info boxes
                                        <>
                                            <Col lg={6} md={6}>
                                                <div style={{ padding: '30px', background: 'rgba(0,0,0,0.7)', borderRadius: '10px' }}>
                                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                        <Skeleton circle width={60} height={60} baseColor="#ffffff20" highlightColor="#ffffff40" />
                                                        <div style={{ flex: 1 }}>
                                                            <Skeleton height={25} width={150} baseColor="#ffffff20" highlightColor="#ffffff40" style={{ marginBottom: '10px' }} />
                                                            <Skeleton height={20} width="80%" baseColor="#ffffff20" highlightColor="#ffffff40" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <div style={{ padding: '30px', background: 'rgba(0,0,0,0.7)', borderRadius: '10px' }}>
                                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                        <Skeleton circle width={60} height={60} baseColor="#ffffff20" highlightColor="#ffffff40" />
                                                        <div style={{ flex: 1 }}>
                                                            <Skeleton height={25} width={150} baseColor="#ffffff20" highlightColor="#ffffff40" style={{ marginBottom: '10px' }} />
                                                            <Skeleton height={20} width="80%" baseColor="#ffffff20" highlightColor="#ffffff40" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={12} md={12}>
                                                <div className="donate-form mt-5">
                                                    <Skeleton height={35} width={300} style={{ margin: '0 auto 30px', display: 'block' }} />
                                                    <div className="row">
                                                        <div className="mb-20 col-md-6">
                                                            <Skeleton height={50} />
                                                        </div>
                                                        <div className="mb-20 col-md-6">
                                                            <Skeleton height={50} />
                                                        </div>
                                                        <div className="mb-20 col-md-6">
                                                            <Skeleton height={50} />
                                                        </div>
                                                    </div>
                                                    <Skeleton height={50} width={200} style={{ marginTop: '20px' }} />
                                                </div>
                                            </Col>
                                        </>
                                    ) : (
                                        <>
                                            <Col lg={6} md={6}>
                                        <div className="icon-box mb-30 h-100 d-flex">
                                            <div className="icon">
                                                <span><img src={eventDate1} alt='eventDate1' /></span>
                                            </div>
                                            <div className="content flex-grow-1">
                                                <h4 className="title text-white">Events Date</h4>
                                                <p className="para text-white">
                                                    {eventDetail?.startDate && (
                                                        <>
                                                             {formatEventDate(eventDetail.startDate)}
                                                            <br />
                                                        </>
                                                    )}
                                                    {eventDetail?.endDate && (
                                                        <>
                                                          {formatEventDate(eventDetail.endDate)}
                                                        </>
                                                    )}
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
                <Col lg={12} md={12}>
                  <div className="donate-form mt-5">
                    <h3 style={{ textAlign: 'center', color: 'black', marginBottom: '20px' }}>Register For This Event</h3>
                                  <form onSubmit={handleRegisterSubmit}>
                                      <div className="row">
                                          <div className="mb-20 col-md-6">
                                              <input 
                                                  placeholder="First Name" 
                                                  type="text" 
                                                  name="firstName"
                                                  value={formData.firstName}
                                                  onChange={handleInputChange}
                                                  className="form-control"
                                                  disabled={isSubmitting}
                                                  required
                                              />
                                          </div>
                                        <div className="mb-20 col-md-6">
                                            <input 
                                                placeholder="Last Name" 
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                        <div className="mb-20 col-md-6">
                                            <input 
                                                placeholder="Email Address" 
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="form-control"
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Success Message */}
                                    {registrationSuccess && (
                                        <div className="alert alert-success mb-4" role="alert">
                                            <strong>Thank you!</strong> Registered successfully.
                                        </div>
                                    )}
                                    
                                    {/* Error Message */}
                                    {registrationError && (
                                        <div className="alert alert-danger mb-4" role="alert">
                                            {registrationError}
                                        </div>
                                    )}
                                    
                                    <div className="total-anoumt">
                                        <div className="toal">
                                            <div className="btn-area">
                                                <button 
                                                    type="submit" 
                                                    className="header-btn1"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Registering...' : 'Register Now '} 
                                                    <span><FaArrowRight /></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                                </form>
                                            </div>
                                        </Col>
                                        </>
                                    )}
                                </Row>
                            </div>                            {/* Registration Form Section */}
                         
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default Breadcrumb;