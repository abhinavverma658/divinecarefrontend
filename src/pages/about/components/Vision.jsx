import vision2 from '@/assets/img/about/vl-vission2.png';
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
const Vision = () => {
  return <section className="vl-about-vission-bg sp2">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="vission-thumb mb-30">
                            <img className="w-100" src={vision2} alt='vision2' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-vission-content ml-50 mb-30">
                            <div className="vl-section-title-1">
                                <h5 className="subtitle">Our Mission &amp; Vision</h5>
                                <h2 className="title">Our Purpose: Mission and Vision for a Better </h2>
                                <p>Our mission to bring hope, resources, &amp; opportunitie communities <br /> in need,
                                    empowering individuals to build brighter, sustainable <br /> futures we are committed
                                    to tackling critical challenges.</p>
                            </div>
                            <div className="vl-vission-tab2">
                                <TabContainer defaultActiveKey={'pills-home'}>
                                    <Nav className=" nav-pills" id="pills-tab" role="tablist">
                                        <NavItem role="presentation">
                                            <NavLink eventKey="pills-home" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Our
                                                Mission</NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink eventKey="pills-profile" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Our
                                                Vission </NavLink>
                                        </NavItem>
                                        <NavItem role="presentation">
                                            <NavLink eventKey="pills-contact" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Charity
                                                History</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent>
                                        <TabPane className="fade" eventKey="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                            <p className="para">Our vision is a world where everyone has the
                                                opportunity <br /> to thrive, with access the resources and support
                                                necessary <br /> for lasting change guided by compassion, integrity.</p>
                                            <p className="para pt-20">Guided by compassion, integrity, and community, we
                                                work <br /> tirelessly to make this vision a reality. Together, with
                                                our <br /> supporters, partners, and volunteers, we are creating.</p>
                                        </TabPane>
                                        <TabPane className="fade" eventKey="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                            <p className="para">Our vision is a world where everyone has the
                                                opportunity <br /> to thrive, with access the resources and support
                                                necessary <br /> for lasting change guided by compassion, integrity.</p>
                                            <p className="para pt-20">Guided by compassion, integrity, and community, we
                                                work <br /> tirelessly to make this vision a reality. Together, with
                                                our <br /> supporters, partners, and volunteers, we are creating.</p>
                                        </TabPane>
                                        <TabPane className="fade" eventKey="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                            <p className="para">Our vision is a world where everyone has the
                                                opportunity <br /> to thrive, with access the resources and support
                                                necessary <br /> for lasting change guided by compassion, integrity.</p>
                                            <p className="para pt-20">Guided by compassion, integrity, and community, we
                                                work <br /> tirelessly to make this vision a reality. Together, with
                                                our <br /> supporters, partners, and volunteers, we are creating.</p>
                                        </TabPane>
                                    </TabContent>
                                </TabContainer>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Vision;