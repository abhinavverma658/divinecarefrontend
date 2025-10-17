import { causesData } from '../data';
import clauseShapeImg from '@/assets/img/icons/vl-clause-shape-4.1.svg';
import handShape4Img from '@/assets/img/shape/hand-shape4.1.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Cause = () => {
  return <section id="cause" className="vl-causes-area vl-causes-area-4 sp2">
            <div className="shape"><img src={clauseShapeImg} alt='clauseShapeImg' /></div>
            <div className="shapedown"><img src={handShape4Img} alt='handShape4Img' /></div>
            <Container>
                <Row>
                    <Col lg={5} className="mx-auto">
                        <div className="vl-section-title4 mb-60 text-center">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Causes</h5>
                            <h2 className="title text-anime-style-3">Our Latest Causes</h2>
                            <p className="para" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Long-term recovery requires sustainable livelihoods. <br /> We
                                support individuals &amp; families in rebuilding.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {causesData.map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className="vl-single-cause-box mb-30" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                                    <div className="vl-cause-thumb">
                                        <img className="w-100" src={item.image} alt='cause' />
                                        <div className="btn-area casue-btn text-center">
                                            <Link to="/cause-single" className="header-btn1">Donation <span><FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                    <div className="vl-progress">
                                        <div className="skill-progress">
                                            <div className="skill-box">
                                                <div className="skill-bar">
                          <span className="skill-per html">
                            <span className="tooltipp">{item.progress}%</span>
                          </span>
                                                </div>
                                                <div className="skill-vlue">
                                                    <div className="num1"><span>Raised: </span>${item.raised}</div>
                                                    <div className="num1"><span>Goal: </span>${item.goal}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vl-cause-content">
                                        <a href="#" className="badge">Disasters</a>
                                        <h3 className="title"><Link to="/cause-single">{item.title}</Link></h3>
                                        <p className="para">{item.description}</p>
                                    </div>
                                </div>
                            </Col>)}

                </Row>
            </Container>
        </section>;
};
export default Cause;