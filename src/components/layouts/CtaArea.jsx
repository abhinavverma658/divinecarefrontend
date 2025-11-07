import ctaImg1 from '@/assets/img/cta/Subscribe.jpg';
import arrowImg from '@/assets/img/shape/vl-arow-shap-1.1.png';
import shapeImg1 from '@/assets/img/shape/vl-cta-1.1.png';
import shapeImg2 from '@/assets/img/shape/vl-cta-1.2.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

const CtaArea = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Validate email format
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!email.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your email address.' });
      return;
    }

    if (emailError) {
      setSubmitStatus({ type: 'error', message: emailError });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://divinecare-backend.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message || 'Thank you for subscribing! Check your email for confirmation.' 
        });
        setEmail('');
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || result.error || 'Failed to subscribe. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="vl-cta">
            <Container>
                <div className="vl-cta-bg" style={{
        backgroundImage: `url(${ctaImg1})`
      }}>
                    <div className="vl-cta-shap dot-shap">
                        <img src={arrowImg} alt='arrowImg' />
                    </div>
                    <div className="vl-cta-shap shap-1"><img src={shapeImg1} alt='shapeImg1' /></div>
                    <div className="vl-cta-shap shap-2"><img src={shapeImg2} alt='shapeImg2' /></div>
                    <Row>
                        <Col lg={12}>
                            <div className="vl-cta-content text-center">
                                <h2 className="title">Your Care Can Transform Lives</h2>
                                <p>Every act of kindness, no matter how small, brings hope and strength to individuals in need of support.< br/> Together, we can make a lasting difference.</p>
                                
                                {submitStatus && (
                                    <div 
                                        className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} 
                                        style={{ 
                                            marginBottom: '20px', 
                                            padding: '12px 20px', 
                                            borderRadius: '5px', 
                                            backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da', 
                                            color: submitStatus.type === 'success' ? '#155724' : '#721c24', 
                                            border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                                            maxWidth: '600px',
                                            margin: '0 auto 20px'
                                        }}
                                    >
                                        {submitStatus.message}
                                    </div>
                                )}

                                <div className="vl-cta-form text-center mx-auto">
                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <input 
                                                type="email" 
                                                placeholder="Enter Your Email.." 
                                                value={email}
                                                onChange={handleEmailChange}
                                                disabled={isSubmitting}
                                                style={{ marginBottom: emailError ? '5px' : '0' }}
                                            />
                                            {emailError && (
                                                <div 
                                                    className="text-danger" 
                                                    style={{ 
                                                        fontSize: '13px', 
                                                        marginTop: '5px', 
                                                        marginBottom: '10px',
                                                        textAlign: 'left'
                                                    }}
                                                >
                                                    {emailError}
                                                </div>
                                            )}
                                        </div>
                                        <div className="btn-area vl-cta-btn1">
                                            <button 
                                                type="submit" 
                                                className="header-btn1"
                                                disabled={isSubmitting || !!emailError}
                                                style={{ opacity: (isSubmitting || !!emailError) ? 0.7 : 1 }}
                                            >
                                                {isSubmitting ? 'Subscribing...' : 'Subscribe'} <span><FaArrowRight /></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>;
};
export default CtaArea;