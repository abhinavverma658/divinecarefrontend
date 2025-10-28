import React from 'react';

import aboutThum1 from '@/assets/img/about/vl-about-thum-inner-sm-1.1.png';
import aboutThum2 from '@/assets/img/about/vl-about-thum-inner-sm-1.2.png';
import aboutThum3 from '@/assets/img/about/vl-about-thum-inner-large-1.3.png';
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// Simple error boundary for debugging
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{color: 'red', padding: 20}}>
        <b>Component Error:</b> {this.state.error && this.state.error.toString()}
      </div>;
    }
    return this.props.children;
  }
}
import { aboutAPI } from '@/utils/About/aboutApi';

const AboutUsContent = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const response = await aboutAPI.getMainAbout();
        console.log('About API response:', response);
        if (response && response.success && response.about) {
          setAboutData(response.about);
        } else if (response && response.about) {
          setAboutData(response.about);
        } else {
          setAboutData(null);
        }
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError(err.message);
        setAboutData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <section className="vl-about5 sp2">
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

  if (error || !aboutData) {
    return (
      <section className="vl-about5 sp2">
        <Container>
          <div className="alert alert-warning" role="alert">
            Unable to load about section. Please try again later.<br/>
            <span style={{fontSize: '0.9em', color: '#888'}}>Error: {error || 'No about data returned.'}</span>
          </div>
        </Container>
      </section>
    );
  }

  // Use API data or fallback to default images
  const leftImage1 = aboutData && aboutData.images && aboutData.images[0] ? aboutData.images[0] : aboutThum1;
  const leftImage2 = aboutData && aboutData.images && aboutData.images[1] ? aboutData.images[1] : aboutThum2;
  const rightImage = aboutData && aboutData.images && aboutData.images[2] ? aboutData.images[2] : aboutThum3;

  return <section className="vl-about5 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-about-content">
                            <div className="vl-section-title-1 mb-50">
                                <h5 className="subtitle">About Us</h5>
                                <h2 className="title">{aboutData?.heading || 'About DivineCare'}</h2>
                                <p>{aboutData?.smallDescription || 'Empowering lives through compassion and support.'}</p>
                            </div>
                            <Row>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb mb-30">
                                        <img className="w-100" src={leftImage1} alt='About Image 1' />
                                    </div>
                                </Col>
                                <Col lg={12} md={6}>
                                    <div className="vl-sm-thumb2 mb-30">
                                        <img className="w-100" src={leftImage2} alt='About Image 2' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-about-content2 ml-20">
                            <div className="large-thumb mb-30">
                                <img className="w-100" src={rightImage} alt='About Main Image' />
                            </div>
                            <div className="content mb-30">
                                <p className="para">{aboutData?.mainDescription || 'DivineCare is dedicated to providing relief and resources to those in need, fostering a community of care and hope.'}</p>
                                <div className="icon-list-box box2">
                                    <ul>
                                        {aboutData?.keyPoints && aboutData.keyPoints.length > 0 ? (
                                            aboutData.keyPoints.map((point, index) => (
                                                <li key={index}>
                                                    <span><FaCheck className="fa-solid fa-check" /></span>
                                                    {point}
                                                </li>
                                            ))
                                        ) : (
                                            <>
                                                <li><span><FaCheck className="fa-solid fa-check" /></span>Join Our Mission to Make a Difference</li>
                                                <li><span><FaCheck className="fa-solid fa-check" /></span>Transforming Lives and Communities</li>
                                                <li><span><FaCheck className="fa-solid fa-check" /></span>Standing Up for Human Rights</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
const AboutUs = () => (
  <ErrorBoundary>
    <AboutUsContent />
  </ErrorBoundary>
);
export default AboutUs;