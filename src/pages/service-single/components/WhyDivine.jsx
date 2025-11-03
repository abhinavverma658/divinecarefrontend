import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';

const WhyDivine = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [serviceDetail, setServiceDetail] = useState(null);
  const [loadingServices, setLoadingServices] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(true);

  // Custom SVG check icon component
  const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3121 10.6562C21.3121 16.543 16.4996 21.3125 10.6559 21.3125C4.76914 21.3125 -0.000390053 16.543 -0.000390053 10.6562C-0.000390053 4.8125 4.76914 0 10.6559 0C16.4996 0 21.3121 4.8125 21.3121 10.6562ZM9.40977 16.3281L17.316 8.42188C17.5738 8.16406 17.5738 7.69141 17.316 7.43359L16.3277 6.48828C16.0699 6.1875 15.6402 6.1875 15.3824 6.48828L8.93711 12.9336L5.88633 9.92578C5.62852 9.625 5.19883 9.625 4.94102 9.92578L3.95273 10.8711C3.69492 11.1289 3.69492 11.6016 3.95273 11.8594L8.42148 16.3281C8.6793 16.5859 9.15195 16.5859 9.40977 16.3281Z" fill="#315EA2"/>
    </svg>
  );

  // Fetch all services for sidebar
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoadingServices(true);
        const response = await fetch('https://divinecare-backend.onrender.com/api/services');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setServices(data);
        } else if (data.services && Array.isArray(data.services)) {
          setServices(data.services);
        } else {
          // Fallback to default services
          setServices([
            { _id: '1', title: "Community Living" },
            { _id: '2', title: "Community Development Services" },
            { _id: '3', title: "Personal Supports" },
            { _id: '4', title: "Supported Living" },
            { _id: '5', title: "Respite" }
          ]);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to default services on error
        setServices([
          { _id: '1', title: "Community Living" },
          { _id: '2', title: "Community Development Services" },
          { _id: '3', title: "Personal Supports" },
          { _id: '4', title: "Supported Living" },
          { _id: '5', title: "Respite" }
        ]);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  // Fetch service detail based on serviceId
  useEffect(() => {
    const fetchServiceDetail = async () => {
      if (!serviceId) {
        setLoadingDetail(false);
        return;
      }

      try {
        setLoadingDetail(true);
        const response = await fetch(`https://divinecare-backend.onrender.com/api/services/${serviceId}`);
        const data = await response.json();
        
        if (data) {
          setServiceDetail(data);
        }
      } catch (error) {
        console.error('Error fetching service detail:', error);
        setServiceDetail(null);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchServiceDetail();
  }, [serviceId]);

  // Parse HTML content to extract bullet points and other sections
  const parseDetailedDescription = (html) => {
    if (!html) return { text: '', bullets: [] };
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Extract bullet points (li elements)
    const bullets = Array.from(tempDiv.querySelectorAll('li')).map(li => li.textContent.trim());
    
    // Get text without bullet points
    const listElements = tempDiv.querySelectorAll('ul, ol');
    listElements.forEach(list => list.remove());
    const text = tempDiv.textContent.trim();
    
    return { text, bullets };
  };

  const parsedContent = serviceDetail?.detailedDescription 
    ? parseDetailedDescription(serviceDetail.detailedDescription)
    : { text: '', bullets: [] };

  return (
    <section className="vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="vl-sidebar">
              <div className="vl-widget">
                <div className="vl-widget-title">
                  <h4 className="widget-title">The Services We Provide</h4>
                </div>
                <div className="vl-widget-content">
                  {loadingServices ? (
                    <div className="text-center py-3">
                      <div  role="status">
                      </div>
                    </div>
                  ) : (
                    <ul className="vl-service-category">
                      {services.map((service, idx) => (
                        <li key={service._id || idx} className={service._id === serviceId ? 'active' : ''}>
                          <a href={`/service-single/${service._id}`}>
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              <div className="vl-widget vl-contact-widget">
                <div className="vl-contact-info">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <div className="content">
                    <h4>About Here Or Questions?</h4>
                    <h3>24/7 Contact Us</h3>
                    <a href="tel:301-281-2285">
                      <p>301-281-2285</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="vl-service-details">
              {loadingDetail ? (
                <div className="text-center py-5">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading service details...</span>
                  </div>
                  <p className="mt-3">Loading service details...</p>
                </div>
              ) : serviceDetail ? (
                <div className="vl-service-content">
                  {/* Service Image */}
                  {serviceDetail.image && (
                    <div className="vl-service-image mb-4">
                      <img 
                        src={serviceDetail.image} 
                        alt={serviceDetail.title}
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Service Title */}
                  <h2 className="title">{serviceDetail.title}</h2>
                  
                  {/* Short Description */}
                  {serviceDetail.shortDescription && (
                    <p className="para mb-4">
                      {serviceDetail.shortDescription}
                    </p>
                  )}

                  {/* Detailed Description - Text Content */}
                  {parsedContent.text && (
                    <div 
                      className="para mb-4"
                      dangerouslySetInnerHTML={{ __html: parsedContent.text }}
                    />
                  )}

                  {/* Detailed Description - Bullet Points */}
                  {parsedContent.bullets && parsedContent.bullets.length > 0 && (
                    <div className="vl-service-offering">
                      <h3 className="sub-title">Key Features</h3>
                      <div className="vl-offering-list">
                        {parsedContent.bullets.map((bullet, idx) => (
                          <div key={idx} className="vl-single-offering">
                            <div className="icon">
                              <CheckIcon />
                            </div>
                            <div className="content">
                              <p className="para mb-0">{bullet}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-5">
                  <h3>Service not found</h3>
                  <p>The requested service could not be loaded.</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyDivine;