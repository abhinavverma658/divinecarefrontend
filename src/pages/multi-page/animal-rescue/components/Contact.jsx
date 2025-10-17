import icon1 from '@/assets/img/icons/vl-ic-2.1.svg';
import icon2 from '@/assets/img/icons/vl-ic-2.2.svg';
import icon3 from '@/assets/img/icons/vl-ic-2.3.svg';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import Select from 'react-select';
const options = [{
  value: '',
  label: 'Donation To'
}, {
  value: 1,
  label: 'Health and Medical Support'
}, {
  value: 2,
  label: 'Education and Training'
}, {
  value: 3,
  label: 'Relief and Aid Services'
}, {
  value: 4,
  label: 'Community Development'
}, {
  value: 5,
  label: 'Environmental Conservation'
}];
const Contact = () => {
  return <section className="vl-contact2 sp2">
            <Container>
                <Row>
                    <Col lg={9} className="mx-auto">
                        <div className="vl-section-title-3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Let&#39;s Help Us</h4>
                            <h2 className="title text-anime-style-3">Our Fundraising For Animal Welfare</h2>
                            <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>We’re here to connect,
                                support, and answer any questions you may have about our rescue <br /> work, adoption
                                process, or ways to get involved. Whether you’re interested in adopting.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <div className="vl-contact-box mb-30" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="topcontent">
                                <h4 className="title">Contact Info</h4>
                                <p>We’d love to hear from you! Whether you have questions about projects, want to get
                                    involved, or simply want learn more about the impact.</p>
                            </div>
                            <div className="box-hover">
                                <div className="icon-list-flex">
                                    <div className="icon">
                                        <span><img src={icon1} alt='icon1' /></span>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Our Location</h4>
                                        <p className="para1">8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX
                                            773</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-hover">
                                <div className="icon-list-flex">
                                    <div className="icon">
                                        <span><img src={icon2} alt='icon2' /></span>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Phone Number</h4>
                                        <a href="tel:123-456-7890" className="para1">123-456-7890 </a> <br />
                                        <a href="tel:098-765-4321" className="para1">098-765-4321 </a>
                                    </div>
                                </div>
                            </div>
                            <div className="box-hover">
                                <div className="icon-list-flex">
                                    <div className="icon">
                                        <span><img src={icon3} alt='icon3' /></span>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Email Address</h4>
                                        <a href="mailto:info@charity.com" className="para1">info@charity.com</a> <br />
                                        <a href="mailto:Infocharity@gmail.com" className="para1">Infocharity@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="vl-contact-box2 mb-30" data-aos="fade-left" data-aos-duration={1100} data-aos-delay={300}>
                            <h4 className="title">Get In Touch</h4>
                            <p className="para1">By reaching out, you&#39;re taking first step toward making a
                                difference <br /> and joining a community committed to bringing safe, sustainable.</p>
                            <form action="#">
                                <div className="vl-form2">
                                    <Row>
                                        <Col lg={6}>
                                            <input type="text" placeholder="First Name" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="text" placeholder="Last Name" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="email" placeholder="Email Address" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="number" placeholder="Amount" />
                                        </Col>
                                        <Col lg={12} className="mb-4">
                                            <Select options={options} className="react-select-container" classNamePrefix="react-select" placeholder="Donation To" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                                        </Col>
                                        <div className="vl-about-btn">
                                            <button className="btn-primary2">Send Now <span><FaArrowRight className="fa-solid fa-arrow-right" /></span></button>
                                        </div>
                                    </Row>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Contact;