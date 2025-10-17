import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { teamData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";
const Team = () => {
  return <section className="vl-team-bg-1 sp1">
            <Container>
                <div className="vl-team-section-title mb-60 text-center">
                    <div className="vl-section-title-1">
                        <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Meet
                            our Volunteer</h5>
                        <h2 className="title text-anime-style-3">We Have a Volunteer Team</h2>
                        <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Provide tips, articles, or
                            expert advice on maintaining a healthy work- <br />life balance, managing, Workshops or
                            seminars organizational.</p>
                    </div>
                </div>
                <Row id='team1'>
                    <Swiper modules={[Autoplay, Navigation]} autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }} slidesPerView={4} navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }} loop breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }} spaceBetween={30}>
                        {teamData?.map((item, idx) => <SwiperSlide className="vl-team-parent" key={idx}>
                                <div className="vl-team-thumb">
                                    <img width={301} height={357} className="w-100" src={item.image} alt='team' />
                                </div>
                                <div className="vl-team-content text-center">
                                    <Link to="/pages/team" className="title">{item.name}</Link>
                                    <span>{item.role}</span>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>
                    <div className='owl-nav'>
                        <button className="owl-prev swiper-button-prev">
                            <img src={arrowLeft} alt="arrowLeft" />
                        </button>

                        <button className="owl-next swiper-button-next">
                            <img src={angleRight} alt="angleRight" />
                        </button>
                    </div>
                </Row>
            </Container>
        </section>;
};
export default Team;