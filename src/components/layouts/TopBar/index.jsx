import logo1 from '@/assets/img/logo/16.png';
import useScrollEvent from '@/hooks/useScrollEvent';
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import TopMenu from '../TopMenu';
import MobileMenu from './MobileMenu';
import { Col, Container, Row } from 'react-bootstrap';
const TopBar = ({ isHeroLoading = false }) => {
    const { scrollY } = useScrollEvent();
    // Add conditional class for loading state
    const headerClass = `header-area homepage1 header header-sticky d-none d-lg-block mt-16 ${scrollY > 100 ? 'sticky' : ''} ${isHeroLoading ? 'header-loading' : ''}`;
    return <>
        <header>
            <div className={headerClass} id="header">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="header-elements header-elements-1">
                                <div className="site-logo">
                                    <Link to="https://divinecarewebsite.vercel.app/"><img src={logo1} alt='logo1' /></Link>
                                </div>
                                <div className="main-menu">
                                    <TopMenu isHeroLoading={isHeroLoading} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
        <MobileMenu />
        {/* Inline style for demo, move to CSS file for production */}
        <style>{`
            .header-loading .header-elements{
                background: #808080 !important;
                transition: background 0.3s;
            }
            .header-loading .main-menu,
            .header-loading .main-menu a,
            .header-loading .main-menu .menu-item {
                color: #fff !important;
            }
        `}</style>
    </>;
};
export default TopBar;