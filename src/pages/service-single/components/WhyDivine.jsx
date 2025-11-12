import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

  // Custom SVG phone icon component
  const PhoneIcon = () => (
    <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.3498 37.1743C46.7248 36.5493 46.051 36.0708 45.3283 35.7388C44.6057 35.4067 43.8537 35.2407 43.0725 35.2407C42.2912 35.2407 41.5393 35.4067 40.8166 35.7388C40.094 36.0708 39.4006 36.5493 38.7365 37.1743L34.7522 41.1587C34.5959 41.0806 34.4299 41.0024 34.2541 40.9243C34.0783 40.8462 33.9123 40.7485 33.7561 40.6313C33.5607 40.5532 33.3557 40.4556 33.1408 40.3384C32.926 40.2212 32.7209 40.104 32.5256 39.9868C30.6506 38.8149 28.8537 37.438 27.135 35.856C25.4162 34.2739 23.7365 32.4868 22.0959 30.4946C21.3147 29.479 20.6506 28.5415 20.1037 27.6821C19.5568 26.8228 19.0881 25.9634 18.6975 25.104C19.2053 24.6353 19.7033 24.1567 20.1916 23.6685C20.6799 23.1802 21.1584 22.7017 21.6272 22.2329C21.7834 22.0376 21.9592 21.8521 22.1545 21.6763C22.3498 21.5005 22.5256 21.3149 22.6818 21.1196C24.01 19.7915 24.674 18.3364 24.674 16.7544C24.674 15.1724 24.01 13.7173 22.6818 12.3892L19.2248 8.93213C19.0295 8.73682 18.8342 8.53174 18.6389 8.31689C18.4436 8.10205 18.2482 7.89697 18.0529 7.70166C17.6623 7.31104 17.2717 6.92041 16.8811 6.52979C16.4904 6.13916 16.0998 5.74854 15.7092 5.35791C15.0842 4.73291 14.4104 4.26416 13.6877 3.95166C12.965 3.63916 12.2131 3.48291 11.4318 3.48291C10.6506 3.48291 9.89864 3.63916 9.17598 3.95166C8.45333 4.26416 7.7795 4.73291 7.1545 5.35791C7.1545 5.35791 7.13497 5.35791 7.09591 5.35791L2.81856 9.75244C1.99825 10.5337 1.36348 11.4224 0.914265 12.4185C0.465046 13.4146 0.181843 14.479 0.0646552 15.6118C-0.0915948 17.4478 0.0353583 19.186 0.445515 20.8267C0.855671 22.4673 1.27559 23.854 1.70528 24.9868C2.72091 27.7603 4.01973 30.4653 5.60176 33.1021C7.1838 35.7388 9.10762 38.4243 11.3732 41.1587C12.7795 42.8384 14.2443 44.4009 15.7678 45.8462C17.2912 47.3306 18.883 48.7271 20.5432 50.0356C22.2033 51.3442 23.9123 52.5454 25.6701 53.6392C27.467 54.772 29.3225 55.7876 31.2365 56.686C32.6818 57.3892 34.3518 58.0825 36.2463 58.7661C38.1408 59.4497 40.1818 59.8696 42.3693 60.0259C42.4865 60.0259 42.6135 60.0259 42.7502 60.0259C42.8869 60.0259 43.0334 60.0259 43.1897 60.0259C44.635 60.0259 45.9729 59.7622 47.2033 59.2349C48.4338 58.7075 49.5178 57.9165 50.4553 56.8618C50.4943 56.8618 50.5139 56.8618 50.5139 56.8618C50.5139 56.8618 50.5139 56.8423 50.5139 56.8032C50.8654 56.4126 51.2268 56.0317 51.5979 55.6606C51.969 55.2896 52.3498 54.9087 52.7404 54.5181C53.0139 54.2837 53.2873 54.0298 53.5607 53.7563C53.8342 53.4829 54.1076 53.1899 54.3811 52.8774C55.0061 52.2524 55.4846 51.5688 55.8166 50.8267C56.1486 50.0845 56.3147 49.3228 56.3147 48.5415C56.3147 47.7603 56.1486 46.9985 55.8166 46.2563C55.4846 45.5142 54.9865 44.811 54.3225 44.147L47.3498 37.1743ZM51.9201 50.5337C51.6467 50.8071 51.383 51.061 51.1291 51.2954C50.8752 51.5298 50.6115 51.7837 50.3381 52.0571C49.9475 52.4478 49.5373 52.8579 49.1076 53.2876C48.6779 53.7173 48.2678 54.147 47.8772 54.5767C47.2522 55.2798 46.549 55.7974 45.7678 56.1294C44.9865 56.4614 44.1076 56.6274 43.1311 56.6274C43.0529 56.6274 42.965 56.6274 42.8674 56.6274C42.7697 56.6274 42.6623 56.6274 42.5451 56.6274C40.6701 56.4712 38.883 56.0903 37.1838 55.4849C35.4846 54.8794 33.9904 54.2642 32.7014 53.6392C30.9045 52.7798 29.1662 51.8228 27.4865 50.7681C25.8068 49.7134 24.1857 48.5806 22.6232 47.3696C21.0607 46.1587 19.5568 44.8501 18.1115 43.4438C16.6662 42.0376 15.299 40.5532 14.01 38.9907C11.8615 36.3735 10.0451 33.8345 8.56075 31.3735C7.07637 28.9126 5.8459 26.3931 4.86934 23.8149C4.28341 22.2524 3.88301 20.8267 3.66817 19.5376C3.45333 18.2485 3.38497 17.0376 3.46309 15.9048C3.54122 15.1626 3.717 14.479 3.99044 13.854C4.26387 13.229 4.67403 12.6626 5.22091 12.1548L9.49825 7.81885C9.81075 7.50635 10.133 7.28174 10.465 7.14502C10.7971 7.0083 11.1193 6.93994 11.4318 6.93994C11.8225 6.93994 12.1838 7.0376 12.5158 7.23291C12.8479 7.42822 13.1115 7.62354 13.3068 7.81885C13.6975 8.20947 14.0783 8.59033 14.4494 8.96143C14.8205 9.33252 15.2014 9.71338 15.592 10.104C15.7873 10.2993 15.9924 10.5044 16.2072 10.7192C16.4221 10.9341 16.6272 11.1392 16.8225 11.3345L20.2795 14.7915C20.9436 15.4556 21.2756 16.1099 21.2756 16.7544C21.2756 17.3989 20.9436 18.0532 20.2795 18.7173C20.0842 18.9126 19.8986 19.0981 19.7229 19.2739C19.5471 19.4497 19.3615 19.6353 19.1662 19.8306C18.6584 20.3774 18.1408 20.9048 17.6135 21.4126C17.0861 21.9204 16.549 22.4087 16.0022 22.8774C16.0022 22.9165 15.9924 22.936 15.9729 22.936C15.9533 22.936 15.9436 22.936 15.9436 22.936C15.3967 23.4829 15.1232 24.0103 15.1232 24.5181C15.1232 25.0259 15.1818 25.4556 15.299 25.8071C15.299 25.8462 15.299 25.8755 15.299 25.895C15.299 25.9146 15.3186 25.9243 15.3576 25.9243C15.7873 27.0181 16.3342 28.1021 16.9982 29.1763C17.6623 30.2505 18.4631 31.3931 19.4006 32.604H19.4592C21.1779 34.7524 22.9748 36.6763 24.8498 38.3755C26.7248 40.0747 28.6779 41.5688 30.7092 42.8579C30.9436 43.0142 31.1975 43.1606 31.4709 43.2974C31.7443 43.4341 31.9982 43.561 32.2326 43.6782C32.467 43.7954 32.6916 43.9126 32.9065 44.0298C33.1213 44.147 33.3264 44.2642 33.5217 44.3813C33.5217 44.3813 33.5412 44.3911 33.5803 44.4106C33.6193 44.4302 33.6389 44.4399 33.6389 44.4399C33.8732 44.5571 34.0881 44.645 34.2834 44.7036C34.4787 44.7622 34.6936 44.7915 34.9279 44.7915C35.4357 44.7915 35.8557 44.6743 36.1877 44.4399C36.5197 44.2056 36.7248 44.0298 36.8029 43.9126L41.1389 39.5767C41.3732 39.3423 41.6565 39.1274 41.9885 38.9321C42.3205 38.7368 42.6818 38.6392 43.0725 38.6392C43.4631 38.6392 43.8147 38.7368 44.1272 38.9321C44.4397 39.1274 44.6936 39.3228 44.8889 39.5181C44.8889 39.5571 44.8889 39.5767 44.8889 39.5767C44.8889 39.5767 44.9084 39.5767 44.9475 39.5767L51.9201 46.5493C52.5451 47.2134 52.8576 47.8774 52.8576 48.5415C52.8576 49.2056 52.5451 49.8696 51.9201 50.5337ZM32.3498 14.2642C34.0295 14.5767 35.6115 15.1138 37.0959 15.8755C38.5803 16.6372 39.9279 17.6235 41.1389 18.8345C42.3107 20.0454 43.2873 21.3931 44.0686 22.8774C44.8498 24.3618 45.3772 25.9243 45.6506 27.5649C45.7287 27.9946 45.924 28.3364 46.2365 28.5903C46.549 28.8442 46.9201 28.9712 47.3498 28.9712C47.3889 28.9712 47.4279 28.9712 47.467 28.9712C47.5061 28.9712 47.5647 28.9712 47.6428 28.9712C48.1115 28.8931 48.4826 28.6587 48.7561 28.2681C49.0295 27.8774 49.1272 27.4478 49.049 26.979C48.6975 24.9868 48.0529 23.0923 47.1154 21.2954C46.1779 19.4985 44.9865 17.8774 43.5412 16.4321C42.0959 14.9868 40.4748 13.7954 38.6779 12.8579C36.8811 11.9204 34.9865 11.2759 32.9943 10.9243C32.5256 10.8462 32.0959 10.9438 31.7053 11.2173C31.3147 11.4907 31.0803 11.8618 31.0022 12.3306C30.924 12.7603 31.0119 13.1704 31.2658 13.561C31.5197 13.9517 31.8811 14.186 32.3498 14.2642ZM59.8889 26.5103C59.6154 24.8306 59.2053 23.2095 58.6584 21.647C58.1506 20.0845 57.5158 18.5708 56.7541 17.106C55.9924 15.6411 55.1232 14.2251 54.1467 12.8579C53.1311 11.5298 52.0373 10.2603 50.8654 9.04932C49.6545 7.87744 48.385 6.80322 47.0568 5.82666C45.6897 4.81104 44.2736 3.93213 42.8088 3.18994C41.344 2.44775 39.8303 1.80322 38.2678 1.25635C36.7053 0.748535 35.1037 0.338379 33.4631 0.0258789C32.9943 -0.0522461 32.5647 0.0454102 32.174 0.318848C31.7834 0.592285 31.549 0.963379 31.4709 1.43213C31.3928 1.90088 31.4904 2.33057 31.7639 2.72119C32.0373 3.11182 32.4084 3.34619 32.8772 3.42432C35.8459 3.93213 38.6486 4.86963 41.2854 6.23682C43.9221 7.604 46.3147 9.36182 48.4631 11.5103C50.6115 13.6196 52.3693 16.0024 53.7365 18.6587C55.1037 21.3149 56.0217 24.1079 56.4904 27.0376C56.5686 27.4673 56.7736 27.8091 57.1057 28.063C57.4377 28.3169 57.799 28.4438 58.1897 28.4438C58.2678 28.4438 58.3264 28.4438 58.3654 28.4438C58.4045 28.4438 58.4436 28.4438 58.4826 28.4438C58.9514 28.3657 59.3225 28.1313 59.5959 27.7407C59.8693 27.3501 59.967 26.9399 59.8889 26.5103Z" fill="white"/>
    </svg>
  );

  // Fetch all services for sidebar
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoadingServices(true);
        const API_BASE_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_BASE_URL}/services`);
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
        const API_BASE_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_BASE_URL}/services/${serviceId}`);
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
    
    // Extract bullet points (li elements) with HTML formatting preserved
    const bullets = Array.from(tempDiv.querySelectorAll('li')).map(li => li.innerHTML.trim());
    
    // Get text without bullet points but preserve HTML formatting
    const listElements = tempDiv.querySelectorAll('ul, ol');
    listElements.forEach(list => list.remove());
    const text = tempDiv.innerHTML.trim();
    
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
                  <h4 className="widget-title" style={{ color: 'black', fontWeight: 700 }}>The Services We Provide</h4>
                </div>
                <div className="vl-widget-content">
                  {loadingServices ? (
                    <div className="py-3">
                      {[...Array(5)].map((_, idx) => (
                        <Skeleton key={idx} height={20} style={{ marginBottom: '15px' }} />
                      ))}
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
                <div className="vl-contact-info" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <PhoneIcon />
                  </div>
                  <div className="content" style={{ flex: 1 , textAlign: 'left' }}>
                    <h3>Always Here for Your Safety</h3>
                    <h3>24/7 Contact Us</h3>
                    <a href="tel:301-281-2285" style={{ textDecoration: 'none' }}>
                      <p style={{ color: '#fff', margin: 0 }}>301-281-2285</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="vl-service-details">
              {loadingDetail ? (
                <div className="vl-service-content">
                  <Skeleton height={400} style={{ marginBottom: '30px', borderRadius: '8px' }} />
                  <Skeleton height={40} width="70%" style={{ marginBottom: '20px' }} />
                  <Skeleton count={3} style={{ marginBottom: '10px' }} />
                  <Skeleton height={30} width="40%" style={{ marginTop: '30px', marginBottom: '20px' }} />
                  {[...Array(4)].map((_, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                      <Skeleton circle width={22} height={22} />
                      <Skeleton height={20} style={{ flex: 1 }} />
                    </div>
                  ))}
                </div>
              ) : serviceDetail ? (
                <div className="vl-service-content">
                  {/* Service Image */}
                  {serviceDetail.image && (
                    <div className="vl-service-image mb-4">
                      <img 
                        src={getImageUrl(serviceDetail.image)} 
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
                              <p className="para mb-0" dangerouslySetInnerHTML={{ __html: bullet }} />
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