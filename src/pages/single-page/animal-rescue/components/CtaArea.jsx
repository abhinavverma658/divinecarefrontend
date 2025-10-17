import ctaIcon2 from '@/assets/img/icons/vl-cta-icon-2.2.svg';
import ctaPhIcon3 from '@/assets/img/icons/vl-cta-ph-2.1.svg';
import ctaIcon3 from '@/assets/img/icons/vl-cta-icon-2.3.svg';
import { Col, Container, Row } from 'react-bootstrap';
const CtaArea = () => {
  return <section className="vl-cta2 sp1">
            <div className="shape shape-1"><img src={ctaIcon2} alt='ctaIcon2' /></div>
            <div className="shape shape-2"><img src={ctaIcon3} alt='ctaIcon2' /></div>
            <div className="shape shape-3"><img src={ctaIcon3} alt='ctaIcon2' /></div>
            <div className="shape shape-4"><img src={ctaIcon3} alt='ctaIcon2' /></div>
            <div className="shape shape-5"><img src={ctaIcon3} alt='ctaIcon2' /></div>
            <Container>
                <Row>
                    <Col lg={10} className="mx-auto">
                        <div className="vl-section-title-3 text-center">
                            <h4 className="subtitle" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>Let&#39;s Care For Each Other</h4>
                            <h2 className="title text-anime-style-3">Contact Us If You Find Abandoned Animals</h2>
                            <p data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>By reaching out,
                                you&#39;re taking a step toward making a difference in the lives of animals in need.
                                Don’t <br /> hesitate to contact us together, we can create a better world for animals,
                                one rescue at a time.</p>
                            <div className="vl-about-btn" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
                                <a href="tel:1234567890" className="btn-primary2"> <span><img src={ctaPhIcon3} alt='ctaPhIcon3' /></span> +123-456-7890</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default CtaArea;