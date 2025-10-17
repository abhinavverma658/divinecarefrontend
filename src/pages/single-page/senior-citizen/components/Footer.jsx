import footerIcon1 from '@/assets/img/icons/vl-footer-ic-1.1.svg';
import footerIcon2 from '@/assets/img/icons/vl-footer-ic-1.2.svg';
import footerIcons from '@/assets/img/icons/vl-footer-2.1.svg';
import logo4 from '@/assets/img/logo/vl-footer-logo4.1.png';
import brandLogo1 from '@/assets/img/brand/brand-logo-4.1.png';
import brandLogo2 from '@/assets/img/brand/brand-logo-4.2.png';
import brandLogo3 from '@/assets/img/brand/brand-logo-4.3.png';
import brandLogo4 from '@/assets/img/brand/brand-logo-4.4.png';
import brandLogo5 from '@/assets/img/brand/brand-logo-4.5.png';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Footer = () => {
  return <footer className="vl-footer-bg-4">
            <Container>
                <Row>
                    <div id="vl-brand-active4" className="owl-carousel owl-theme">
                        <Swiper modules={[Autoplay]} autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }} slidesPerView={5} loop spaceBetween={30} breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30
            }
          }}>
                            <SwiperSlide className="single-brand-logo">
                                <img src={brandLogo1} alt='brandLogo1' />
                            </SwiperSlide>
                            <SwiperSlide className="single-brand-logo">
                                <img src={brandLogo2} alt='brandLogo2' />
                            </SwiperSlide>
                            <SwiperSlide className="single-brand-logo">
                                <img src={brandLogo3} alt='brandLogo3' />
                            </SwiperSlide>
                            <SwiperSlide className="single-brand-logo">
                                <img src={brandLogo4} alt='brandLogo4' />
                            </SwiperSlide>
                            <SwiperSlide className="single-brand-logo">
                                <img src={brandLogo5} alt='brandLogo5' />
                            </SwiperSlide>
                            <SwiperSlide className="single-brand-logo">
                                <img src={brandLogo1} alt='brandLogo1' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-1 mb-30">
                            <div className="vl-footer-logo">
                                <Link to="/multi-page/senior-citizen"><img src={logo4} alt='logo4' /></Link>
                            </div>
                            <div className="vl-footer-content">
                                <p className="para">Now the time act because every second counts, and contribution
                                    brings one step closer a brighter future Join us today &amp; difference.</p>
                            </div>
                            <div className="vl-footer-social-1">
                                <ul>
                                    <li><a href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                    <li><a href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                    <li><a href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                    <li><a href="#"><FaGithub className="fa-brands fa-github" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-2 pl-90 mb-30">
                            <h3 className="title">Quick Links</h3>
                            <div className="vl-footer-menu">
                                <ul>
                                    <li><Link to="/multi-page/senior-citizen">Home Page</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><a href="#">Appointment</a></li>
                                    <li><Link to="/blog">News &amp; Blog</Link></li>
                                    <li><a href="#">Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-2 pl-30 mb-30">
                            <h3 className="title">Our services</h3>
                            <div className="vl-footer-menu">
                                <ul>
                                    <li><a href="#">Donation Online</a></li>
                                    <li><a href="#">Donor Centres</a></li>
                                    <li><Link to="/pages/team">Volunteering</Link></li>
                                    <li><a href="#">Your Philanthropy</a></li>
                                    <li><a href="#">Senior Care</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-3 mb-30">
                            <h3 className="title">Contact Us</h3>
                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span><img src={footerIcon1} alt='footerIcon1' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="mailto:support@charity.com">support@charity.com</a>
                                </div>
                            </div>
                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span><img src={footerIcon2} alt='footerIcon2' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="#">8708 Technology Forest <br /> Pl Suite 125 -G, The Woodlands, TX 773</a>
                                </div>
                            </div>
                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span><img src={footerIcons} alt='footerIcons' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="tel:1234567890">123-456-7890</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="vl-copyright">
                    <Row>
                        <Col lg={12} className="text-center">
                            <p className="vl-copyright-text">© 2025 Helpy ,Inc. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>;
};
export default Footer;