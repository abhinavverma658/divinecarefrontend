import contactLayer1 from '@/assets/img/icons/vl-contact-layer-3.1.svg';
import contactIcon1 from '@/assets/img/icons/vl-contact-ic-3.1.svg';
import contactIcon2 from '@/assets/img/icons/vl-contact-ic-3.2.svg';
import contactIcon3 from '@/assets/img/icons/vl-contact-ic-3.3.svg';
import { Col, Container, Row } from 'react-bootstrap';
import Select from "react-select";
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
  return <section id="contact" className="vl-contact3 sp2">
            <div className="shap"><img src={contactLayer1} alt='contactLayer1' /></div>
            <Container>
                <Row>
                    <Col lg={6} className="mx-auto">
                        <div className="vl-section-title3 mb-60 text-center">
                            <h4 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Contact From</h4>
                            <h2 className="title text-anime-style-3">We’re Here to Help: Contact Our Water Aid Team</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <div className="vl-contact-icon-box mb-30" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={300}>
                            <div className="vl-top-content">
                                <h4 className="title">Contact Info</h4>
                                <p className="para">We’d love to hear from you! Whether you have questions about
                                    projects, want to get involved, <br /> or simply want to learn more about the impact.
                                </p>
                            </div>
                            <div className="vl-icon-box-flex">
                                <div className="vl-icon">
                                    <span><img src={contactIcon1} alt='contactIcon1' /></span>
                                </div>
                                <div className="vl-text">
                                    <h4 className="title">Our Location</h4>
                                    <a href="#" className="para">8708 Technology Forest Pl Suite <br /> 125 -G, The
                                        Woodlands, TX 773</a>
                                </div>
                            </div>
                            <div className="vl-icon-box-flex">
                                <div className="vl-icon">
                                    <span><img src={contactIcon2} alt='contactIcon2' /></span>
                                </div>
                                <div className="vl-text">
                                    <h4 className="title">Phone Number</h4>
                                    <a href="tel:1234567890" className="para">123-456-7890</a> <br />
                                    <a href="tel:1234567890" className="para">123-456-7890</a>
                                </div>
                            </div>
                            <div className="vl-icon-box-flex">
                                <div className="vl-icon">
                                    <span><img src={contactIcon3} alt='contactIcon3' /></span>
                                </div>
                                <div className="vl-text">
                                    <h4 className="title">Email Address</h4>
                                    <a href="mailto:info@charity.com" className="para">info@charity.com</a> <br />
                                    <a href="mailto:Infocharity@gmail.com" className="para">Infocharity@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="vl-contact-from3" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={300}>
                            <h4 className="title">Get In Touch</h4>
                            <p className="para">By reaching out, you’re taking first step toward making a
                                difference <br /> and joining a community committed to bringing safe, sustainable.</p>
                            <form action="#">
                                <div className="vl-form3">
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
                                            <input type="tel" placeholder="Phone Number" />
                                        </Col>
                                        <Col lg={12} className="mb-4">
                                            <Select options={options} className="react-select-container" classNamePrefix="react-select" placeholder="Donation To" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea name="message" id="mesage" placeholder="Your Message" defaultValue={""} />
                                        </Col>
                                        <Col lg={12}>
                                            <div className="vl-btn3">
                                                <button className="primary-btn-3">Send Now</button>
                                            </div>
                                        </Col>
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