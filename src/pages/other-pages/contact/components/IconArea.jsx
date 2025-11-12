import { Fragment, useState, useEffect } from 'react';
import { iconsBoxData } from '../data';
import { contactPageAPI } from '@/utils/contactPageApi';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const IconArea = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [contactPageData, setContactPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (loading) {
    return (
      <section className="vl-icon-box-inner pb-70">
        <Container>
          <Row>
            {[...Array(3)].map((_, idx) => (
              <Col lg={4} md={6} className="mb-30" key={idx}>
                <div className="iconbox" style={{ padding: '30px', border: '1px solid #e9ecef', borderRadius: '8px' }}>
                  <div className="icon-box-flex" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                    <div className="icon">
                      <Skeleton circle width={60} height={60} />
                    </div>
                    <div className="icon-content" style={{ flex: 1 }}>
                      <Skeleton height={18} width="60%" style={{ marginBottom: '8px' }} />
                      <Skeleton height={24} width="90%" />
                    </div>
                  </div>
                  <div className="contact-number">
                    <Skeleton height={20} width="80%" style={{ marginBottom: '8px' }} />
                    <Skeleton height={20} width="70%" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  }

  // Create dynamic data array from API response or use fallback
  const dynamicIconsData = contactPageData ? [
    {
      icon: iconsBoxData[0]?.icon || '/default-phone-icon.png',
      description: contactPageData.callUs?.serviceTitle || '24/7 Service',
      title: contactPageData.callUs?.serviceSubtitle || 'Call Us Today',
      contacts: [
        contactPageData.callUs?.phoneNumber1 || '+00 123 456 789',
        contactPageData.callUs?.phoneNumber2
      ].filter(Boolean)
    },
    {
      icon: iconsBoxData[1]?.icon || '/default-email-icon.png',
      description: contactPageData.mailInfo?.emailTitle || 'Drop Line',
      title: contactPageData.mailInfo?.emailSubtitle || 'Mail Information',
      contacts: [
        contactPageData.mailInfo?.emailAddress1 || 'info@charity.com',
        contactPageData.mailInfo?.emailAddress2
      ].filter(Boolean)
    },
    {
      icon: iconsBoxData[2]?.icon || '/default-location-icon.png',
      description: contactPageData.location?.addressTitle || 'Address',
      title: contactPageData.location?.addressSubtitle || 'Our Location',
      contacts: [
        contactPageData.location?.fullAddress || '123 Main Street, City, Country'
      ].filter(Boolean)
    }
  ] : iconsBoxData;

  return <section className="vl-icon-box-inner pb-70">
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
                <Row>
                    {dynamicIconsData.map((item, idx) => <Col lg={4} md={6} className="mb-30" key={idx}>
                                <div className={`iconbox ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="icon-box-flex">
                                        <div className="icon">
                                            <span><img src={item.icon} alt='icon' /></span>
                                        </div>
                                        <div className="icon-content">
                                            <p className="para">{item.description}</p>
                                            <h3 className="title">{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="contact-number">
                                        {item?.contacts && item?.contacts?.map((contact, contactIdx) => <Fragment key={contactIdx}>
                                                    <Link 
                                                        to={idx === 0 ? `tel:${contact}` : idx === 1 ? `mailto:${contact}` : "https://maps.app.goo.gl/vqXXVx3BxKkHhnBd6"} 
                                                        className="para"
                                                        target={idx === 2 ? "_blank" : undefined}
                                                        rel={idx === 2 ? "noopener noreferrer" : undefined}
                                                    >
                                                        {contact}
                                                    </Link> <br />
                                                </Fragment>)}
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default IconArea;