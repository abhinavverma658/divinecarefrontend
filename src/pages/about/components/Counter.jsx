import React, { useEffect, useState } from 'react';

import { Link } from "react-router";
import { companyAPI } from '@/utils/About/companyApi';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FaArrowRight } from 'react-icons/fa6';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Counter = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                setLoading(true);
                const data = await companyAPI.getCompany();
                setCompany(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCompany();
    }, []);

    if (loading) {
        return (
            <section className="vl-counter5 counter-iner sp2">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="vl-counter-content mb-30">
                                <div className="vl-section-title-1">
                                    <Skeleton height={30} width={200} style={{ marginBottom: '20px' }} />
                                    <Skeleton height={50} width="90%" style={{ marginBottom: '20px' }} />
                                    <Skeleton count={3} style={{ marginBottom: '10px' }} />
                                    <Skeleton height={50} width={150} style={{ marginTop: '20px' }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="mb-10">
                            <Row>
                                {[1, 2, 3, 4].map((_, idx) => (
                                    <Col lg={6} md={6} key={idx}>
                                        <div className="single-counter-box counter-box-2 mb-30" style={{ padding: '30px' }}>
                                            <Skeleton height={40} width={100} style={{ marginBottom: '15px' }} />
                                            <Skeleton height={20} width="80%" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
    if (error || !company) {
        return <section className="vl-counter5 counter-iner sp2"><Container><div className="alert alert-warning" role="alert">Unable to load company stats section.<br/>{error}</div></Container></section>;
    }

    return <section className="vl-counter5 counter-iner sp2">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="vl-counter-content mb-30">
                        <div className="vl-section-title-1">
                            <h5 className="subtitle"  style={{ fontSize: '21px' }}>Company Statistics</h5>
                            <h2 className="title">{company.heading || 'Highest Ambition is to Help People'}</h2>
                            <p className="para pb-32">{company.description}</p>
                            <div className="btn-area">
                                <Link to="/pages/contact" className="header-btn1">Contact Us <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6} className=" mb-10">
                    <Row>
                        {company.stats && company.stats.length > 0 ? (
                            company.stats.map((item, idx) => (
                                <Col lg={6} md={6} key={idx}>
                                    <div className={`single-counter-box counter-box-2  ${hoveredIndex === idx ? 'active' : ''}`} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                                        <h3 className="title"><CountUp className="title counter" duration={1} start={0} end={parseInt(item.title)} />+</h3>
                                        <span className="pt-20">{item.content}</span>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            <Col><div>No stats available.</div></Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>;
};
export default Counter;