import Blog1 from '@/assets/img/blog/vl-blg-1.1.png';
import Blog2 from '@/assets/img/blog/vl-blg-1.2.png';
import Blog3 from '@/assets/img/blog/vl-blg-1.3.png';
import calender1 from '@/assets/img/icons/vl-calender-1.1.svg';
import user1 from '@/assets/img/icons/vl-user-1.1.svg';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Blog = () => {
  return <section id='blog' className="vl-blg sp2">
            <Container>
                <div className="vl-section-title-1 mb-60 text-center">
                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Our
                        Blog</h5>
                    <h2 className="title text-anime-style-3">Stories of Relief and Recovery</h2>
                    <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Ever wondered how your
                        contributions make an impact? This blog dives into <br /> the tangible ways that donations big or
                        small help provide food.</p>
                </div>
                <Row>
                    <Col lg={4} md={6}>
                        <div className="vl-single-blg-item mb-30" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="vl-blg-thumb">
                                <Link to="/blog-single"><img className="w-100" src={Blog1} alt='Blog1' /></Link>
                            </div>
                            <div className="vl-meta">
                                <ul>
                                    <li><a href="#"><span className="top-minus"> <img src={calender1} alt='calender1' /></span> 16
                                        October 2023</a></li>
                                    <li><a href="#"><span className="top-minus"> <img src={user1} alt='user1' /></span> Dawid
                                        Malan</a></li>
                                </ul>
                            </div>
                            <div className="vl-blg-content">
                                <h3 className="title"><Link to="/blog-single">Stories from the Field:
                                    Firsthand <br /> Accounts of Disaster Relief</Link></h3>
                                <p>Get inside look at the real-life experiences of teams our teams ground from
                                    response.</p>
                                <Link to="/blog-single" className="read-more">Read
                                    More <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="vl-single-blg-item mb-30" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                            <div className="vl-blg-thumb">
                                <Link to="/blog-single"><img className="w-100" src={Blog2} alt='Blog2' /></Link>
                            </div>
                            <div className="vl-meta">
                                <ul>
                                    <li><a href="#"><span className="top-minus"> <img src={calender1} alt='calender1' /></span> 16
                                        October 2023</a></li>
                                    <li><a href="#"><span className="top-minus"> <img src={user1} alt='user1' /></span> Dawid
                                        Malan</a></li>
                                </ul>
                            </div>
                            <div className="vl-blg-content">
                                <h3 className="title"><Link to="/blog-single">Tips for Disaster Preparedness:
                                    How <br /> to Stay Safe and Ready</Link></h3>
                                <p>Disasters strike unexpectedly you prepared? Explore practical tips and guides to
                                    protect.</p>
                                <Link to="/blog-single" className="read-more">Read
                                    More <span><FaArrowRight /></span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="vl-single-blg-item mb-30" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                            <div className="vl-blg-thumb">
                                <Link to="/blog-single"><img className="w-100" src={Blog3} alt='Blog3' /></Link>
                            </div>
                            <div className="vl-meta">
                                <ul>
                                    <li><a href="#"><span className="top-minus"> <img src={calender1} alt='calender1' /></span> 16
                                        October 2023</a></li>
                                    <li><a href="#"><span className="top-minus"> <img src={user1} alt='user1' /></span> Dawid
                                        Malan</a></li>
                                </ul>
                            </div>
                            <div className="vl-blg-content">
                                <h3 className="title"><a href="#">Partnering for Good: The Role of Collaboration in
                                    Crisis Relief</a></h3>
                                <p>Relief effort most effective we organization governments, &amp; communities work
                                    together.</p>
                                <a href="#" className="read-more">Read More <span><FaArrowRight /></span></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Blog;