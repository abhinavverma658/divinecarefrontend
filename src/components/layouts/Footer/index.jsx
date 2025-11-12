import footerLogo from '@/assets/img/logo/16.png';
import footerIc1 from '@/assets/img/icons/vl-footer-ic-1.1.svg';
import footerIc2 from '@/assets/img/icons/vl-footer-ic-1.2.svg';
import footerIc3 from '@/assets/img/icons/vl-footer-2.1.svg';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return <footer className="vl-footer-bg-1">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/"><img src={footerLogo} alt='footerLogo' /></Link>
              </div>
              <div className="vl-footer-content">
                <p>Now the time act because every second counts, and contribution brings one step closer a brighter future Join us today &amp; difference.</p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
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
                  <li><Link to="/event">Events</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/blog">Stories</Link></li>
                  <li><Link to="/pages/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our Services</h3>
              <div className="vl-footer-menu">
                <ul style={{ lineHeight: '2.5' }}>
                  <li><a href="#">Community Living</a></li>
                  <li><a href="#">Community Development Services</a></li>
                  <li><Link to="#">Personal Supports</Link></li>
                  <li><a href="#">Supported Living</a></li>
                  <li><a href="#">Respite Care</a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc1} alt='footerIc1' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:hello@divinecareinc.com">hello@divinecareinc.com</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc2} alt='footerIc2' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="https://maps.app.goo.gl/vqXXVx3BxKkHhnBd6">19733 Executive Park Circle.<br/>
Germantown, Maryland 20874</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span><img src={footerIc3} alt='footerIc3' /></span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:3012812285">301-281-2285</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright copyright-border-1">
          <Row>
            <Col md={6}>
              <p className="vl-copyright-text underline">© 2025 Developed By <Link to="https://quantumitinnovation.com/" style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'inherit' }}>Quantum IT Innovation</Link></p>
            </Col>
            <Col md={6}>
              <div className="vl-copyright-menu">
                <ul>
                  <li><a href="#"style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'inherit' }}>Privacy Policy </a></li>
                  <li><a href="#"style={{ textDecoration: 'underline', fontWeight: 'bold', color: 'inherit' }}>Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>;
};
export default Footer;