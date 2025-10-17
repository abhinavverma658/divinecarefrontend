import gallerySearch from '@/assets/img/icons/vl-gallery-search-1.1.svg';
import galleryImg1 from '@/assets/img/gallery/vl-gallery-1.1.png';
import galleryImg2 from '@/assets/img/gallery/vl-gallery-1.2.png';
import galleryImg3 from '@/assets/img/gallery/vl-gallery-1.3.png';
import galleryImg4 from '@/assets/img/gallery/vl-gallery-1.4.png';
import galleryImg5 from '@/assets/img/gallery/vl-gallery-1.5.png';
import galleryImg6 from '@/assets/img/gallery/vl-gallery-1.6.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import GlightBox from "@/components/GlightBox";
const Gallery = () => {
  return <section id='gallery' className="vl-gallery sp2">
            <Container>
                <div className="vl-gallery-content mb-60">
                    <div className="vl-section-title-1">
                        <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>Our
                            Gallery</h5>
                        <h2 className="title text-anime-style-3">The Frontlines of Relief</h2>
                        <p data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>These titles aim to convey
                            emotion and meaning while showcasing <br /> the importance of your organization’s work
                            through visuals.</p>
                    </div>
                    <div className="vl-gallery-btn text-end" data-aos="fade-left" data-aos-duration={900} data-aos-delay={300}>
                        <div className="btn-area">
                            <Link to="/event-single" className="header-btn1">Vineyard
                                Venues <span><FaArrowRight /></span></Link>
                        </div>
                    </div>
                </div>
                <GlightBox>
                    <Row>
                        <Col lg={6} md={6} className="mb-30">
                            <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={800} data-aos-delay={300}>
                                <img className="w-100" src={galleryImg1} alt='galleryImg1' />
                                <a href={galleryImg1} className="glightbox search-ic">
                                    <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="mb-30">
                            <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={900} data-aos-delay={300}>
                                <img className="w-100" src={galleryImg2} alt='galleryImg2' />
                                <a href={galleryImg2} className="glightbox search-ic">
                                    <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="mb-30">
                            <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
                                <img className="w-100" src={galleryImg3} alt='galleryImg3' />
                                <a href={galleryImg3} className="glightbox search-ic">
                                    <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="mb-30">
                            <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={1100} data-aos-delay={300}>
                                <img className="w-100" src={galleryImg4} alt='galleryImg4' />
                                <a href={galleryImg4} className="glightbox search-ic">
                                    <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="mb-30">
                            <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                <img className="w-100" src={galleryImg5} alt='galleryImg5' />
                                <a href={galleryImg5} className="glightbox search-ic">
                                    <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                </a>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="mb-30">
                            <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={1300} data-aos-delay={300}>
                                <img className="w-100" src={galleryImg6} alt='galleryImg6' />
                                <a href={galleryImg6} className="glightbox search-ic">
                                    <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </GlightBox>
            </Container>
        </section>;
};
export default Gallery;