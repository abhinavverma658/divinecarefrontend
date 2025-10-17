import { Fragment, useState } from 'react';
import { iconsBoxData } from '../data';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const IconArea = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <section className="vl-icon-box-inner pb-70">
            <Container>
                <Row>
                    {iconsBoxData.map((item, idx) => <Col lg={4} md={6} className="mb-30" key={idx}>
                                <div className={`iconbox ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                    <div className="icon-box-flex">
                                        <div className="icon">
                                            <span><img src={item.icon} alt='icon' /></span>
                                        </div>
                                        <div className="icon-content">
                                            <p className="para">{item.description}</p>
                                            <h3 className="title">{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="contact-number">
                                        {item?.contacts && item?.contacts?.map((context, idx) => <Fragment key={idx}>
                                                    <Link to="tel:+00123456789" className="para">{context}</Link> <br />
                                                </Fragment>)}
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default IconArea;