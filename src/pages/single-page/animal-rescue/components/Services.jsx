import { useState, useEffect } from 'react';
import { servicesAPI } from '@/utils/api';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await servicesAPI.getServices();
        
        if (response.success && response.services) {
          setServices(response.services.slice(0, 4));
        } else if (response.success && response.data) {
          setServices(response.data.slice(0, 4));
        } else if (Array.isArray(response)) {
          setServices(response.slice(0, 4));
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
  return <section className="vl-services2 sp2">
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto">
                        <div className="vl-section-title-3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Our
                                Service</h4>
                            <h2 className="title text-anime-style-3">How We Make a Difference</h2>
                            <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Through our comprehensive services,
                                we're committed to providing <br /> support, care, and lasting solutions for communities in need</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {loading ? (
                        <Col lg={12} className="text-center">
                            <div className="py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading services...</span>
                                </div>
                                <p className="mt-3 text-muted">Loading our services...</p>
                            </div>
                        </Col>
                    ) : services.length === 0 ? (
                        <Col lg={12} className="text-center">
                            <div className="py-5">
                                <h4 className="text-muted">No services available</h4>
                                <p>Please check back later for our latest services.</p>
                            </div>
                        </Col>
                    ) : (
                        services.map((service, idx) => <Col lg={3} md={6} data-aos="zoom-in-up" data-aos-duration={800} data-aos-delay={300 + (idx * 100)} key={service._id || idx}>
                                <div className={`vl-single-service-box mb-30 ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="vl-service-box-flex">
                                        <div className="icon">
                                            <span>
                                                {service.icon ? (
                                                    <img className="icon-1" src={service.icon} alt={`${service.title} icon`} />
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
                                        <h4 className="title"><Link to="/pages/service">{service.title}</Link></h4>
                                        <p>{service.shortDescription || service.description || 'Service description not available'}</p>
                                        <Link to="/pages/service" className="read-more">Read More <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </Col>)
                    )}
                </Row>
            </Container>
        </section>;
};
export default Services;