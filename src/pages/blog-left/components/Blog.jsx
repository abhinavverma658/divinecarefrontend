import { blogData } from '../data';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import userImg from '@/assets/img/icons/vl-user-1.1.svg';
import { Col, Container, Row } from 'react-bootstrap';
const Blog = () => {
  return <section className="vl-singlevent-iner pb-50">
            <Container>
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="more-title text-center mb-60">
                            <h2 className="title">More Blog</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {blogData.map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className="vl-single-blg-item mb-30">
                                    <div className="vl-blg-thumb">
                                        <Link to="/blog-single"><img className="w-100" src={item.image} alt='img' /></Link>
                                    </div>
                                    <div className="vl-meta">
                                        <ul>
                                            <li><a href="#"><span className="top-minus"> <img src={calenderImg} alt='calenderImg' /></span> 16
                                                October 2025</a></li>
                                            <li><a href="#"><span className="top-minus"> <img src={userImg} alt='userImg' /></span>Kyle
                                                Miller</a></li>
                                        </ul>
                                    </div>
                                    <div className="vl-blg-content">
                                        <h3 className="title"><Link to="/blog-single">{item.title}</Link></h3>
                                        <p>{item.excerpt}</p>
                                        <Link to="/blog-single" className="read-more">Read
                                            More <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Blog;