import logo2 from '@/assets/img/logo/vl-logo-2.1.png';
import logo1 from '@/assets/img/logo/vl-logo-2.1.png';
import { Link } from "react-router";
import footerLogo1 from '@/assets/img/logo/vl-footer-logo-1.1.png';
import { FaArrowRight, FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhoneVolume, FaXmark, FaYoutube } from 'react-icons/fa6';
import useToggle from '@/hooks/useToggle';
import { Col, Container, Row } from 'react-bootstrap';
import useScrollEvent from '@/hooks/useScrollEvent';
const Header = () => {
  const {
    scrollY
  } = useScrollEvent();
  const {
    isOpen,
    toggle
  } = useToggle();
  return <>
            <header>
                <div className={`header-area header-area2 homepage1 header header-sticky d-none d-lg-block ${scrollY > 100 && 'sticky'}`} id="header">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="header-elements header-elements-2">
                                    <div className="site-logo">
                                        <Link to="/"><img src={logo2} alt='logo2' /></Link>
                                    </div>
                                    <div className="main-menu main-menu-2">
                                        <ul>
                                            <li><a href="#service">Service</a></li>
                                            <li><a href="#about">About Us</a></li>
                                            <li><a href="#donation">Cause</a></li>
                                            <li><a href="#testimonial">Testimonial</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                        </ul>
                                    </div>
                                    <div className="home-btn-2">
                                        <Link to="/pages/contact" className="btn-2">Donate Now <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <div className="mobile-header mobile-haeder2 d-block d-lg-none">
                <Container>
                    <Col xs={12}>
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link to="/"><img src={logo1} alt='logo1' /></Link>
                            </div>
                            <div onClick={toggle} className="mobile-nav-icon mobile-nav-icon2 dots-menu">
                                <FaBars className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>
            <div className={`mobile-sidebar mobile-sidebar1 ${isOpen && 'mobile-menu-active'}`}>
                <div className="logosicon-area">
                    <div className="logos">
                        <img src={footerLogo1} alt='footerLogo1' />
                    </div>
                    <div onClick={toggle} className="menu-close">
                        <FaXmark className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <ul className="mobile-nav-list nav-list1">
                        <li><a href="#service">Service</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#donation">Cause</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                    <div className="allmobilesection">
                        <div className="vl-about-btn">
                            <Link to="/pages/contact" className="btn-primary2">Donate Now <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></Link>
                        </div>
                        <div className="vl-mobile-contact1">
                            <h3 className="title">Contact Info</h3>
                            <div className="footer1-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaPhoneVolume size={16} className="fa-solid fa-phone-volume" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="tel:+3(924)4596512">+3(924)4596512</a>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaEnvelope size={16} className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaLocationDot size={16} width={16} height={16} className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br /> New York
                                            11201,United States</a>
                                    </div>
                                </div>
                                <div className="vl-mobile-contact1">
                                    <h3 className="title">Social Links</h3>
                                    <div className="social-links-mobile-menu">
                                        <ul>
                                            <li><a href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#"><FaLinkedinIn className="fa-brands fa-linkedin-in" /></a>
                                            </li>
                                            <li><a href="#"><FaYoutube className="fa-brands fa-youtube" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
};
export default Header;