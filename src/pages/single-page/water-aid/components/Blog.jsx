import blog3 from '@/assets/img/blog/vl-blog-3.1.png';
import metaIcon1 from '@/assets/img/icons/vl-meta-ic-3.1.svg';
import metaIcon2 from '@/assets/img/icons/vl-meta-ic-3.2.svg';
import blog2 from '@/assets/img/blog/vl-blog-3.2.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Blog = () => {
  return <section id="blog" className="vl-blog3 sp2">
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <div className="vl-section-title3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Our
                                Blog &amp; News</h4>
                            <h2 className="title text-anime-style-3">Stories of Hope: Communities Thriving with Clean
                                Water</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="gx-0">
                        <div className="vl-single-blog-item mr-15 mb-30">
                            <div className="vl-blog-thumb reveal">
                                <img className="w-100" src={blog3} alt='blog3' />
                            </div>
                            <div className="vl-blog-content">
                                <div className="vl-meta-flex">
                                    <div className="vl-blog-meta-flex">
                                        <div className="icon">
                                            <span><img src={metaIcon1} alt='metaIcon1' /></span>
                                        </div>
                                        <div className="text">
                                            <a href="#" className="title">16 October 2025</a>
                                        </div>
                                    </div>
                                    <div className="vl-blog-meta-flex">
                                        <div className="icon">
                                            <span><img src={metaIcon2} alt='metaIcon2' /></span>
                                        </div>
                                        <div className="text">
                                            <a href="#" className="title">Dawid Malan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="vl-content">
                                    <Link to="/blog-single" className="title">Innovative Solutions for Water
                                        Scarcity</Link>
                                    <p className="para">Learn about the latest technologies strategies <br /> and
                                        partnerships that are helping us address.</p>
                                    <Link to="/blog-single" className="readmore">Read More <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} className="gx-0">
                        <div className="vl-single-blog-item ml-15 mb-30">
                            <div className="vl-blog-thumb reveal">
                                <img className="w-100" src={blog2} alt='blog2' />
                            </div>
                            <div className="vl-blog-content">
                                <div className="vl-meta-flex">
                                    <div className="vl-blog-meta-flex">
                                        <div className="icon">
                                            <span><img src={metaIcon1} alt='metaIcon1' /></span>
                                        </div>
                                        <div className="text">
                                            <a href="#" className="title">16 October 2025</a>
                                        </div>
                                    </div>
                                    <div className="vl-blog-meta-flex">
                                        <div className="icon">
                                            <span><img src={metaIcon2} alt='metaIcon2' /></span>
                                        </div>
                                        <div className="text">
                                            <a href="#" className="title">Dawid Malan</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="vl-content">
                                    <Link to="/blog-single" className="title">Clean Water, Healthy Futures: The Impact
                                        of Safe Water</Link>
                                    <p className="para">Discover the far-reaching benefits of clean water, from
                                        improving <br /> health and education to creating new economic opportunities.</p>
                                    <Link to="/blog-single" className="readmore">Read More <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Blog;