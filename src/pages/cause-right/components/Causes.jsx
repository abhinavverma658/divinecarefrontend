import { causesData } from '../../cause/data';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
const Causes = () => {
  return <section className="vl-singlevent-iner pb-50">
            <Container>
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="more-title text-center mb-60">
                            <h2 className="title">More Cause</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {causesData.slice(0, 3).map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className="vl-single-cause-box gray-bg mb-30">
                                    <div className="vl-cause-thumb">
                                        <img className="w-100" src={item.image} alt='img' />
                                        <div className="btn-area casue-btn text-center">
                                            <Link to="/cause-single" className="header-btn1">Donation <span><FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                    <div className="vl-cause-content">
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
                                        <a href="#" className="badge mt-32">Disasters</a>
                                        <h3 className="title"><Link to="/cause-single">{item.title}</Link></h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Causes;