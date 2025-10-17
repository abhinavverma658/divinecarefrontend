import blog1 from '@/assets/img/blog/vl-blog-4.1.png';
import user2 from '@/assets/img/icons/vl-user-wh-4.2.svg';
import calender1 from '@/assets/img/icons/vl-calender-wh-4.1.svg';
import calenderImg from '@/assets/img/icons/vl-calender-blck4.1.svg';
import user42 from '@/assets/img/icons/vl-user-blck4.2.svg';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Blog = () => {
  return <section id="blog" className="vl-blog4 sp2">
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <div className="vl-section-title4 text-center mb-60">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Latest News &amp; Blog</h5>
                            <h2 className="title text-anime-style-3">Stories of Resilience &amp; Wisdom</h2>
                            <p className="para">Join us for unforgettable celebration honoring invaluable
                                contributions <br /> of our senior citizens, those who have shaped our communities.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="single-blog mb-30">
                            <div className="blog-thumb">
                                <img className="w-100" src={blog1} alt='blog1' />
                            </div>
                            <div className="blog-content">
                                <div className="meta-flex">
                                    <div className="single-meta-box">
                                        <div className="icon">
                                            <span><img src={calender1} alt='calender1' /></span>
                                        </div>
                                        <a href="#" className="para">16 October 2025</a>
                                    </div>
                                    <div className="single-meta-box">
                                        <div className="icon">
                                            <span><img src={user2} alt='user2' /></span>
                                        </div>
                                        <a href="#" className="para">Dawid Malan</a>
                                    </div>
                                </div>
                                <div className="content">
                                    <Link to="/blog-single" className="title">Empowering Aging How Seniors
                                        Continue <br /> to Make a Difference</Link>
                                    <Link to="/blog-single" className="readmore">Read More <span><FaArrowRight /></span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="vl-single-blog-item4 mb-30" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="meta-flex">
                                <div className="single-meta-box">
                                    <div className="icon">
                                        <span><img src={calenderImg} alt='calenderImg' /></span>
                                    </div>
                                    <a href="#" className="para">16 October 2025</a>
                                </div>
                                <div className="single-meta-box">
                                    <div className="icon">
                                        <span><img src={user42} alt='user42' /></span>
                                    </div>
                                    <a href="#" className="para">Dawid Malan</a>
                                </div>
                            </div>
                            <div className="content">
                                <Link to="/blog-single" className="title">Building Connections Generations: Bridging the
                                    Gap</Link>
                                <p className="para">Intergenerational connections have unique power to enrich lives,
                                    sharing knowledge and fostering mutual understanding. </p>
                                <Link to="/blog-single" className="readmore">Read
                                    More <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                        <div className="vl-single-blog-item4 mb-30" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="meta-flex">
                                <div className="single-meta-box">
                                    <div className="icon">
                                        <span><img src={calenderImg} alt='calenderImg' /></span>
                                    </div>
                                    <a href="#" className="para">16 October 2025</a>
                                </div>
                                <div className="single-meta-box">
                                    <div className="icon">
                                        <span><img src={user42} alt='user42' /></span>
                                    </div>
                                    <a href="#" className="para">Dawid Malan</a>
                                </div>
                            </div>
                            <div className="content">
                                <Link to="/blog-single" className="title">Lifetime Stories Celebrating Legacy of Senior
                                    Citizens</Link>
                                <p className="para">Every senior has a story, a personal legacy shaped by love, loss,
                                    growth, and. In this series, celebrate these rich histories. </p>
                                <Link to="/blog-single" className="readmore">Read
                                    More <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Blog;