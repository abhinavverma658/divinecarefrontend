import logo1Img from '@/assets/img/logo/vl-logo-1.1.png';
import useScrollEvent from '@/hooks/useScrollEvent';
import { Link } from "react-router";
import SingleMobileMenu from './SingleMobileMenu';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
const Header = () => {
  const {
    scrollY
  } = useScrollEvent();
  return <>
            <header>
                <div className={`header-area homepage1 header header-sticky d-none d-lg-block mt-16 ${scrollY > 100 && 'sticky'}`} id="header">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="header-elements header-elements-1">
                                    <div className="site-logo">
                                        <Link to="/"><img src={logo1Img} alt='logo1Img' /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#cause">Cause</a></li>
                                            <li><a href="#event">Event</a></li>
                                            <li><a href="#testimonial">Testimonial</a></li>
                                            <li><a href="#gallery">Gallery</a></li>
                                            <li><a href="#volunteer">Volunteer</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <Link to="/pages/contact" className="header-btn1">Donate <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <SingleMobileMenu />
        </>;
};
export default Header;