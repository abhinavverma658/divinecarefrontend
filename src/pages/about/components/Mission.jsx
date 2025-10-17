import missionThumbImg from '@/assets/img/about/vl-about-mission-thumb.png';
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
const Mission = () => {
  return <section className="vl-about-mission-bg sp2">
            <Container>
                <Row>
                    <Col lg={10} className="mx-auto">
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className="mision-thumb mb-30">
                                    <img className="w-100" src={missionThumbImg} alt='missionThumbImg' />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mission-content ml-20 mb-30">
                                    <h2 className="title pb-20">Our Mission</h2>
                                    <p className="para pb-16">We are dedicated to addressing urgent needs such as clean
                                        water, education, healthcare, and food security, ensuring that every person has
                                        the foundation.</p>
                                    <p className="para">Through targeted programs, sustainable initiatives, &amp; the
                                        collective power of compassionate supporters, we strive to make a real and
                                        lasting impact. </p>
                                    <div className="icon-list-box pt-20">
                                        <ul>
                                            <li><span><FaCheck className="fa-solid fa-check" /></span>Client-Focused
                                                Solutions and Results
                                            </li>
                                            <li><span><FaCheck className="fa-solid fa-check" /></span>Flexible, Value
                                                Driven Approach
                                            </li>
                                            <li><span><FaCheck className="fa-solid fa-check" /></span>Warning of updated
                                                legal risks for customers
                                            </li>
                                            <li><span><FaCheck className="fa-solid fa-check" /></span>A team of
                                                experienced and highly specialized
                                            </li>
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