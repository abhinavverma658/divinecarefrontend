import { blogData } from '../data';
import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import userImg from '@/assets/img/icons/vl-user-1.1.svg';
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
const Blog = () => {
  return <section className="vl-blog-inner sp2">
            <Container>
                <Row>
                    {blogData?.map((item, idx) => <Col lg={4} md={6} key={idx}>
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
                <Row>
                    <Col xs={12} className="m-auto">
                        <div className="theme-pagination thme-pagination-mt text-center mt-18">
                            <ul>
                                <li><a href="#"><FaAngleLeft className="fa-solid fa-angle-left" /></a></li>
                                <li><a className="active" href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li>...</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#"><FaAngleRight className="fa-solid fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Blog;