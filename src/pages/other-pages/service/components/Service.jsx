import { useState, useEffect } from 'react';
import { servicesAPI } from '@/utils/api';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await servicesAPI.getServices();
        
        if (response.success && response.services) {
          setServices(response.services);
        } else if (response.success && response.data) {
          setServices(response.data);
        } else if (Array.isArray(response)) {
          setServices(response);
        } else {
          console.warn('Unexpected services response format:', response);
          setServices([]);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="vl-services2 service-inner-page sp2">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading services...</span>
                </div>
                <p className="mt-3 text-muted">Loading our services...</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className="vl-services2 service-inner-page sp2">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="py-5">
                <h4 className="text-muted">No services available at the moment</h4>
                <p>Please check back later for our latest services.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="vl-services2 service-inner-page sp2">
      <Container>
        <Row>
          {services.map((service, idx) => (
            <Col lg={4} md={6} key={service._id || idx}>
              <div 
                className={`vl-single-service-box mb-30 ${hoveredIndex === idx ? 'active' : ''}`} 
                onMouseEnter={() => setHoveredIndex(idx)} 
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="vl-service-box-flex">
                  <div className="icon">
                    <span>
                      {service.icon ? (
                        <img src={service.icon} alt={`${service.title} icon`} />
                      ) : (
                        <div className="default-icon">🛠️</div>
                      )}
                    </span>
                  </div>
                  <div className="thumb">
                    <div className="sm-thumb">
                      <img 
                        src={service.image || service.thumbnail || 'https://via.placeholder.com/150x150'} 
                        alt={service.title} 
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150x150?text=Service';
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="vl-service-box-content">
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {service.title}
                    </a>
                  </h4>
                  <p>
                    {service.shortDescription || service.description || 'Service description not available'}
                  </p>
                  <a 
                    href="#" 
                    className="read-more"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read More <span><FaArrowRight /></span>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;