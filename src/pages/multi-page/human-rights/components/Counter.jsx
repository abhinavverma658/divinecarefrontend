import { useState } from 'react';
import downShape2 from '@/assets/img/icons/vl-counter-down-shape-5.2.svg';
import topShape1 from '@/assets/img/icons/vl-counter-top-shape-5.1.svg';
import counterShape1 from '@/assets/img/icons/vl-counter-shape-5.1.svg';
import counterShape5 from '@/assets/img/shape/vl-counter-shape5.png';
import CountUp from 'react-countup';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
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
  return <section className="vl-counter5 sp2">
            <div className="shape shape-1"><img src={counterShape5} alt='counterShape5' /></div>
            <div className="shape shape-2"><img src={counterShape1} alt='counterShape1' /></div>
            <div className="shape shape-3"><img src={topShape1} alt='topShape1' /></div>
            <div className="shape shape-4"><img src={downShape2} alt='downShape2' /></div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-counter-content mb-30">
                            <div className="vl-section-title5">
                                <h5 className="subtitle" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>Company Statistics</h5>
                                <h2 className="title text-anime-style-3">Highest Ambition is <br /> to Help People</h2>
                                <p className="para" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>Our impact is reflected in the numbers—and each <br /> statistic
                                    represents lives changed and futures <br /> improved over the past year alone.</p>
                                <div className="btn5" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                    <Link to="/pages/contact" className="btn-priamry1">Donate Now <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className="mb-10" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                        <Row>
                            {countData.map((item, idx) => <Col lg={6} md={6} key={idx}>
                                        <div className={`single-counter-box ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
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