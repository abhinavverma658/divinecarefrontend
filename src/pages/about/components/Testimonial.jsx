import { useEffect, useRef, useState } from 'react';
import thumbImg from '@/assets/img/testimonial/vl-testimonial-large-thumb-4.1.png';
import reviewIcon from '@/assets/img/icons/vl-review-icon-4.1.svg';
import thumbSmImg from '@/assets/img/testimonial/vl-sm-thumb-4.1.png';
import uparrow4 from '@/assets/img/icons/vl-uparrow4.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6';
import Slider from "react-slick";
const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  const next = () => {
    sliderRef2.current?.slickNext();
  };
  const previous = () => {
    sliderRef2.current?.slickPrev();
  };
  return <section className="vl-testimonial4 vl-testimonial-inner sp2">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="testimonial-slides-wrap">
                            <Slider asNavFor={nav2} ref={sliderRef1} slidesToShow={1} slidesToScroll={1} arrows={false} fade={true} className="slider-thumb slider-for1">
                                <div className="single-thumb">
                                    <img className="w-100" src={thumbImg} alt='thumbImg' />
                                </div>

                                <div className="single-thumb">
                                    <img className="w-100" src={thumbImg} alt='thumbImg' />
                                </div>
                            </Slider>

                            <div className="content-box-2">
                                <Slider asNavFor={nav1} ref={sliderRef2} slidesToShow={1} slidesToScroll={1} arrows={false} focusOnSelect={true} className="slider-sm slider-nav1 p-relative">
                                    <div className="slider-content-box content-box2">
                                        <div className="icon">
                                            <ul>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                            </ul>
                                        </div>
                                        <p className="para">“Through their words, we’re reminded that a legacy isn’t
                                            just something you leave behind it’s something you create every day
                                            inspiring all generations to follow in their footsteps.”</p>
                                        <div className="slider-flex">
                                            <div className="user">
                                                <img src={thumbSmImg} alt='thumbSmImg' />
                                            </div>
                                            <div className="content">
                                                <a href="#" className="title">Sharon McClure</a>
                                                <span>Volunteer</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="slider-content-box content-box2">
                                        <div className="icon">
                                            <ul>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                <li><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                            </ul>
                                        </div>
                                        <p className="para">“Through their words, we’re reminded that a legacy isn’t
                                            just something you leave behind it’s something you create every day
                                            inspiring all generations to follow in their footsteps.”</p>
                                        <div className="slider-flex">
                                            <div className="user">
                                                <img src={thumbSmImg} alt='thumbSmImg' />
                                            </div>
                                            <div className="content">
                                                <a href="#" className="title">Sharon McClure</a>
                                                <span>Volunteer</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>

                                <div className="slider-sm slider-nav1 p-relative">
                                    <span className="smarrow smarrow2 abarow arrow-lft slick-arrow" onClick={previous}>
                                        <FaAngleLeft />
                                    </span>
                                    <span className="smarrow smarrow2 abarow arrow-right slick-arrow" onClick={next}>
                                        <FaAngleRight />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="vl-testimonial-content">
                            <div className="vl-section-title4">
                                <h5 className="subtitle">Testimonial</h5>
                                <h2 className="title">Lifelong Lessons: Stories from Our Elders</h2>
                                <p className="para pb-32">Our seniors are heart of our community, each one with a unique
                                    story and a lifetime of experiences that inspire us daily. Their testimonials speak
                                    to the resilience, kindness, and courage.</p>
                                <div className="btn-area pb-48">
                                    <a href="#" className="header-btn1">Learn More <span><FaArrowRight /></span></a>
                                </div>
                            </div>
                            <Row>
                                <Col lg={6} md={6} className="mb-30">
                                    <div className="icon-box-bg icon-box-bg2">
                                        <div className="icon">
                                            <span><img src={uparrow4} alt='uparrow4' /></span>
                                        </div>
                                        <h3 className="title"><span className="title counter">569</span> +</h3>
                                        <span>Satisficed Clients</span>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mb-30">
                                    <div className="icon-box-bg icon-box-bg2 active">
                                        <div className="icon">
                                            <span><img src={uparrow4} alt='uparrow4' /></span>
                                        </div>
                                        <h3 className="title"><span className="title counter">12</span> +</h3>
                                        <span>Years Of Experience</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Testimonial;