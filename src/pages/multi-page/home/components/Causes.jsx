import cause1 from '@/assets/img/cause/vl-cause-1.1.png';
import cause2 from '@/assets/img/cause/vl-cause-1.2.png';
import cause3 from '@/assets/img/cause/vl-cause-1.3.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
const Causes = () => {
  return <section className="vl-causes-area sp2">
            <Container>
                <div className="vl-causes-section-title text-center">
                    <div className="vl-section-title-1 mb-60">
                        <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Causes</h5>
                        <h2 className="title text-anime-style-3">Our Latest Causes</h2>
                        <p data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>Long-term recovery
                            requires sustainable livelihoods. <br /> We support individuals &amp; families in rebuilding.
                        </p>
                    </div>
                </div>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="vl-single-cause-box mb-30" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="vl-cause-thumb">
                                <img className="w-100" src={cause1} alt='cause1' />
                                <div className="btn-area casue-btn text-center">
                                    <Link to="/cause-single" className="header-btn1">Donation <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                            <div className="vl-cause-content">
                                <div className="vl-progress">
                                    <div className="skill-progress">
                                        <div className="skill-box">
                                            <div className="skill-bar skill-bar2">
                        <span className="skill-per html">
                          <span className="tooltipp">16%</span>
                        </span>
                                            </div>
                                            <div className="skill-vlue">
                                                <div className="num1"><span>Raised: </span>$13,000</div>
                                                <div className="num1"><span>Goal: </span>$85,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="badge mt-32">Disasters</a>
                                <h3 className="title"><Link to="/cause-single">Medical And Assistance</Link></h3>
                                <p>Access healthcare becomes a lifeline <br /> in times of crisis. We offer medical
                                    support, mobile clinics, &amp; mental.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="vl-single-cause-box mb-30" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                            <div className="vl-cause-thumb">
                                <img className="w-100" src={cause2} alt='cause2' />
                                <div className="btn-area casue-btn text-center">
                                    <Link to="/cause-single" className="header-btn1">Donation <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                            <div className="vl-cause-content">
                                <div className="vl-progress">
                                    <div className="skill-progress">
                                        <div className="skill-box">
                                            <div className="skill-bar skill-bar2">
                        <span className="skill-per html">
                          <span className="tooltipp">28%</span>
                        </span>
                                            </div>
                                            <div className="skill-vlue">
                                                <div className="num1"><span>Raised: </span>$26,000</div>
                                                <div className="num1"><span>Goal: </span>$90,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="badge mt-32">Disasters</a>
                                <h3 className="title"><Link to="/cause-single">Hunger Relief and Food</Link></h3>
                                <p>In the aftermath of a disaster access <br /> to nutritious food is often
                                    disrupted. <br /> We work provide emergency meals.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="vl-single-cause-box mb-30" data-aos="fade-left" data-aos-duration={700} data-aos-delay={300}>
                            <div className="vl-cause-thumb">
                                <img className="w-100" src={cause3} alt='cause3' />
                                <div className="btn-area casue-btn text-center">
                                    <Link to="/cause-single" className="header-btn1">Donation <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                            <div className="vl-cause-content">
                                <div className="vl-progress">
                                    <div className="skill-progress">
                                        <div className="skill-box">
                                            <div className="skill-bar skill-bar2">
                        <span className="skill-per html">
                          <span className="tooltipp">24%</span>
                        </span>
                                            </div>
                                            <div className="skill-vlue">
                                                <div className="num1"><span>Raised: </span>$13,701</div>
                                                <div className="num1"><span>Goal: </span>$60,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="badge mt-32">Disasters</a>
                                <h3 className="title"><Link to="/cause-single">Shelter and Housing</Link></h3>
                                <p>Rebuilding home &amp; shelter essential <br /> for recovery. We help restore
                                    safe <br /> living conditions by offering.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Causes;