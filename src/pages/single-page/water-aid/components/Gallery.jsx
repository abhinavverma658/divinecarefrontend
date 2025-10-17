import thumbSm1 from '@/assets/img/gallery/vl-gallery-thum-sm-3.1.png';
import thumbSm2 from '@/assets/img/gallery/vl-gallery-thum-sm-3.2.png';
import thumbSm3 from '@/assets/img/gallery/vl-gallery-thum-sm-3.3.png';
import thumbSm4 from '@/assets/img/gallery/vl-gallery-thum-sm-3.4.png';
import thumbSm5 from '@/assets/img/gallery/vl-gallery-thum-large-3.5.png';
import { Col, Container, Row } from 'react-bootstrap';
import GlightBox from "@/components/GlightBox";
const Gallery = () => {
  return <section id="gallery" className="vl-gallery3 sp2">
            <Container>
                <GlightBox>
                    <Row>
                        <Col md={6} lg={3} className="order-1 order-md-1 order-lg-1">
                            <div className="vl-gallery-sm-thumb mb-30 reveal">
                                <a className="glightbox gallery-popup-link" href={thumbSm1}><img className="w-100" src={thumbSm1} alt='thumbSm1' /></a>
                            </div>
                            <div className="vl-gallery-sm-thumb mb-30 reveal">
                                <a className="glightbox gallery-popup-link" href={thumbSm2}><img className="w-100" src={thumbSm2} alt='thumbSm2' /></a>
                            </div>
                        </Col>
                        <Col lg={6} className="order-lg-2">
                            <div className="vl-gallery-content">
                                <div className="vl-section-title3 text-center">
                                    <h4 className="subtitle" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>Our Gallery</h4>
                                    <h2 className="title text-anime-style-3">Every Drop Counts Our Impact in
                                        Pictures</h2>
                                    <div className="vl-gallery-large-thumb reveal mb-30">
                                        <a className="glightbox gallery-popup-link" href={thumbSm5}> <img className="w-100" src={thumbSm5} alt='thumbSm5' /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="order-lg-3">
                            <div className="vl-gallery-sm-thumb mb-30 reveal">
                                <a className="glightbox gallery-popup-link" href={thumbSm3}><img className="w-100" src={thumbSm3} alt='thumbSm3' /></a>
                            </div>
                            <div className="vl-gallery-sm-thumb mb-30 reveal">
                                <a className="glightbox gallery-popup-link" href={thumbSm4}><img className="w-100" src={thumbSm4} alt='thumbSm4' /></a>
                            </div>
                        </Col>
                    </Row>
                </GlightBox>
            </Container>
        </section>;
};
export default Gallery;