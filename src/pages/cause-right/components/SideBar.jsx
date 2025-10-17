import { useState } from 'react';
import searchIcon from '@/assets/img/icons/vl-search-icon.svg';
import arrowDown from '@/assets/img/icons/vl-arrow-down.svg';
import phoneEvent from '@/assets/img/icons/vl-phone-event.svg';
import thumbImg from '@/assets/img/cause/vl-cause-learge-thumb.png';
import customImg from '@/assets/img/icons/custom-amou.svg';
import dollarImg from '@/assets/img/icons/dollar.svg';
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
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
                            <div className="vl-event-box-bg cause-box-bg">
                                <Row>
                                    <div className="skill-progress">
                                        <div className="skill-box">
                                            <div className="skill-bar">
                        <span className="skill-per html">
                          <span className="tooltipp">16%</span>
                        </span>
                                            </div>
                                            <div className="skill-vlue">
                                                <div className="num1"><span>Goal: </span>$90,000</div>
                                                <div className="num1"><span>Raised: </span>$26,000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="display-amount" id="displayAmount">${value}</div>
                                    <div className="amount-selector">
                                        {prices.map((num, idx) => <button className={`button ${num == value && 'selected'}  `} onClick={() => setValue(num)} key={idx}><span><img src={dollarImg} alt='dollarImg' /></span>{num}</button>)}
                                        <div className='custom-button'>
                                            Custom Amount <span><img src={customImg} alt='customImg' /></span>
                                        </div>
                                    </div>
                                </Row>
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
                            </div>

                            <div className="event-content-area">
                                <h2 className="title">Hunger Relief and Food</h2>
                                <p className="para">Our causes reflect the diverse and pressing needs of communities
                                    worldwide. From supporting education and healthcare to providing disaster relief and
                                    environmental protection, each cause we champion is a step a more just &
                                    compassionate world.</p>

                                <p className="para">
                                    We work closely with local partners to identify areas where our support can make the
                                    greatest impact, ensuring that every donation and effort goes directly toward
                                    creating.
                                </p>

                                <h2 className="title">Creating Lasting Impact Together</h2>
                                <p className="para">Our causes represent the heart of our mission, each one addressing
                                    critical need within our communities. From providing access to clean water &
                                    nutritious food to supporting education, healthcare, and disaster relief, we work
                                    tirelessly to uplift and empower.</p>


                                <h2 className="title">Transforming Lives and Communities</h2>
                                <p className="para">Every cause we champion is chosen for its potential to create
                                    meaningful, sustainable change and to build a foundation for a brighter, more
                                    equitable future. By focusing our efforts on these key areas, we’re able to drive
                                    long-term impact and support.</p>
                                <p className="para">Each cause we support reflects our commitment to addressing urgent
                                    needs
                                    & creating sustainable change. Our focus include providing access to clean water,
                                    supporting.</p>

                                <h2 className="title">Causes That Matter</h2>
                                <p className="para">By focusing our efforts on these key areas, we’re able to drive
                                    long-term impact and support the resilience of individuals and families worldwide.
                                    Join us as we continue to make a difference where it’s needed most, turning hope
                                    into action, one cause at a time.</p>

                                <p className="para">We’re able to drive long-term impact and support the resilience of
                                    individuals families worldwide. Join us as we continue to make a difference where
                                    it’s needed most, turning.</p>

                                <h2 className="title">Challenge</h2>
                                <p className="para">Vestibulum bandit libero at mauri&#39;s condiment scelerisque. In
                                    scelerisque in mauri&#39;s ut malassada. Nam so dales scelerisque ipsum sed
                                    vestibulum.
                                    Aliquam euismod mi vitae nibh placerat, nec auctor neque lacinia. Curabitur gravida
                                    orci purus.</p>
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
                                <h3 className="title">Categories</h3>
                                <div className="vl-single-service">
                                    <a href="#">Charity</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Donation</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Education &amp; Food</a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Health &amp; Medicine </a>
                                    <span><img src={arrowDown} alt='arrowDown' /></span>
                                </div>
                                <div className="vl-single-service">
                                    <a href="#">Medicine &amp; Water</a>
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
                                        <li><a href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                        <li><a href="#"><FaLinkedinIn className="fa-brands fa-linkedin-in" /></a></li>
                                        <li><a href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
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