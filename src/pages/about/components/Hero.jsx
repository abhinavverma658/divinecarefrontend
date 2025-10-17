import aboutImg from '@/assets/img/breadcrumb/vl-abuot-breadcrumb.png';
import shape1Img from '@/assets/img/breadcrumb/breadcrumb-shape-1.1.png';
import shape2Img from '@/assets/img/breadcrumb/breadcrumb-shape-1.2.png';
import shape3Img from '@/assets/img/breadcrumb/breadcrumb-shape-1.3.png';
import { FaAngleRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Hero = () => {
  return <section className="vl-breadcrumb" style={{
    backgroundImage: `url(${aboutImg})`
  }}>
            <div className="shape1"><img src={shape1Img} alt='shape1Img' /></div>
            <div className="shape2"><img src={shape2Img} alt='shape2Img' /></div>
            <div className="shape2"><img src={shape3Img} alt='shape3Img' /></div>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="vl-breadcrumb-title">
                            <h2 className="heading">About Us</h2>
                            <div className="vl-breadcrumb-list">
                                <span><Link to="/">Home</Link></span>
                                <span className="dvir"><FaAngleRight className="fa-solid fa-angle-right" /></span>
                                <span><a className="active" href="#">About Us</a></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Hero;