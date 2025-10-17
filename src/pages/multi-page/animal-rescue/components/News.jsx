import metaIcon1 from '@/assets/img/icons/vl-meta-icon-2.1.svg';
import metaIcon2 from '@/assets/img/icons/vl-meta-icon-2.2.svg';
import blog1 from '@/assets/img/blog/vl-blog-2.1.png';
import blog2 from '@/assets/img/blog/vl-blog-2.2.png';
import topShape from '@/assets/img/shape/vl-blog-top-shape.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const News = () => {
  return <div className="vl-blog-2 sp2">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="vl-section-title-3 mb-60 text-center" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                            <h4 className="subtitle">Our Blog &amp; News</h4>
                            <h2 className="title">From Abandonment to Adoption</h2>
                            <p>Every rescue story is a testament to the power of compassion and resilience.
                                At <br /> organization, we’ve witnessed countless animals transform from frightened.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="vl-single-blog-box2 mb-30" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="thumb p-relative">
                                <div className="top-img">
                                    <img src={topShape} alt='topShape' />
                                </div>
                                <Link to="/blog-single"><img className="w-100 img-fluid" src={blog1} alt='blog1' /></Link>
                            </div>
                            <div className="blog-content-box">
                                <div className="meta-flex">
                                    <div className="meta">
                                        <div className="meta-icon">
                                            <span><img src={metaIcon1} alt='metaIcon1' /></span>
                                        </div>
                                        <a href="#" className="meta-text">16 October 2025</a>
                                    </div>
                                    <div className="meta">
                                        <div className="meta-icon">
                                            <span><img src={metaIcon2} alt='metaIcon2' /></span>
                                        </div>
                                        <a href="#" className="meta-text">Dawid Malan</a>
                                    </div>
                                </div>
                                <Link to="/blog-single" className="title">Get Involved: Make a Difference for
                                    Animals</Link>
                                <p className="para">Whether through adoption, fostering, volunteering, or donating, your
                                    involvement helps transform lives.</p>
                                <Link to="/blog-single" className="learn-more">Learn More <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="vl-single-blog-box2 mb-30" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="thumb p-relative">
                                <div className="top-img">
                                    <img src={topShape} alt='topShape' />
                                </div>
                                <a href="#"><img className="w-100 img-fluid" src={blog2} alt='blog2' /></a>
                            </div>
                            <div className="blog-content-box">
                                <div className="meta-flex">
                                    <div className="meta">
                                        <div className="meta-icon">
                                            <span><img src={metaIcon1} alt='metaIcon1' /></span>
                                        </div>
                                        <a href="#" className="meta-text">16 October 2025</a>
                                    </div>
                                    <div className="meta">
                                        <div className="meta-icon">
                                            <span><img src={metaIcon2} alt='metaIcon2' /></span>
                                        </div>
                                        <a href="#" className="meta-text">Dawid Malan</a>
                                    </div>
                                </div>
                                <Link to="/blog-single" className="title">Meet Our Heroes: Volunteers and
                                    Supporters</Link>
                                <p className="para">Our dedicated volunteers &amp; supporters the backbone of on work
                                    Meet the compassionate individuals who make.</p>
                                <Link to="/blog-single" className="learn-more">Learn More <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default News;