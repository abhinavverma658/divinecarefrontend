import thumb5 from '@/assets/img/work/vl-work-thumb-5.1.png';
import { Col, Container, Row } from 'react-bootstrap';
const Work = () => {
  return <section id="work" className="vl-work5 sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vl-work-content mb-30">
                            <div className="vl-section-title5">
                                <h5 className="subtitle" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}> How It’s Work</h5>
                                <h2 className="title text-anime-style-3">Our Approach to Human Right Empowering
                                    Action</h2>
                                <p className="para" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>We work alongside policymakers, grassroots organizations,
                                    and <br /> international bodies to influence laws, policies, and social
                                    norms <br /> that protect human dignity our efforts are fueled by the support.</p>
                            </div>
                            <div className="vl-work-thumb reveal">
                                <img className="w-100" src={thumb5} alt='thumb5' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="work-box ml-50">
                            <Row>
                                <Col lg={12} data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                    <div className="vl-single-work-box">
                                        <div className="work-box-flx">
                                            <div className="num">
                                                <span>01</span>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Turning Advocacy into Action</h5>
                                                <p className="para">At the core of our work is commitment to creating
                                                    tangible lasting change through advocacy.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} data-aos="zoom-in-up" data-aos-duration={1100} data-aos-delay={300}>
                                    <div className="vl-single-work-box active">
                                        <div className="work-box-flx">
                                            <div className="num">
                                                <span>02</span>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Advancing Justice, Empowering Change</h5>
                                                <p className="para">At the heart of our work is the belief that every
                                                    individual deserves to live with dignity, freedom.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
                                    <div className="vl-single-work-box">
                                        <div className="work-box-flx">
                                            <div className="num">
                                                <span>03</span>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Turning Advocacy into Lasting Change</h5>
                                                <p className="para">At the heart of our advocacy is a but power full
                                                    belief every individual deserve live dignity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} data-aos="zoom-in-up" data-aos-duration={900} data-aos-delay={300}>
                                    <div className="vl-single-work-box">
                                        <div className="work-box-flx">
                                            <div className="num">
                                                <span>04</span>
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Empowering Change Through Advocacy</h5>
                                                <p className="para">At the core of our work is the belief that everyone
                                                    deserves equal rights and opportunities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Work;