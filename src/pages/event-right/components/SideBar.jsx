import { useState } from 'react';
import searchIcon from '@/assets/img/icons/vl-search-icon.svg';
import arrowDown from '@/assets/img/icons/vl-arrow-down.svg';
import phoneEvent from '@/assets/img/icons/vl-phone-event.svg';
import thumbImg from '@/assets/img/event/vl-learg-thumb-enent.png';
import eventDate1 from '@/assets/img/icons/vl-event-date1.1.svg';
import eventLocal from '@/assets/img/icons/vl-event-loca1.1.svg';
import dollarImg from '@/assets/img/icons/dollar.svg';
import customImg from '@/assets/img/icons/custom-amou.svg';
import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
const SideBar = () => {
  const prices = [10, 20, 30, 40, 50];
  const [value, setValue] = useState(10);
  return <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="vl-event-content-area mr-50">
                            <div className="vl-large-thumb">
                                <img className="w-100 img-fluid" src={thumbImg} alt='thumbImg' />
                            </div>
                            <div className="vl-event-content">
                                <h2 className="title">Unity Giving Community Charity Event</h2>
                                <p className="para pb-16">Our events bring people together to make a difference, uniting
                                    communities in support of meaningful causes. Each event—whether a fundraiser,
                                    awareness campaign, or volunteer day—serves as an opportunity to create real
                                    impact. </p>
                                <p className="para pb-32">Through activities, guest speakers, and interactive sessions,
                                    we provide a platform for supporters to learn, connect, and contribute. Every event
                                    is designed not only to raise.</p>
                            </div>
                            <div className="vl-event-box-bg">
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="icon-box mb-30">
                                            <div className="icon">
                                                <span><img src={eventDate1} alt='eventDate1' /></span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Events Date</h4>
                                                <p className="para">January 1, 2025 <br /> 5:00 pm</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="icon-box mb-30">
                                            <div className="icon">
                                                <span><img src={eventLocal} alt='eventLocal' /></span>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Events Location</h4>
                                                <p className="para">Vineyard Venues 5396 <br /> North Reese Avenue</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="btn-area pb-32">
                                        <Link to="/pages/contact" className="header-btn1">Join This
                                            Event <span><FaArrowRight /></span></Link>
                                    </div>
                                    <div className="amot">
                                        <div className="display-amount" id="displayAmount">${value}</div>
                                    </div>
                                    <div className="amount-selector">
                                        {prices.map((num, idx) => <button className={`button ${num == value && 'selected'}  `} onClick={() => setValue(num)} key={idx}><span><img src={dollarImg} alt='dollarImg' /></span>{num}</button>)}
                                        <div className="custom-button">
                                            Custom Amount <span><img src={customImg} alt='customImg' /></span>
                                        </div>
                                    </div>
                                    <div className="space-div">
                                        <div className="select-method">
                                            <h4 className="title pb-32">Select Payment Method</h4>
                                            <div className="select-meth">
                                                <div className="online">
                                                    <input type="radio" id="Online" name="fav_language" defaultValue="Online" />
                                                    <label htmlFor="Online">Online Donation</label><br />
                                                </div>
                                                <div className="ofline">
                                                    <input type="radio" id="Offline" name="fav_language" defaultValue="Offline" />
                                                    <label htmlFor="Offline">Offline Donation</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donate-form">
                                        <form action="#">
                                            <Row>
                                                <Col lg={4} md={6} className="mb-20">
                                                    <input type="text" placeholder="First Name" />
                                                </Col>
                                                <Col lg={4} md={6} className="mb-20">
                                                    <input type="text" placeholder="Last Name" />
                                                </Col>
                                                <Col lg={4} md={6} className="mb-20">
                                                    <input type="email" placeholder="Email Address" />
                                                </Col>
                                            </Row>
                                        </form>
                                        <div className="total-anoumt">
                                            <div className="toal">
                                                <div className="btn-area">
                                                    <button className="header-btn1">Donate <span><FaArrowRight /></span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h2 className="title">Donation Total: $10</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className="event-content-area">
                                <h2 className="title">Join Us in Making a Difference</h2>
                                <p className="para">We invite you to join us, meet like-minded individuals, and become
                                    part of a movement that makes real, lasting change. Whether you attend, volunteer,
                                    or help spread the word, your involvement is invaluable. Explore our upcoming
                                    events.</p>
                                <h2 className="title">Event Highlights &amp; Details</h2>
                                <p className="para">Our events are designed to unite passionate individuals, raise
                                    critical funds, &amp; increase awareness for the causes we serve. Each event offers
                                    a unique opportunity to connect, contribute, and witness the power of community in
                                    action.</p>
                                <p className="para">Our events are opportunities to bring people together for meaningful
                                    causes, creating moments of connection and impact that extend far beyond the day
                                    itself.</p>
                                <h2 className="title">Upcoming Fundraisers and Community Events</h2>
                                <p className="para">From heartwarming charity dinners to hands-on volunteer days, these
                                    gatherings allow us to celebrate milestones, share stories of impact, and inspire
                                    further action. By joining us at our upcoming events, you’re not just attending
                                    you’re becoming part movement.</p>
                                <p className="para">Each event, whether a fundraiser, awareness campaign, volunteer
                                    drive, or community gathering, plays a vital role in supporting our mission and
                                    raising essential resources.</p>
                                <h2 className="title">Event Details and How to Participate</h2>
                                <p className="para">Whether you attend, volunteer, or help spread the word, your
                                    involvement is invaluable. Explore our upcoming events, find ways to get involved,
                                    and help us create brighter futures for those in need. Together, we can make an
                                    extraordinary impact!</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="vl-widget-area">
                            <div className="vl-search-widget mb-30">
                                <h3 className="title">Search</h3>
                                <div className="search p-relative">
                                    <input type="text" placeholder="Search..." />
                                    <span>
                    <img src={searchIcon} alt='searchIcon' />
                  </span>
                                </div>
                            </div>
                            <div className="vl-search-widget mb-30">
                                <h3 className="title">Our Services</h3>
                                <div className="vl-single-service">
                                    <a href="#">Supply Chain Management</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Mergers And Acquisitions</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Investment Strategies</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Wealth Management</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Transformation in Finance</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                            </div>
                            <div className="vl-phone-widget mb-30">
                                <h3 className="title">If You Need Any Help <br /> Contact With Us</h3>
                                <a href="#" className="phone"> <span><img src={phoneEvent} alt='phoneEvent' /></span>+123
                                    456 7890</a>
                            </div>
                            <div className="vl-social-widget mb-30">
                                <h3 className="title">Follow Us</h3>
                                <div className="social-icon">
                                    <ul>
                                        <li><a href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                        <li><a href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                        <li><a href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                        <li><a href="#"><FaGithub className="fa-brands fa-github" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default SideBar;