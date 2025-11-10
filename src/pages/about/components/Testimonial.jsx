import React, { useEffect, useState, useRef } from 'react';

import { aboutTestimonialsAPI } from '@/utils/About/aboutTestimonialsApi';
import { getImageUrl } from '@/utils/imageUtils';
import thumbImg from '@/assets/img/testimonial/vl-testimonial-large-thumb-4.1.png';
import reviewIcon from '@/assets/img/icons/vl-review-icon-4.1.svg';
import thumbSmImg from '@/assets/img/testimonial/vl-sm-thumb-4.1.png';
import uparrow4 from '@/assets/img/icons/vl-uparrow4.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6';
import Slider from "react-slick";

const Testimonial = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const data = await aboutTestimonialsAPI.getAboutTestimonials();
                setAbout(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    const next = () => {
        sliderRef2.current?.slickNext();
    };
    const previous = () => {
        sliderRef2.current?.slickPrev();
    };

    if (loading) {
        return <section className="vl-testimonial4 vl-testimonial-inner sp2"><Container><div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div></Container></section>;
    }
    if (error || !about) {
        return <section className="vl-testimonial4 vl-testimonial-inner sp2"><Container><div className="alert alert-warning" role="alert">Unable to load testimonials section.<br/>{error}</div></Container></section>;
    }

    // Fallback for statistics
    const stats = about.statistics && about.statistics.length > 0 ? about.statistics : [
        { number: '569+', label: 'Satisfied Clients' },
        { number: '12+', label: 'Years of Experience' }
    ];

    // Get testimonials data or use fallback
    const testimonials = about.testimonials && about.testimonials.length > 0 ? about.testimonials : [
        {
            image: thumbSmImg,
            rating: 5,
            content: "Through their words, we're reminded that a legacy isn't just something you leave behind it's something you create every day inspiring all generations to follow in their footsteps.",
            name: "Sharon McClure",
            title: "Volunteer"
        }
    ];

    return (
        <section className="vl-testimonial4 vl-testimonial-inner sp2">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="testimonial-slides-wrap">
                            <Slider asNavFor={nav2} ref={sliderRef1} slidesToShow={1} slidesToScroll={1} arrows={false} fade={true} className="slider-thumb slider-for1">
                                {testimonials.map((testimonial, index) => (
                                    <div className="single-thumb" key={index}>
                                        <img className="w-100" src={about.sectionImage ? getImageUrl(about.sectionImage) : thumbImg} alt={`testimonial-${index}`} />
                                    </div>
                                ))}
                            </Slider>

                            <div className="content-box-2">
                                <Slider asNavFor={nav1} ref={sliderRef2} slidesToShow={1} slidesToScroll={1} arrows={false} focusOnSelect={true} className="slider-sm slider-nav1 p-relative">
                                    {testimonials.map((testimonial, index) => (
                                        <div className="slider-content-box content-box2" key={index}>
                                            <div className="icon">
                                                <ul>
                                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                                        <li key={i}><span><img src={reviewIcon} alt='reviewIcon' /></span></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <p className="para">"{testimonial.content || 'No testimonial content available.'}"</p>
                                            <div className="slider-flex">
                                                <div className="user">
                                                    <img src={testimonial.image ? getImageUrl(testimonial.image) : thumbSmImg} alt={testimonial.name || 'User'} />
                                                </div>
                                                <div className="content">
                                                    <a href="#" className="title">{testimonial.name || 'Anonymous'}</a>
                                                    <span>{testimonial.title || 'User'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                                <div className="slider-sm slider-nav1 p-relative">
                                    <span className="smarrow smarrow2 abarow arrow-lft slick-arrow" onClick={previous}>
                                        <FaAngleLeft />
                                    </span>
                                    <span className="smarrow smarrow2 abarow arrow-right slick-arrow" onClick={next}>
                                        <FaAngleRight />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="vl-testimonial-content">
                            <div className="vl-section-title4">
                                <h5 className="subtitle"  style={{ fontSize: '21px' }}>{'Testimonials'}</h5>
                                <h2 className="title">{about.sectionHeading || 'Hear from our volunteers and clients.'}</h2>
                                <p className="para pb-32">{about.sectionDescription || 'We value the feedback from our community.'}</p>
                                <div className="btn-area pb-48">
                                    <a href="#" className="header-btn1">Learn More <span><FaArrowRight /></span></a>
                                </div>
                            </div>
                            <Row>
                              {stats.map((stat, idx) => (
                                <Col lg={6} md={6} className="mb-30" key={idx}>
                                  <div className={`icon-box-bg icon-box-bg2${idx === 1 ? ' active' : ''}`}>
                                    <div className="icon">
                                      <span><img src={uparrow4} alt='uparrow4' /></span>
                                    </div>
                                    <h3 className="title"><span className="title counter">{stat.number.replace(/\D/g, '')}</span> +</h3>
                                    <span>{stat.label}</span>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;