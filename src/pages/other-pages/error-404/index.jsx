import errorBg from '@/assets/img/breadcrumb/vl-error-bg.png';
import shapeImg1 from '@/assets/img/breadcrumb/breadcrumb-shape-1.1.png';
import shapeImg2 from '@/assets/img/breadcrumb/breadcrumb-shape-1.2.png';
import shapeImg3 from '@/assets/img/breadcrumb/breadcrumb-shape-1.3.png';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa6';
import thumbImg from '@/assets/img/error/vl-error-thmb.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
const Error404Page = () => {
  return <>
            <section className="vl-breadcrumb" style={{
      backgroundImage: `url(${errorBg})`
    }}>
                <div className="shape1"><img src={shapeImg1} alt='shapeImg1' /></div>
                <div className="shape2"><img src={shapeImg2} alt='shapeImg2' /></div>
                <div className="shape2"><img src={shapeImg3} alt='shapeImg3' /></div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="vl-breadcrumb-title">
                                <h2 className="heading">Error 404</h2>
                                <div className="vl-breadcrumb-list">
                                    <span><Link to="/">Home</Link></span>
                                    <span className="dvir"><FaAngleRight className="fa-solid fa-angle-right" /></span>
                                    <span><a className="active" href="#">Error 404</a></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="vl-error-section sp1">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <div className="error-content text-center">
                                <div className="thumb">
                                    <img className="w-100 img-fluid" src={thumbImg} alt='thumbImg' />
                                </div>
                                <div className="content">
                                    <h4 className="title"> Sorry, Page Not Found!</h4>
                                    <p className="para">Sorry, the page you are looking for doesn’t exist or <br /> has
                                        been moved. Here are some helpful links.</p>
                                    <div className="btn-area">
                                        <Link to="/" className="header-btn1">Back To
                                            Home <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>;
};
export default Error404Page;