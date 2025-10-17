import { Link } from "react-router";
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FaArrowRight } from 'react-icons/fa6';
const Counter = () => {
  const countData = [{
    count: 12,
    title: 'Years of Fundation'
  }, {
    count: 69,
    title: 'Monthly Donate'
  }, {
    count: 3,
    title: 'Global Partners'
  }, {
    count: 93,
    title: 'Project Complete'
  }];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return <section className="vl-counter5 counter-iner sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-counter-content mb-30">
                            <div className="vl-section-title-1">
                                <h5 className="subtitle">Company Statistics</h5>
                                <h2 className="title">Highest Ambition is <br /> to Help People</h2>
                                <p className="para pb-32">Our impact is reflected in the numbers—and
                                    each <br /> statistic represents lives changed and futures <br /> improved over the
                                    past year alone.</p>
                                <div className="btn-area">
                                    <Link to="/pages/contact" className="header-btn1">Contact Us <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className=" mb-10">
                        <Row>
                            {countData.map((item, idx) => <Col lg={6} md={6} key={idx}>
                                        <div className={`single-counter-box counter-box-2  ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                            <h3 className="title"><CountUp className="title counter" duration={1} start={0} end={item.count} />+</h3>
                                            <span className="pt-20">{item.title}</span>
                                        </div>
                                    </Col>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Counter;