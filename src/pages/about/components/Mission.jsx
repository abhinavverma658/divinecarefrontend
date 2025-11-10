import React, { useEffect, useState } from 'react';

import missionThumbImg from '@/assets/img/about/vl-about-mission-thumb.png';
import { missionAPI } from '@/utils/About/missionApi';
import { getImageUrl } from '@/utils/imageUtils';
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
const Mission = () => {
    const [mission, setMission] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMission = async () => {
            try {
                setLoading(true);
                const data = await missionAPI.getMission();
                setMission(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMission();
    }, []);

    if (loading) {
        return <section className="vl-about-mission-bg sp2"><Container><div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div></Container></section>;
    }
    if (error || !mission) {
        return <section className="vl-about-mission-bg sp2"><Container><div className="alert alert-warning" role="alert">Unable to load mission section.<br/>{error}</div></Container></section>;
    }

    const missionImage = mission.image ? getImageUrl(mission.image) : missionThumbImg;

    return <section className="vl-about-mission-bg sp2">
        <Container>
            <Row>
                <Col lg={10} className="mx-auto">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="mision-thumb mb-30">
                                <img className="w-100" style={{height:'500px', objectFit:'cover', borderRadius:'10px'}} src={missionImage} alt='missionThumbImg' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mission-content ml-20 mb-30">
                                <h2 className="title pb-20">{mission.heading || 'Our Mission'}</h2>
                                <p className="para pb-16">{mission.description}</p>
                                <div className="icon-list-box pt-20">
                                    <ul>
                                        {mission.points && mission.points.length > 0 ? (
                                            mission.points.map((point, idx) => (
                                                <li key={idx}><span><FaCheck className="fa-solid fa-check" /></span>{point}</li>
                                            ))
                                        ) : (
                                            <li><span><FaCheck className="fa-solid fa-check" /></span>No mission points available.</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>;
};
export default Mission;