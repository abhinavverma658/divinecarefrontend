import { useState, useEffect } from 'react';
import { serviceData } from '../data';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { servicesAPI } from '@/utils/servicesApi';
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
          // Map API data to include fallback assets since API doesn't provide icons/thumbnails
          const mappedServices = response.services.map((service, index) => {
            const fallbackAssets = getFallbackAssets(index);
            return {
              ...service,
              icon: fallbackAssets.icon,
              thumbnail: fallbackAssets.thumbnail,
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
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading services...</p>
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
                    {services.map((item, idx) => <Col lg={4} md={6} key={item._id || idx}>
                                <div className={`vl-single-service-box mb-30 ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="vl-service-box-flex">
                                        <div className="icon">
                                            <span><img src={item.icon} alt='icons' /></span>
                                        </div>
                                        <div className="thumb">
                                            <div className="sm-thumb">
                                                <img 
                                                    src={item.image || item.thumbnail} 
                                                    alt={item.title || 'Service'} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vl-service-box-content">
                                        <h4 className="title"><a href="#">{item.title}</a></h4>
                                        <p>{item.description}</p>
                                        <a href="#" className="read-more">Read More <span><FaArrowRight /></span></a>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Service;