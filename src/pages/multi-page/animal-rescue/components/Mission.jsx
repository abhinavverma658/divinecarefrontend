import thumb2 from '@/assets/img/about/vl-mission-thumb-2.1.png';
import shape2 from '@/assets/img/shape/vl-top-shape2.1.png';
import thumbShape from '@/assets/img/shape/vl-banner-thumbshape-2.png';
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
const Mission = () => {
  return <section className="vl-mission p-relative">
            <div className="thumb-shape d-none d-lg-block">
                <img src={thumbShape} alt='thumbShape' />
            </div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="vl-mission-content">
                            <h3 className="title" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>Our Mission</h3>
                            <p>Our mission is to rescue, protect, and care for animals in need, providing with safe.</p>
                            <div className="vl-mission-content-checkbox">
                                <ul>
                                    <li><span><FaCheck className="fa-solid fa-check" /></span>Second Chance Animal
                                        Mission
                                    </li>
                                    <li><span><FaCheck className="fa-solid fa-check" /></span>Safe Haven for Animals</li>
                                    <li><span><FaCheck className="fa-solid fa-check" /></span>Guardians of Compassion
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="vl-mission-img p-relative">
                            <div className="top-shape d-none d-lg-block"><img src={shape2} alt='shape2' /></div>
                            <div className="img1 reveal">
                                <img className="thumb1 w-100" src={thumb2} alt='thumb2' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Mission;