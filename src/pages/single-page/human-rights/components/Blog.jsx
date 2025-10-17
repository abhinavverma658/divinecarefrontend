import blog1 from '@/assets/img/blog/vl-blog-5.1.png';
import blog2 from '@/assets/img/blog/vl-blog-5.2.png';
import calenderIcon1 from '@/assets/img/icons/vl-calender-icon5.1.svg';
import userIcon5 from '@/assets/img/icons/vl-user-icon5.2.svg';
import { Col, Container, Row } from 'react-bootstrap';
const Blog = () => {
  return <section id="blog" className="vl-blog5 sp2">
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto">
                        <div className="vl-section-title5 text-center">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                Our Blog & News
                            </h5>
                            <h2 className="title text-anime-style-3">
                                Championing Equality: Our Latest Advocacy Efforts
                            </h2>
                        </div>
                    </Col>
                </Row>
                <Row>


                    <div className="row">
                        <div className="col-lg-5">
                            <div className="single-blog-box active mb-30" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                <div className="blog-thumb reveal">
                                    <img className="w-100" src={blog1} alt='blog' />
                                </div>
                                <div className="blog-content">
                                    <div className="meta-flex">
                                        <div className="meta-icon-box">
                                            <div className="icon">
                                                <span><img src={calenderIcon1} alt='calenderIcon1' /></span>
                                            </div>
                                            <div className="text">
                                                <a href="#" className="title">16 October 2025</a>
                                            </div>
                                        </div>
                                        <div className="meta-icon-box">
                                            <div className="icon">
                                                <span><img src={userIcon5} alt='userIcon5' /></span>
                                            </div>
                                            <div className="text">
                                                <a href="#" className="title">Dawid Malan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/blog/single" className="title">Stories, Insights, &amp; Advocacy in
                                        Action</a>
                                    <p className="para">Welcome our blog, where we share powerful <br /> stories,
                                        updates &amp; from the frontlines.</p>
                                    <a href="/blog/single" className="readmore">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="single-blog-box mb-30" data-aos="zoom-in-up" data-aos-duration={1200} data-aos-delay={300}>
                                <div className="blog-thumb reveal">
                                    <img className="w-100" src={blog2} alt='blog2' />
                                </div>
                                <div className="blog-content">
                                    <div className="meta-flex">
                                        <div className="meta-icon-box">
                                            <div className="icon">
                                                <span><img src={calenderIcon1} alt='calenderIcon1' /></span>
                                            </div>
                                            <div className="text">
                                                <a href="#" className="title">16 October 2025</a>
                                            </div>
                                        </div>
                                        <div className="meta-icon-box">
                                            <div className="icon">
                                                <span><img src={userIcon5} alt='userIcon5' /></span>
                                            </div>
                                            <div className="text">
                                                <a href="#" className="title">Dawid Malan</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/blog/single" className="title">Stories, Insights, &amp; Advocacy in
                                        Action</a>
                                    <p className="para">Welcome our blog, where we share powerful stories,
                                        updates &amp; from the frontlines.</p>
                                    <a href="/blog/single" className="readmore">Read More <span><i className="fa-solid fa-arrow-right" /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>;
};
export default Blog;