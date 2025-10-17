import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import thumb1 from '@/assets/img/blog/vl-blog-large-thumb-1.1.png';
import tags from '@/assets/img/icons/vl-tags.svg';
import chatting from '@/assets/img/icons/vl-chatting-icon.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const SideBar = () => {
  return <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="vl-event-content-area">
                            <div className="vl-large-thumb">
                                <img className="w-100 img-fluid" src={thumb1} alt='thumb1' />
                            </div>
                            <div className="vl-blog-meta-box mt-32">
                                <ul>
                                    <li><a href="#"> <span><img src={thumb1} alt='thumb1' /></span>Adil Rashid</a></li>
                                    <li><a href="#"> <span className="icon"><img className="mt-4-" src={calenderImg} alt='calenderImg' /></span> 8/10/2025</a>
                                    </li>
                                    <li><a href="#"> <span className="icon"><img className="mt-4-" src={tags} alt='tags' /></span> Business And
                                        Finance</a></li>
                                    <li><a href="#"> <span className="icon"><img className="mt-4-" src={chatting} alt='chatting' /></span>2 comments</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="vl-event-content vl-blg-content">
                                <h2 className="title">Tips for Disaster Preparedness: How <br /> to Stay Safe and Ready
                                </h2>
                                <p className="para pb-16">Our blog is a space where we share the heart of our mission,
                                    offering an inside look at the incredible work being done and the lives being
                                    transformed through your support. Each post features real stories from the field,
                                    updates on our current projects. </p>
                                <p className="para pb-32">Whether you&#39;re learning about a new initiative,
                                    discovering how your donations are making an impact, or finding inspiration to get
                                    involved, our blog is here to connect.</p>
                            </div>
                            <div className="vl-blg-icon-box">
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="single-blog-box1 mb-30">
                                            <Link to="/blog-single" className="title">Mission and Vision</Link>
                                            <p className="para">Join us on this journey &amp; let continue making the
                                                world a better place.</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="single-blog-box1 mb-30">
                                            <Link to="/blog-single" className="title">A Journey of Impact</Link>
                                            <p className="para">Our blog is more than just collection of updates it’s a
                                                platform for sharing.</p>
                                        </div>
                                    </Col>
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
                </Row>
            </Container>
        </div>;
};
export default SideBar;