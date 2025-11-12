import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { servicesAPI } from '@/utils/servicesApi';
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
            <Col lg={4}>
              <div className="vl-widget-area">
                <div className="vl-search-widget mb-30" style={{ padding: '30px', background: '#f8f9fa', borderRadius: '10px' }}>
                  <Skeleton height={30} width="80%" style={{ marginBottom: '20px' }} />
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} style={{ marginBottom: '15px' }}>
                      <Skeleton height={20} width="90%" />
                    </div>
                  ))}
                </div>
                <div style={{ padding: '40px', background: 'linear-gradient(135deg, #012372 0%, #315EA2 100%)', borderRadius: '10px' }}>
                  <Skeleton height={25} width="80%" baseColor="#ffffff20" highlightColor="#ffffff40" style={{ marginBottom: '15px' }} />
                  <Skeleton height={40} width="60%" baseColor="#ffffff20" highlightColor="#ffffff40" />
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="vl-service-details">
                <Skeleton height={400} style={{ marginBottom: '30px', borderRadius: '10px' }} />
                <Skeleton height={40} width="70%" style={{ marginBottom: '20px' }} />
                <Skeleton count={5} style={{ marginBottom: '10px' }} />
                <Skeleton height={30} width="50%" style={{ marginTop: '30px', marginBottom: '20px' }} />
                <Skeleton count={3} style={{ marginBottom: '10px' }} />
              </div>
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
                <a href="tel:3012812285" className="phone">
                  <span><i className="fa fa-phone"></i></span>
                  301-281-2285
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
                      src={getImageUrl(service.image)} 
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