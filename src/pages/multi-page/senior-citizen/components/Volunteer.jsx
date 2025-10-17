import { volunteerData } from '../data';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Volunteer = () => {
  return <section id="volunteer" className="vl-team4 sp1">
            <Container>
                <Row>
                    <Col lg={7} className="mx-auto">
                        <div className="vl-section-title4 text-center mb-60">
                            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Meet Our Volunteer</h5>
                            <h2 className="title text-anime-style-2">We Have a Volunteer Team</h2>
                            <p className="para" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Provide
                                tips, articles, or expert advice on maintaining a healthy work- <br /> life balance,
                                managing, Workshops or seminars organizational.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Swiper modules={[Autoplay, Navigation]} autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }} slidesPerView={4} navigation={{
          nextEl: ".owl-next",
          prevEl: ".owl-prev"
        }} loop breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // For small screens
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // For tablets
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          } // For desktops
        }} spaceBetween={30}>
                        <div id="team4" className="owl-carousel owl-theme">
                            {volunteerData.map((item, idx) => <SwiperSlide className="vl-single-team-member" key={idx}>
                                        <div className="thumb">
                                            <img className="w-100 img-fluid" src={item.image} alt='team' />
                                            <div className="thumb-content text-center">
                                                <div className="content">
                                                    <Link to="/pages/team" className="title">{item.name}</Link>
                                                    <span>{item.position}</span>
                                                </div>
                                                <div className="vl-team-social">
                                                    <ul>
                                                        <li><a href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                                        <li><a href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                                        <li><a href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                                        <li><a href="#"><FaGithub className="fa-brands fa-github" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>)}
                        </div>
                    </Swiper>
                </Row>
            </Container>
        </section>;
};
export default Volunteer;