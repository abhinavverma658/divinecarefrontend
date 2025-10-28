import ctaImg1 from '@/assets/img/cta/Subscribe.jpg';
import arrowImg from '@/assets/img/shape/vl-arow-shap-1.1.png';
import shapeImg1 from '@/assets/img/shape/vl-cta-1.1.png';
import shapeImg2 from '@/assets/img/shape/vl-cta-1.2.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
const CtaArea = () => {
  return <section id="contact" className="vl-cta">
            <Container>
                <div className="vl-cta-bg" style={{
        backgroundImage: `url(${ctaImg1})`
      }}>
                    <div className="vl-cta-shap dot-shap">
                        <img src={arrowImg} alt='arrowImg' />
                    </div>
                    <div className="vl-cta-shap shap-1"><img src={shapeImg1} alt='shapeImg1' /></div>
                    <div className="vl-cta-shap shap-2"><img src={shapeImg2} alt='shapeImg2' /></div>
                    <Row>
                        <Col lg={12}>
                            <div className="vl-cta-content text-center">
                                <h2 className="title">Your Care Can Transform Lives</h2>
                                <p>Every act of kindness, no matter how small, brings hope and strength to individuals in need of support. Together, we can make a lasting difference.</p>
                                <div className="vl-cta-form text-center mx-auto">
                                    <form action="#">
                                        <input type="email" placeholder="Enter Your Email.." />
                                        <div className="btn-area vl-cta-btn1">
                                            <button className="header-btn1">Subscribe <span><FaArrowRight /></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>;
};
export default CtaArea;