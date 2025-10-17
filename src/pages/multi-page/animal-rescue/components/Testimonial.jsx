import testimonial1 from '@/assets/img/icons/vl-testimnial-2.1.svg';
import test2 from '@/assets/img/icons/vl-test-2.2.svg';
import shape1 from '@/assets/img/icons/vl-testimonial-shape-arow-2.1.svg';
import cat from '@/assets/img/icons/vl-testimonial-cat-2.1.svg';
import goldQuote from '@/assets/img/icons/vl-gold-quote.svg';
import testimonialSm1 from '@/assets/img/testimonial/vl-testimonial-sm-2.1.png';
import testimonial2 from '@/assets/img/icons/vl-testimonial-2.1.svg';
import shape2 from '@/assets/img/shape/testimonial-shape2.png';
import testimonialSm2 from '@/assets/img/testimonial/vl-testimonial-sm-2.2.png';
import testimonial21 from '@/assets/img/testimonial/vl-testimonial-2.1.png';
import testimonialLar from '@/assets/img/testimonial/vl-testimimonial-lar-2.1.png';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Testimonial = () => {
  return <section className="vl-testimonial-2 sp2">
            <div className="shape shape-1"><img src={testimonial1} alt='testimonial1' /></div>
            <div className="shape shape-2"><img src={test2} alt='test2' /></div>
            <div className="shape shape-3"><img src={test2} alt='test2' /></div>
            <div className="shape shape-4"><img src={test2} alt='test2' /></div>
            <div className="shape shape-5"><img src={test2} alt='test2' /></div>
            <div className="shape shape-6"><img src={cat} alt='cat' /></div>
            <div className="container">
                <div className="large-shape"><img src={shape1} alt='shape1' /></div>
                <Row>
                    <Col lg={6}>
                        <div className="vl-testimonial-content">
                            <div className="vl-section-title-3">
                                <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Testimonial</h4>
                                <h2 className="title text-anime-style-3">New Beginnings: Stories <br /> of Rescue and
                                    Rebirth</h2>
                                <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Adopting our dog from
                                    this rescue has truly changed our lives. <br /> When we first met him, he was
                                    shy &amp; a bit scared, but love.</p>
                            </div>
                            <Swiper modules={[Autoplay, Navigation]} autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }} slidesPerView={1} navigation={{
              nextEl: ".owl-next",
              prevEl: ".owl-prev"
            }} loop spaceBetween={30}>
                                <div id="vl-testimonial-active2" className="owl-carousel owl-theme">
                                    <SwiperSlide className="vl-single-testimonial-box">
                                        <div className="icon">
                                            <ul>
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <p>“The compassion and dedication of this organization are incredible they
                                                gave our dog a second chance at life, &amp; now he’s a cherished part of
                                                our family so grateful for the work they do every day.”</p>
                                        </div>
                                        <div className="auth-flex">
                                            <div className="thumb">
                                                <img src={testimonial21} alt='testimonial21' />
                                            </div>
                                            <div className="content">
                                                <h4 className="title"><Link to="/pages/team">Cecelia Tremblay</Link>
                                                </h4>
                                                <span>Volunteer</span>
                                            </div>
                                        </div>
                                        <div className="quote-ic">
                                            <span><img src={goldQuote} alt='goldQuote' /></span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="vl-single-testimonial-box">
                                        <div className="icon">
                                            <ul>
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                                <li><span className='d-flex aline-items-center'><img src={testimonial2} alt='testimonial2' /></span>
                                                </li>
                                                &nbsp;
                                            </ul>
                                        </div>
                                        <div className="content">
                                            <p>“The compassion and dedication of this organization are incredible they
                                                gave our dog a second chance at life, &amp; now he’s a cherished part of
                                                our family so grateful for the work they do every day.”</p>
                                        </div>
                                        <div className="auth-flex">
                                            <div className="thumb">
                                                <img src={testimonial21} alt='testimonial21' />
                                            </div>
                                            <div className="content">
                                                <h4 className="title"><Link to="/pages/team">Cecelia Tremblay</Link>
                                                </h4>
                                                <span>Volunteer</span>
                                            </div>
                                        </div>
                                        <div className="quote-ic">
                                            <span><img src={goldQuote} alt='goldQuote' /></span>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className="vl-test-thumb-2 mb-30">
                                    <div className="testi-top-shape">
                                        <img src={shape2} alt='shape2' />
                                    </div>
                                    <img className="w-100 reveal" src={testimonialLar} alt='testimonialLar' />
                                </div>
                            </Col>
                            <Col lg={6} md={6}>
                                <div className="vl-test-sm-thumb mb-30 reveal">
                                    <img className="w-100" src={testimonialSm1} alt='testimonialSm1' />
                                </div>
                                <div className="vl-test-sm-thumb mb-30 reveal">
                                    <img className="w-100" src={testimonialSm2} alt='testimonialSm2' />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>;
};
export default Testimonial;