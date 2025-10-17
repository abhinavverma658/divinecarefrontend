import footer1 from '@/assets/img/icons/vl-footer-2.1.svg';
import footer2 from '@/assets/img/icons/vl-footer-2.2.svg';
import footer3 from '@/assets/img/icons/vl-footer-2.3.svg';
import footer4 from '@/assets/img/icons/vl-footer-2.4.svg';
import footerLogo1 from '@/assets/img/logo/vl-footer-logo-1.1.png';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Footer = () => {
  return <footer className="vl-footer-bg-1 vl-footer-bg-2">
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-1 mb-30">
                            <div className="vl-footer-logo">
                                <a href="#"><img src={footerLogo1} alt='footerLogo1' /></a>
                            </div>
                            <div className="vl-footer-content">
                                <p>Now the time act because every second counts, and contribution brings one step closer
                                    a brighter future Join us today &amp; difference.</p>
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
                                    <li><Link to="/">Home Page</Link></li>
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
                                    <span><img src={footer1} alt='footer1' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="tel:11234567890">+1 123 456 7890</a>
                                </div>
                            </div>
                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span><img src={footer2} alt='footer2' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="#">421 Allen, Mexico 4233</a>
                                </div>
                            </div>
                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span><img src={footer3} alt='footer3' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="mailto:animalaescue&welfare@com">animalaescue&amp;welfare@com</a>
                                </div>
                            </div>
                            <div className="vl-footer-icon-list">
                                <div className="vl-footer-icon">
                                    <span><img src={footer4} alt='footer4' /></span>
                                </div>
                                <div className="vl-footer-text">
                                    <a href="url:animalaescue&welfare.com">animalaescue&amp;welfare.com</a>
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