import logo1 from '@/assets/img/logo/16.png';
import useScrollEvent from '@/hooks/useScrollEvent';
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import TopMenu from '../TopMenu';
import MobileMenu from './MobileMenu';
import { Col, Container, Row } from 'react-bootstrap';
const TopBar = () => {
  const {
    scrollY
  } = useScrollEvent();
  return <>
            <header>
                <div className={`header-area  homepage1 header header-sticky d-none d-lg-block mt-16 ${scrollY > 100 && 'sticky'}`} id="header">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="header-elements header-elements-1">
                                    <div className="site-logo">
                                        <Link to="https://divinecarewebsite.vercel.app/"><img src={logo1} alt='logo1' /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <TopMenu />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <MobileMenu />
        </>;
};
export default TopBar;