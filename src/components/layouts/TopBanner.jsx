import topImg1 from '@/assets/img/icons/vl-top-ic-1.1.svg';
import topImg2 from '@/assets/img/icons/vl-top-ic-1.2.svg';
import { Col, Container, Row } from 'react-bootstrap';
const TopBanner = () => {
  return <div className="vl-header-top d-none d-lg-block">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="vl-header-top-content">
                            <p>Are you ready to free case evaluation today? </p>
                            <a href="/pages/contact" className="top-contact">Contact Us</a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-header-top-icon">
                            <div className="vl-header-top-icbox">
                                <div className="top-icon">
                                    <span><img src={topImg1} alt='topImg1' /></span>
                                </div>
                                <div className="top-content">
                                    <a href="mailto:hello@divinecareinc.com">hello@divinecareinc.com</a>
                                </div>
                            </div>
                            <div className="vl-header-top-icbox">
                                <div className="top-icon">
                                    <span><img src={topImg2} alt='topImg2' /></span>
                                </div>
                                <div className="top-content">
                                    <a href="/pages/contact">301-281-2285</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default TopBanner;