import { causesData } from '../data';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
const Causes = () => {
  return <section className="vl-causes-area-2 sp2">
            <Container>
                <Row>
                    <Col lg={5} className="mx-auto">
                        <div className="vl-section-title-3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Safe &amp; Easy Donations</h4>
                            <h2 className="title text-anime-style-3">Our Latest Causes</h2>
                            <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Long-term recovery
                                requires sustainable livelihoods.<br /> We support individuals &amp; families in
                                rebuilding.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {causesData.map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className="vl-single-cause-box vl-single-cause-box-2 mb-30" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                                    <div className="vl-cause-thumb vl-cause-thumb-2">
                                        <img className="w-100" src={item.image} alt='cause' />
                                        <div className="vl-about-btn">
                                            <Link to="/cause-single" className="btn-primary2">Donate <span><FaArrowRight /></span></Link>
                                        </div>
                                    </div>
                                    <div className="vl-progress">
                                        <div className="skill-progress">
                                            <div className="skill-box">
                                                <div className="skill-bar">
                          <span className="skill-per skill-per-2 html">
                            <span className="tooltipp tooltipp-2">{item.progress}%</span>
                          </span>
                                                </div>
                                                <div className="skill-vlue">
                                                    <div className="num1 num1-2"><span>Raised: </span>${item.raised}
                                                    </div>
                                                    <div className="num1 num1-2"><span>Goal: </span>${item.goal}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vl-cause-content">
                                        <a href="#" className="badge badge-2">Disasters</a>
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