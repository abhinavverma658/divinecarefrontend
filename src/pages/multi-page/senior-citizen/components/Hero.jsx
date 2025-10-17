import homeBg from '@/assets/img/banner/vl-home-bg-4.png';
import arrowImg2 from '@/assets/img/icons/vl-home-arrow-4.2.svg';
import arrowImg1 from '@/assets/img/icons/vl-home-arrow-4.1.svg';
import shape4 from '@/assets/img/shape/hand-shape4.1.png';
import whiteHand4 from '@/assets/img/icons/vl-white-hand4.1.svg';
import thumb11 from '@/assets/img/banner/vl-home-thumb-4.11.png';
import Slider from "react-slick";
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
import GlightBox from '@/components/GlightBox';
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    style: {
      backgroundImage: `url(${homeBg})`
    }
  };
  return <Slider {...settings} className="baner4-active ">

            <div className="vl-banner4">
                <div className="shape2"><img src={arrowImg2} alt='arrowImg2' /></div>
                <div className="shape3"><img src={shape4} alt='shape4' /></div>
                <div className="shape"><img src={arrowImg1} alt='arrowImg1' /></div>
                <Container>
                    <GlightBox>
                        <Row>
                            <Col lg={6}>
                                <div className="banner-content">
                                    <h4 className="subtitle"><span><img src={whiteHand4} alt='whiteHand4' /></span> Senior
                                        Citizen Celebrating the Among Us</h4>
                                    <h1 className="title text-anime-style-3">Inspiring Acts <br /> Of Kindness <br /> And
                                        Service</h1>
                                    <p className="para pb-32">In times when the world feels uncertain,
                                        inspiring <br /> acts
                                        of kindness and service shine as powerful.</p>
                                    <div className="btn-flex-area">
                                        <div className="btn-area4">
                                            <Link to="/pages/contact" className="header-btn1">Spread
                                                Kindness <span><FaArrowRight /></span></Link>
                                        </div>
                                        <div className="vl-video-play">
                                            <a href="https://www.youtube.com/watch?v=HkYGxh1XUGQ" className="glightbox video-play-button video popup-video" tabIndex={-1}>
                                                <span />
                                            </a>
                                            <div className="video-text">
                                                <h6 className="vtitle video"><a className="glightbox vtitle video popup-video" href="https://www.youtube.com/watch?v=HkYGxh1XUGQ">How
                                                    We Work</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="vl-banner-thumb">
                                    <img className="w-100 img-fluid" src={thumb11} alt='thumb11' />
                                </div>
                            </Col>
                        </Row>
                    </GlightBox>
                </Container>
            </div>

            <div className="vl-banner4">
                <div className="shape2"><img src={arrowImg2} alt='arrowImg2' /></div>
                <div className="shape3"><img src={shape4} alt='shape4' /></div>
                <div className="shape"><img src={arrowImg1} alt='arrowImg2' /></div>
                <Container>
                    <GlightBox>
                        <Row>
                            <Col lg={6}>
                                <div className="banner-content">
                                    <h4 className="subtitle"><span><img src={whiteHand4} alt='whiteHand4' /></span>Senior
                                        Citizen Celebrating the Among Us</h4>
                                    <h1 className="title">Inspiring Acts <br /> Of Kindness <br /> And Service</h1>
                                    <p className="para pb-32">In times when the world feels uncertain,
                                        inspiring <br /> acts
                                        of kindness and service shine as powerful.</p>
                                    <div className="btn-flex-area">
                                        <div className="btn-area4">
                                            <Link to="/pages/contact" className="header-btn1">Spread
                                                Kindness <span><FaArrowRight /></span></Link>
                                        </div>
                                        <div className="vl-video-play">
                                            <a href="https://www.youtube.com/watch?v=HkYGxh1XUGQ" className="glightbox video-play-button video popup-video" tabIndex={-1}>
                                                <span />
                                            </a>
                                            <div className="video-text">
                                                <h6 className="vtitle video"><a className="glightbox vtitle video popup-video" href="https://www.youtube.com/watch?v=HkYGxh1XUGQ">How
                                                    We Work</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="vl-banner-thumb">
                                    <img className="w-100 img-fluid" src={thumb11} alt='thumb11' />
                                </div>
                            </Col>
                        </Row>
                    </GlightBox>
                </Container>
            </div>

            <div className="vl-banner4">
                <div className="shape2"><img src={arrowImg2} alt='arrowImg2' /></div>
                <div className="shape3"><img src={shape4} alt='shape4' /></div>
                <div className="shape"><img src={arrowImg1} alt='arrowImg2' /></div>
                <Container>
                    <GlightBox>
                        <Row>
                            <Col lg={6}>
                                <div className="banner-content">
                                    <h4 className="subtitle"><span><img src={whiteHand4} alt='whiteHand4' /></span>Senior
                                        Citizen Celebrating the Among Us</h4>
                                    <h1 className="title">Inspiring Acts <br /> Of Kindness <br /> And Service</h1>
                                    <p className="para pb-32">In times when the world feels uncertain,
                                        inspiring <br /> acts
                                        of kindness and service shine as powerful.</p>
                                    <div className="btn-flex-area">
                                        <div className="btn-area4">
                                            <Link to="/pages/contact" className="header-btn1">Spread
                                                Kindness <span><FaArrowRight /></span></Link>
                                        </div>
                                        <div className="vl-video-play">
                                            <a href="https://www.youtube.com/watch?v=HkYGxh1XUGQ" className="glightbox video-play-button video popup-video" tabIndex={-1}>
                                                <span />
                                            </a>
                                            <div className="video-text">``
                                                <h6 className="vtitle video"><a className="glightbox vtitle video popup-video" href="https://www.youtube.com/watch?v=HkYGxh1XUGQ">How
                                                    We Work</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="vl-banner-thumb">
                                    <img className="w-100 img-fluid" src={thumb11} alt='thumb11' />
                                </div>
                            </Col>
                        </Row>
                    </GlightBox>
                </Container>
            </div>
        </Slider>;
};
export default Hero;