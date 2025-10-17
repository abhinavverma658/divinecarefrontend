import { causesData } from '../data';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Causes = () => {
  return <section className="vl-cause-inner sp2">
            <Container>
                <Row>
                    {causesData.map((item, idx) => <Col lg={4} md={6} key={idx}>
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
                <Row>
                    <Col xs={12} className="m-auto">
                        <div className="theme-pagination text-center mt-18">
                            <ul>
                                <li><a href="#"><FaAngleLeft className="fa-solid fa-angle-left" /></a></li>
                                <li><a className="active" href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li>...</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#"><FaAngleRight className="fa-solid fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Causes;