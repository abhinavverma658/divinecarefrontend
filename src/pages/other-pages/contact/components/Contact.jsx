import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { contactPageAPI } from '@/utils/contactPageApi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Contact = () => {
  const [contactPageData, setContactPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    willingToDonate: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const fetchContactPageData = async () => {
      try {
        setLoading(true);
        const data = await contactPageAPI.getContactPage();
        setContactPageData(data);
      } catch (err) {
        console.error('Error fetching contact page data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactPageData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    console.log(`Field changed: ${name} = ${newValue}`);

        // Inline validation for email field
        if (name === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!newValue.trim()) {
            setEmailError('Email is required.');
          } else if (!emailRegex.test(newValue)) {
            setEmailError('Please enter a valid email address.');
          } else {
            setEmailError(null);
          }
        }
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Custom validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phoneNumber.trim() || !formData.subject.trim() || !formData.message.trim()) {
      console.log('Validation failed - missing fields');
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Email validation failed');
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    // Prevent submit if inline validation has flagged the email
    if (emailError) {
      setSubmitStatus({ type: 'error', message: emailError });
      setIsSubmitting(false);
      return;
    }

    console.log('All validation passed, making API call...');

    // Prepare data in the format expected by the API
    const apiData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phoneNumber.trim(), // API expects 'phone', not 'phoneNumber'
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      willingToDonate: formData.willingToDonate
    };

    console.log('API payload:', apiData);

    try {
      const response = await fetch('https://divinecare-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      console.log('API response status:', response.status);
      
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        const textResponse = await response.text();
        console.log('Raw response:', textResponse);
        throw new Error('Invalid response format from server');
      }
      
      console.log('API response data:', result);

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message || 'Thank you for contacting us. We will get back to you soon.' });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
          willingToDonate: false
        });
      } else {
        console.error('API Error Details:', {
          status: response.status,
          statusText: response.statusText,
          data: result
        });
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || result.error || `Server error (${response.status}): ${response.statusText}` 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="vl-contact-section-inner sp2">
            <Container>
                {loading ? (
                    <Row className="flex-lg-row flex-column-reverse">
                        <Col lg={6} className="mb-30">
                            <div className="vl-maps">
                                <Skeleton height={800} style={{ borderRadius: '8px' }} />
                            </div>
                        </Col>
                        <Col lg={6} className="mb-30">
                            <div className="vl-section-content ml-50">
                                <div className="section-title">
                                    <Skeleton height={25} width={150} style={{ marginBottom: '15px' }} />
                                    <Skeleton height={40} width="90%" style={{ marginBottom: '15px' }} />
                                    <Skeleton count={3} style={{ marginBottom: '8px' }} />
                                </div>
                                <div className="vl-form-inner" style={{ marginTop: '30px' }}>
                                    <Row>
                                        <Col lg={6}>
                                            <Skeleton height={50} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={6}>
                                            <Skeleton height={50} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={12}>
                                            <Skeleton height={50} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={12}>
                                            <Skeleton height={50} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={12}>
                                            <Skeleton height={50} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={12}>
                                            <Skeleton height={60} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={12}>
                                            <Skeleton height={120} style={{ marginBottom: '20px', borderRadius: '5px' }} />
                                        </Col>
                                        <Col lg={12}>
                                            <Skeleton height={50} width={180} style={{ borderRadius: '5px' }} />
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <Row className="flex-lg-row flex-column-reverse">
                    <Col lg={6} className="mb-30">
                        <div className="vl-maps">
                            <iframe src={contactPageData?.googleMapsEmbedLink} allowFullScreen className="vl-contact-maps" style={{ height: "800px" }} />
                        </div>
                    </Col>
                    <Col lg={6} className="mb-30">
                        <div className="vl-section-content ml-50">
                            <div className="section-title">
                                <h4 className="subtitle">{contactPageData?.pageHeading || 'Contact Us'}</h4>
                                <h2 className="title">Reach Together, We Can Make a Difference</h2>
                                <p className="para pb-32">{contactPageData?.pageDescription || "We're here to answer questions, provide information about our work, and help you find ways to get involved whether interested."}</p>
                            </div>
                            <div className="vl-form-inner">
                                {submitStatus && (
                                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da', color: submitStatus.type === 'success' ? '#155724' : '#721c24', border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}` }}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={6}>
                                            <input 
                                                type="text" 
                                                placeholder="First Name*" 
                                                name="firstName" 
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                            />
                                        </Col>
                                        <Col lg={6}>
                                            <input 
                                                type="text" 
                                                placeholder="Last Name*" 
                                                name="lastName" 
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <div style={{ marginBottom: emailError ? '5px' : '20px' }}>
                                                <input 
                                                    type="email" 
                                                    placeholder="Email Address*" 
                                                    name="email" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    disabled={isSubmitting}
                                                    style={{ marginBottom: '0' }}
                                                />
                                                {emailError && (
                                                    <div className="text-danger" style={{ fontSize: '13px', marginTop: '5px', marginBottom: '15px' }} role="alert">
                                                        {emailError}
                                                    </div>
                                                )}
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <input 
                                                type="tel" 
                                                placeholder="Phone Number*" 
                                                name="phoneNumber" 
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <input 
                                                type="text" 
                                                placeholder="Subject*" 
                                                name="subject" 
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                                                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '16px', fontWeight: '500', color: '#333' }}>
                                                    <input 
                                                        type="checkbox" 
                                                        name="willingToDonate" 
                                                        checked={formData.willingToDonate}
                                                        onChange={handleInputChange}
                                                        disabled={isSubmitting}
                                                        style={{ marginRight: '10px', transform: 'scale(1.2)' }}
                                                    />
                                                    Willing to Donate
                                                </label>
                                                <small style={{ color: '#666', marginLeft: '30px', display: 'block', marginTop: '5px' }}>
                                                    Check this box if you're interested in making a donation to support our cause.
                                                </small>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <textarea 
                                                name="message" 
                                                placeholder="Message*" 
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                disabled={isSubmitting}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <div className="btn-area">
                                                <button 
                                                    type="submit" 
                                                    className="header-btn1 px-4 py-3"
                          disabled={isSubmitting || !!emailError}
                          style={{ opacity: (isSubmitting || !!emailError) ? 0.7 : 1 }}
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Send Message '} 
                                                    <span className="arrow-icon"><FaArrowRight /></span>
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </section>;
};
export default Contact;