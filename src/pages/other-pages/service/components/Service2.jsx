import { useState } from 'react';
import { service2Data } from '../data';
import arrowRight from '@/assets/img/icons/vl-service-inner-arrow-right.svg';
import { Col, Container, Row } from 'react-bootstrap';
const Service2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <div className="vl-service-iner-bg sp2">
            <Container>
                <Row>
                    {service2Data.map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className={`single-service-box mb-30 ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)} style={{
            backgroundImage: `url(${item.backgroundImage})`
          }}>
                                    <div className="padding-box">
                                        <div className="icon-box">
                                            <div className="icon">
                                                <span><img src={item.icon} alt='icons' /></span>
                                            </div>
                                            <div className="content">
                                                <a href="#" className="title">Food &amp; Water Charity</a>
                                                <p className="para">Big Hearts the largest crowdfunding community
                                                    connecting nonprofits, <br /> donors, and companies in nearly.</p>
                                            </div>
                                        </div>
                                        <div className="btniner">
                                            <a href="#" className="readmore">Read More <span><img src={arrowRight} alt='arrowRight' /></span></a>
                                        </div>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </div>;
};
export default Service2;