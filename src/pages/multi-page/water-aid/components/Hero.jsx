import banner3 from '@/assets/img/banner/banner3.png';
import heart3 from '@/assets/img/icons/vl-heart-3.1.svg';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const Hero = () => {
  return <div className="vl-banner-3-bg mt-24" style={{
    backgroundImage: `url(${banner3})`
  }}>
            <Container fluid>
                <Row>
                    <Col lg={8} className="gx-0">
                        <div className="vl-section-heading3">
                            <div className="banner3">
                                <h4 className="subtitle" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}><span><img src={heart3} alt='heart3' /></span> Recognizing Our
                                    Disaster Relief Heroes</h4>
                                <h1 className="heading-title text-anime-style-3">Heroes Fighting <br /> For Clean Water
                                </h1>
                                <p className="para">Access to clean water is fundamental to life, health,
                                    hope. <br /> Our Water Aid Heroes are on the frontlines, working.</p>
                            </div>
                            <div className="vl-btn3">
                                <Link to="/pages/contact" className="primary-btn-3">Join The Relief Effort</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default Hero;