import React, { useEffect, useState } from 'react';

import vision2 from '@/assets/img/about/vl-vission2.png';
import { visionAPI } from '@/utils/About/visionApi';
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
const Vision = () => {
    const [vision, setVision] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVision = async () => {
            try {
                setLoading(true);
                const data = await visionAPI.getVision();
                setVision(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchVision();
    }, []);

    if (loading) {
        return <section className="vl-about-vission-bg sp2"><Container><div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div></Container></section>;
    }
    if (error || !vision) {
        return <section className="vl-about-vission-bg sp2"><Container><div className="alert alert-warning" role="alert">Unable to load vision section.<br/>{error}</div></Container></section>;
    }

    const visionImage = vision.image || vision2;

    return <section className="vl-about-vission-bg sp2">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="vission-thumb mb-30">
                        <img className="w-100" src={visionImage} alt='vision' />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="vl-vission-content ml-50 mb-30">
                        <div className="vl-section-title-1">
                            <h5 className="subtitle">{'Our Mission & Vision'}</h5>
                            <h2 className="title pb-10">{vision.heading }</h2>
                            <div>
                                {vision.description && vision.description.split('\n').filter(para => para.trim()).map((paragraph, index) => (
                                    <p key={index}>{paragraph.trim()}</p>
                                ))}
                            </div>
                        </div>
                        <div className="vl-vission-tab2">
                            <TabContainer defaultActiveKey={vision.tabs && vision.tabs[0] ? `tab-${0}` : ''}>
                                <Nav className="nav-pills" id="pills-tab" role="tablist">
                                    {vision.tabs && vision.tabs.map((tab, idx) => (
                                        <NavItem role="presentation" key={idx}>
                                            <NavLink eventKey={`tab-${idx}`} data-bs-toggle="pill" type="button" role="tab" aria-selected={idx === 0}>{tab.title}</NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                                <TabContent>
                                    {vision.tabs && vision.tabs.map((tab, idx) => (
                                        <TabPane className="fade" eventKey={`tab-${idx}`} key={idx}>
                                            <p className="para">{tab.content}</p>
                                        </TabPane>
                                    ))}
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