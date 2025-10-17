import { teamData } from '../data';
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
const Team = () => {
  return <section className="vl-team-inner sp2">
            <Container>
                <Row>
                    {teamData.map((item, idx) => <Col lg={4} md={6} key={idx}>
                                <div className="single-team">
                                    <div className="team-thumb">
                                        <img className="w-100 img-fluid" src={item.image} alt='img' />
                                    </div>
                                    <div className="p-relative">
                                        <div className="content-box">
                                            <div className="ssocial">
                                                <ul>
                                                    <li><a href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                                    <li><a href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                                    <li><a href="#"><FaTwitter className="fa-brands fa-twitter" /></a>
                                                    </li>
                                                    <li><a href="#"><FaGithub className="fa-brands fa-github" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="text">
                                                <a href="#" className="title">{item.name}</a>
                                                <h5 className="deseg">{item.designation}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
                <Row>
                    <Col xs={12} className="m-auto">
                        <div className="theme-pagination text-center mt-18">
                            <ul>
                                <li><a href="#"><FaAngleLeft className="fa-solid fa-angle-left" /></a></li>
                                <li><a className="active" href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li>...</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#"><FaAngleRight className="fa-solid fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Team;