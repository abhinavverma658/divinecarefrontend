import eventBg from '@/assets/img/breadcrumb/vl-event-bg.png';
import breadcrumb1 from '@/assets/img/breadcrumb/breadcrumb-shape-1.1.png';
import breadcrumb2 from '@/assets/img/breadcrumb/breadcrumb-shape-1.2.png';
import breadcrumb3 from '@/assets/img/breadcrumb/breadcrumb-shape-1.3.png';
import { FaAngleRight } from 'react-icons/fa6';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Hero = () => {
  return <section className="vl-breadcrumb" style={{
    backgroundImage: `url(${eventBg})`
  }}>
            <div className="shape1"><img src={breadcrumb1} alt='breadcrumb1' /></div>
            <div className="shape2"><img src={breadcrumb2} alt='breadcrumb2' /></div>
            <div className="shape2"><img src={breadcrumb3} alt='breadcrumb3' /></div>
            <div className="container">
                <Row>
                    <Col lg={5}>
                        <div className="vl-breadcrumb-title">
                            <h2 className="heading">Events</h2>
                            <div className="vl-breadcrumb-list">
                                <span><Link to="/">Home</Link></span>
                                <span className="dvir"><FaAngleRight className="fa-solid fa-angle-right" /></span>
                                <span><a className="active" href="#">Events</a></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>;
};
export default Hero;