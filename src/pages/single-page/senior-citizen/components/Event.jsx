import { eventData } from '../data';
import clock4Icon from '@/assets/img/icons/vl-event-clock4.1.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Event = () => {
  return <section id="event" className="vl-event-area sp1">
            <Container className="p-relative">
                <Row>
                    <Col lg={7}>
                        <div className="vl-section-title4 mb-60">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Latest Event</h5>
                            <h2 className="title text-anime-style-3">We are Celebrating Lifetime</h2>
                            <p className="para" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Join us
                                for unforgettable celebration honoring invaluable contributions <br /> of our senior
                                citizens, those who have shaped our communities.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Swiper modules={[Autoplay, Navigation]} autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }} slidesPerView={3} navigation={{
          nextEl: ".owl-next",
          prevEl: ".owl-prev"
        }} breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }} loop spaceBetween={30}>
                        <div id="event4" className="owl-carousel owl-theme">
                            {eventData.map((item, idx) => <SwiperSlide className="vl-single-event4" key={idx}>
                                        <div className="thumb">
                                            <img className="w-100 img-fluid" src={item.image} alt='event' />
                                        </div>
                                        <div className="content">
                                            <div className="icon-flex">
                                                <div className="icon">
                                                    <span><img src={clock4Icon} alt='clock4Icon' /></span>
                                                </div>
                                                <div className="text">
                                                    <a href="#" className="date">{item.date}</a> <br />
                                                    <span>( {item.time} )</span>
                                                </div>
                                            </div>
                                            <Link to="/event-single" className="title">{item.title}</Link>
                                            <p className="para">{item.description}</p>
                                            <Link to="/event-single" className="details">Events
                                                Details <span><FaArrowRight /></span></Link>
                                        </div>
                                    </SwiperSlide>)}
                        </div>
                    </Swiper>
                </Row>
            </Container>
        </section>;
};
export default Event;