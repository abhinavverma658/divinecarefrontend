import { Link, useLocation } from "react-router";
import { FaAngleDown, FaArrowRight } from 'react-icons/fa6';
import demo1Img from '@/assets/img/demo/vl-demo1.1.png';
import demo2Img from '@/assets/img/demo/vl-demo-1.2.png';
import demo3Img from '@/assets/img/demo/vl-demo-1.3.png';
import demo4Img from '@/assets/img/demo/vl-demo-1.4.png';
import demo5Img from '@/assets/img/demo/vl-demo-1.5.png';
import { Col, Row } from 'react-bootstrap';
const TopMenu = () => {
        const location = useLocation();
        const currentPath = location.pathname;
        return <>
            <style>{`
                .active-menu {
                    color: #ffbe2c !important;
                    font-weight: 600;
                }
                /* Ensure active menu stays highlighted when header is sticky */
                .header-area.homepage1.sticky .header-elements .main-menu ul li a.active-menu {
                    color: #ffbe2c !important;
                }
            `}</style>
            <ul>
            <li>
                <Link to="/" className={currentPath === '/' ? 'active-menu' : ''}>Home</Link>
                {/* <div className="tp-submenu">
                    <Row>
                        <Col lg={12}>
                            <div className="d-flex">
                                <div className="homemenu-thumb">
                                    <div className="img1">
                                        <img src={demo1Img} width={229} height={317} alt='demo1Img' />
                                    </div>
                                    <div className="homemenu-btn">
                                        <Link className="header-btn1 mb-20" to="/">Multi
                                            Page <span><FaArrowRight /></span></Link>
                                        <Link className="header-btn1" to="/home-single">One Page <span><FaArrowRight /></span></Link>
                                    </div>
                                    <h4 className="home-thumb-title">Disaster Relief</h4>
                                </div>

                                <div className="homemenu-thumb">
                                    <div className="img1">
                                        <img src={demo2Img} width={229} height={317} alt='demo2Img' />
                                    </div>
                                    <div className="homemenu-btn">
                                        <Link className="header-btn1 mb-20" to="/multi-page/animal-rescue">Multi
                                            Page <span><FaArrowRight /></span></Link>
                                        <Link className="header-btn1" to="/animal-rescue">One
                                            Page <span><FaArrowRight /></span></Link>
                                    </div>
                                    <h4 className="home-thumb-title">Animal Rescue and Welfare</h4>
                                </div>
                                <div className="homemenu-thumb">
                                    <div className="img1">
                                        <img src={demo3Img} width={229} height={317} alt='demo3Img' />
                                    </div>
                                    <div className="homemenu-btn">
                                        <Link className="header-btn1 mb-20" to="/multi-page/water-aid">Multi
                                            Page <span><FaArrowRight /></span></Link>
                                        <Link className="header-btn1" to="/water-aid">One
                                            Page <span><FaArrowRight /></span></Link>
                                    </div>
                                    <h4 className="home-thumb-title">Water aid</h4>
                                </div>
                                <div className="homemenu-thumb">
                                    <div className="img1">
                                        <img src={demo4Img} width={229} height={317} alt='demo4Img' />
                                    </div>
                                    <div className="homemenu-btn">
                                        <Link className="header-btn1 mb-20" to="/multi-page/senior-citizen">Multi
                                            Page <span><FaArrowRight /></span></Link>
                                        <Link className="header-btn1" to="/senior-citizen">One
                                            Page <span><FaArrowRight /></span></Link>
                                    </div>
                                    <h4 className="home-thumb-title">Senior Citizen</h4>
                                </div>
                                <div className="homemenu-thumb">
                                    <div className="img1">
                                        <img src={demo5Img} width={229} height={317} alt='demo5Img' />
                                    </div>
                                    <div className="homemenu-btn">
                                        <Link className="header-btn1 mb-20" to="/multi-page/human-rights">Multi
                                            Page <span><FaArrowRight /></span></Link>
                                        <Link className="header-btn1" to="/human-rights">One
                                            Page <span><FaArrowRight /></span></Link>
                                    </div>
                                    <h4 className="home-thumb-title"> Human Rights Advocacy</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div> */}
            </li>
            <li><Link to="/about" className={currentPath === '/about' ? 'active-menu' : ''}>About Us</Link></li>
            <li><Link to="/event" className={currentPath === '/event' ? 'active-menu' : ''}>Events</Link>
                {/* <ul className="dropdown-padding">
                    <li><Link to="/event">Events</Link></li>
                    <li><Link to="/event-left">Events Left</Link></li>
                    <li><Link to="/event-right">Events Right</Link></li>
                    <li><Link to="/event-single">Events Single</Link></li>
                </ul> */}
            </li>
            {/* <li><a href="#">Blogs <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
                <ul className="dropdown-padding">
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog-left">Blog Left</Link></li>
                    <li><Link to="/blog-right">Blog Right</Link></li>
                    <li><Link to="/blog-single">Blog Single</Link></li>
                </ul>
            </li> */}
            <li><Link to="/pages/service" className={currentPath === '/pages/service' ? 'active-menu' : ''}>Services</Link>
                 {/* <ul className="dropdown-padding">
                                    <li><Link to="/pages/service">Our Services</Link></li>
                                    <li><Link to="/pages/team">Our Volunteers</Link></li>
                                    <li><Link to="/pages/faq">FAQ</Link></li>
                                    <li><Link to="/pages/contact">Contact</Link></li>
                                    <li><Link to="/pages/error-404">404</Link></li>
                                </ul>  */}
                            </li>
            <li><Link to="/career" className={currentPath === '/career' ? 'active-menu' : ''}>Careers</Link></li>
            <li><Link to="/blog" className={currentPath === '/blog' ? 'active-menu' : ''}>Stories</Link></li>
            <li><Link to="/pages/contact" className={currentPath === '/pages/contact' ? 'active-menu' : ''}>Contact Us</Link></li>
                            {/* <li><a href="#">Causes <FaAngleDown className="fa-solid fa-angle-down align-bottom" /></a>
                                <ul className="dropdown-padding">
                                    <li><Link to="/cause">Causes</Link></li>
                                    <li><Link to="/cause-left">Causes Left</Link></li>
                                    <li><Link to="/cause-right">Causes Right</Link></li>
                                    <li><Link to="/cause-single">Causes Single</Link></li>
                                </ul>
                            </li> */}
            </ul>
        </>;
};
export default TopMenu;