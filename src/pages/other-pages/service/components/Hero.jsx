import serviceImg from '@/assets/img/breadcrumb/vl-service-bradcrumb.png';
import shapeImg1 from '@/assets/img/breadcrumb/breadcrumb-shape-1.1.png';
import shapeImg2 from '@/assets/img/breadcrumb/breadcrumb-shape-1.2.png';
import shapeImg3 from '@/assets/img/breadcrumb/breadcrumb-shape-1.3.png';
import { FaAngleRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Hero = () => {
  return <section className="vl-breadcrumb" style={{
    backgroundImage: `url(${serviceImg})`
  }}>
            <div className="shape1"><img src={shapeImg1} alt='shapeImg1' /></div>
            <div className="shape2"><img src={shapeImg2} alt='shapeImg2' /></div>
            <div className="shape2"><img src={shapeImg3} alt='shapeImg3' /></div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="vl-breadcrumb-title">
                            <h2 className="heading">Our Service</h2>
                            <div className="vl-breadcrumb-list">
                                <span><Link to="/">Home</Link></span>
                                <span className="dvir"><FaAngleRight className="fa-solid fa-angle-right" /></span>
                                <span><a className="active" href="#">Our Service</a></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>;
};
export default Hero;