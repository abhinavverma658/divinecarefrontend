import thumb1 from '@/assets/img/testimonial/vl-testimonial-thumb-3.1.png';
import thumb2 from '@/assets/img/testimonial/vl-testimonial-thumb-3.2.png';
import thumb3 from '@/assets/img/testimonial/vl-testimonial-thumb-3.3.png';
import thumb4 from '@/assets/img/testimonial/vl-testimonial-thumb-3.4.png';
import thumb5 from '@/assets/img/testimonial/vl-testimonial-thumb-3.5.png';
import thumbBg3 from '@/assets/img/testimonial/testimonial-thumb-bg-3.3.png';
import arrowRight from '@/assets/img/icons/vl-arrowright.svg';
import arrowLeft from '@/assets/img/icons/vl-arrowleft.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
const Testimonial = () => {
  const slides = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb4];
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
  return <div id="testimonial" className="testimonial3-section-area sp1 sp" style={{
    backgroundImage: `url(${thumbBg3})`
  }}>
            <Container>
                <Row>
                    <Col lg={6} className="m-auto text-center">
                        <div className="heading2-w mb-60">
                            <span className="span1 mb-16 inline-block text-18 leading-18 white font-normal mb-16" data-aos="fade-left" data-aos-duration={700}>Testimonial</span>
                            <h2 className="testimonial-heading3 text-anime-style-3">Gratitude in Every Drop Water Aid
                                Stories</h2>
                        </div>
                    </Col>
                </Row>
                <Row className=" mt-60 sm:mt-30">

                    <Col lg={8} className="m-auto">
                        <div className="testimonial-sliders text-center" data-aos="zoom-out" data-aos-duration={1000}>
                            <Slider asNavFor={nav2} ref={sliderRef1} slidesToShow={5} slidesToScroll={1} arrows={false} dots={false} centerMode={true} className="testimonial-nav">
                                {slides.map((img, idx) => <div key={idx} className="single-testimonial-nav slick-slide slick-current slick-active slick-center">
                                            <img src={img} alt='img' />
                                        </div>)}
                            </Slider>
                            <Slider asNavFor={nav1} ref={sliderRef2} slidesToShow={1} slidesToScroll={1} arrows={false} focusOnSelect={true} className="slider-testimonial">
                                {slides.map(img => <div className="single-testimonial" key={img}>
                                            <h5 className="para">“Access to clean water has changed everything for
                                                our <br /> community. Before, we walked miles each day just to
                                                find <br /> water that wasn’t always safe, putting our health and
                                                time <br /> at risk. But now, thanks to this life-changing project.”</h5>
                                            <div className="author-area">
                                                <div className="heading pl-20">
                                                    <Link to="/pages/team" className="title">Leslie Alexander</Link>
                                                    <p className="desc">Volunteers</p>
                                                </div>
                                            </div>
                                        </div>)}
                            </Slider>
                            <div className="testimonial-arrows">
                                <div className="testimonial-prev-arrow">
                                    <button onClick={previous}><img src={arrowRight} alt='arrowRight' /></button>
                                </div>
                                <div className="testimonial-next-arrow">
                                    <button onClick={next}><img src={arrowLeft} alt='arrowLeft' /></button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default Testimonial;