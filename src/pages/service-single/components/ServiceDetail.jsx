import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { servicesAPI } from '@/utils/servicesApi';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      if (serviceId) {
        try {
          setLoading(true);
          const response = await servicesAPI.getSingleService(serviceId);
          if (response.success && response.service) {
            setService(response.service);
          } else {
            throw new Error('Service not found');
          }
        } catch (err) {
          console.error('Error fetching service:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setError('No service ID provided');
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  if (loading) {
    return (
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading service details...</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (error || !service) {
    return (
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="alert alert-warning">
                <h4>Service Not Found</h4>
                <p>The requested service could not be found.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  const services = [
    "Community Living",
    "Community Development Services", 
    "Personal Supports",
    "Supported Living",
    "Respite"
  ];

  return (
    <section className="vl-service-single vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="vl-widget-area">
              <div className="vl-search-widget mb-30">
                <h3 className="title">The Services We Provide</h3>
                {services.map((serviceItem, idx) => (
                  <div key={idx} className="vl-single-service">
                    <a href="#" className={service?.title === serviceItem ? 'active' : ''}>
                      {serviceItem}
                    </a>
                    <span><i className="fa fa-arrow-right"></i></span>
                  </div>
                ))}
              </div>
              
              <div className="vl-phone-widget mb-30">
                <h3 className="title">Always Here for Your Safety<br />24/7 Contact Us</h3>
                <a href="tel:+12344685" className="phone">
                  <span><i className="fa fa-phone"></i></span>
                  +1 234 468 85
                </a>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="vl-service-details">
              <div className="vl-service-content">
                {service.image && (
                  <div className="vl-service-image mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-100 img-fluid"
                    />
                  </div>
                )}
                
                <h2 className="title">{service.title}</h2>
                
                {service.shortDescription && (
                  <div className="service-short-description mb-4">
                    <p className="para">{service.shortDescription}</p>
                  </div>
                )}
                
                {service.detailedDescription && (
                  <div className="service-detailed-description">
                    <div dangerouslySetInnerHTML={{ __html: service.detailedDescription }} />
                  </div>
                )}
                
                {(!service.detailedDescription && service.shortDescription) && (
                  <div className="service-description">
                    <p className="para">{service.shortDescription}</p>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetail;