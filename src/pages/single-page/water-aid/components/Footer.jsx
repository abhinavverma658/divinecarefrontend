import footerLogo from '@/assets/img/logo/vl-footer-logo-1.1.png';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return <footer className="vl-footer-bg-1 vl-footer-bg-3">
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-1 mb-30">
                            <div className="vl-footer-logo">
                                <Link to="/multi-page/water-aid"><img src={footerLogo} alt='footerLogo' /></Link>
                            </div>
                            <div className="vl-footer-content">
                                <p>Now the time act because every second counts, and contribution brings one step closer
                                    a brighter future Join us today &amp; difference.</p>
                            </div>
                            <div className="vl-footer-social-1">
                                <ul>
                                    <li><a className='d-flex align-items-center justify-content-center' href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                    <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                    <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                    <li><a className='d-flex align-items-center justify-content-center' href="#"><FaGithub className="fa-brands fa-github" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="vl-footer-widget-2 pl-90 mb-30">
                            <h3 className="title">Quick Links</h3>
                            <div className="vl-footer-menu">
                                <ul>
                                    <li><Link to="/multi-page/water-aid">Home Page</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/pages/contact">Appointment</Link></li>
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
                        <div className="vl-footer-widget-4 mb-30">
                            <h3 className="title">Subscribe Newsletter</h3>
                            <div className="newsletter-form">
                                <form action="#">
                                    <input type="email" placeholder="Enter Your Email" />
                                </form>
                                <button className="form-btn">Subscribe</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="vl-copyright">
                    <Row>
                        <Col md={6}>
                            <p className="vl-copyright-text">© 2025 Helpy ,Inc. All Rights Reserved.</p>
                        </Col>
                        <Col md={6}>
                            <div className="vl-copyright-menu">
                                <ul>
                                    <li><a href="#">Privacy Policy </a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>;
};
export default Footer;