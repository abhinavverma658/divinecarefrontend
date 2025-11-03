import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import serviceImg from '@/assets/img/breadcrumb/vl-service-bradcrumb.png';
import shapeImg1 from '@/assets/img/breadcrumb/breadcrumb-shape-1.1.png';
import shapeImg2 from '@/assets/img/breadcrumb/breadcrumb-shape-1.2.png';
import shapeImg3 from '@/assets/img/breadcrumb/breadcrumb-shape-1.3.png';
import { FaAngleRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import { servicesAPI } from '@/utils/servicesApi';

const Hero = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      if (serviceId) {
        try {
          const response = await servicesAPI.getSingleService(serviceId);
          if (response.success && response.service) {
            setService(response.service);
          }
        } catch (error) {
          console.error('Error fetching service:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  return (
    <section className="vl-breadcrumb" style={{
      backgroundImage: `url(${serviceImg})`
    }}>
      <div className="shape1"><img src={shapeImg1} alt='shapeImg1' /></div>
      <div className="shape2"><img src={shapeImg2} alt='shapeImg2' /></div>
      <div className="shape2"><img src={shapeImg3} alt='shapeImg3' /></div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="vl-breadcrumb-title">
              <h2 className="heading">
                {loading ? 'Loading...' : service?.title || 'Service Details'}
              </h2>
              <div className="vl-breadcrumb-list">
                <span><Link to="/">Home</Link></span>
                <span className="dvir"><FaAngleRight className="fa-solid fa-angle-right" /></span>
                <span><Link to="/pages/service">Our Services</Link></span>
                <span className="dvir"><FaAngleRight className="fa-solid fa-angle-right" /></span>
                <span><a className="active" href="#">{service?.title || 'Service'}</a></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;