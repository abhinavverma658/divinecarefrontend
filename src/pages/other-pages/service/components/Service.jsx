import { useState, useEffect } from 'react';
import { serviceData } from '../data';
import { FaArrowRight } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { servicesAPI } from '@/utils/servicesApi';
import { getImageUrl } from '@/utils/imageUtils';
const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to get fallback icon and thumbnail from static data
  const getFallbackAssets = (index) => {
    const fallbackIndex = index % serviceData.length;
    return {
      icon: serviceData[fallbackIndex]?.icon,
      thumbnail: serviceData[fallbackIndex]?.thumbnail
    };
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await servicesAPI.getServices();
        
        if (response.success && response.services) {
          // Map API data without fallback assets
          const mappedServices = response.services.map((service, index) => {
            const fallbackAssets = getFallbackAssets(index);
            return {
              ...service,
              icon: fallbackAssets.icon, // Keep fallback icon
              thumbnail: null, // No fallback thumbnail
              description: service.shortDescription || service.detailedDescription || 'Service description not available'
            };
          });
          setServices(mappedServices);
        } else {
          throw new Error('Failed to load services');
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err.message);
        // Use static data as fallback
        setServices(serviceData);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return <section className="vl-services2 service-inner-page sp2">
            <Container>
                {loading ? (
                    <Row>
                        <Col lg={12}>
                            <div className="text-center py-5">
                                <div role="status">
                                </div>
                            </div>
                        </Col>
                    </Row>
                ) : error ? (
                    <Row>
                        <Col lg={12}>
                            <div className="alert alert-warning text-center">
                                <p>Unable to load services. Showing cached data.</p>
                                <p><small>{error}</small></p>
                            </div>
                        </Col>
                    </Row>
                ) : null}
                
                <Row>
                    {services.map((item, idx) => <Col lg={4} md={6} key={item._id || idx} className="mb-4">
                                <div className={`vl-single-service-box ${hoveredIndex === idx ? 'active' : ''}`} 
                                    onMouseEnter={() => setHoveredIndex(idx)} 
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        height: '100%',
                                        minHeight: '200px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: '20px'
                                    }}>
                                    <div className="vl-service-box-flex">
                                        <div className="icon">
                                            {item.icon ? (
                                                <span><img src={item.icon} alt='icons' /></span>
                                            ) : (
                                                <span style={{
                                                    display: 'block',
                                                    width: '60px',
                                                    height: '60px',
                                                    background: '#f0f0f0',
                                                    borderRadius: '50%'
                                                }}></span>
                                            )}
                                        </div>
                                        <div className="thumb">
                                            <div className="sm-thumb" style={{
                                                width: '100%',
                                                height: '100px',
                                                overflow: 'hidden',
                                                borderRadius: '8px',
                                                background: '#f5f5f5'
                                            }}>
                                                {(item.image1 || item.image || item.thumbnail) ? (
                                                    <img 
                                                        src={getImageUrl(item.image1 || item.image || item.thumbnail)} 
                                                        alt={item.title || 'Service'} 
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            display: 'block',
                                                            borderBottomLeftRadius: '8px',
                                                            borderBottomRightRadius: '8px'
                                                        }}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#999',
                                                        fontSize: '14px'
                                                    }}>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vl-service-box-content" style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <h4 className="title"><a href="#">{item.title}</a></h4>
                                        <p style={{
                                            flex: 1,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            marginBottom: '1rem'
                                        }}>{item.description}</p>
                                        <Link to={`/service-single/${item._id}`} className="read-more">Read More <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Service;