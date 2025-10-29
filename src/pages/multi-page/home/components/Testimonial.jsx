import React, { useState, useEffect } from 'react';
import { testimonialsAPI } from '../../../../utils/api';
import qutImg from '@/assets/img/icons/vl-qut-1.1.svg';
import { FaStar } from "react-icons/fa6";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row } from 'react-bootstrap';
const Testimonial = () => {
  const [testimonialsData, setTestimonialsData] = useState({
    sectionHeading: 'Stories from the Heart',
    sectionDescription: 'Long-term recovery requires sustainable livelihoods. We support individuals & families in rebuilding.',
    testimonials: []
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTestimonialsData();
  }, []);

  const fetchTestimonialsData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('💬 [Testimonials Component] Fetching testimonials data using centralized API...');
      
      // Use centralized API with token management and fallback handling
      const response = await testimonialsAPI.getTestimonials();
      
      // Check if using fallback data
      if (response.fallback) {
        console.warn('💬 [Testimonials Component] ⚠️ USING FALLBACK DATA');
      } else {
        console.log('💬 [Testimonials Component] ✅ USING REAL API DATA');
      }
      
      // Handle the correct response structure: response.section
      const section = response.section;
      
      if (response.success && section) {
        const newData = {
          _id: section._id,
          sectionHeading: section.sectionHeading || testimonialsData.sectionHeading,
          sectionDescription: section.sectionDescription || testimonialsData.sectionDescription,
          testimonials: section.testimonials || []
        };
        setTestimonialsData(newData);
        console.log('💬 [Testimonials Component] Data updated:', {
          heading: newData.sectionHeading,
          testimonialsCount: newData.testimonials.length,
          isFallback: response.fallback || false,
          sectionId: newData._id
        });
      } else {
        console.log('💬 [Testimonials Component] Using default testimonials data');
      }
    } catch (error) {
      console.error('💬 [Testimonials Component] Error fetching testimonials data:', error);
      setError(error.message);
      // Keep default data on error
    } finally {
      setLoading(false);
    }
  };

  // Helper function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          <FaStar className={`fa-solid fa-star ${i <= rating ? 'text-warning' : 'text-muted'}`} />
        </span>
      );
    }
    return stars;
  };

  // Don't render if no testimonials available
  if (!testimonialsData.testimonials || testimonialsData.testimonials.length === 0) {
    return (
      <section className="vl-testimonial vl-testimonial-bg sp1">
        <Container>
          <div className="vl-section-title-1 white mb-60 text-center">
            <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Testimonial</h5>
            <h2 className="title text-anime-style-3">{testimonialsData.sectionHeading}</h2>
            <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
              {testimonialsData.sectionDescription}
            </p>
            {loading && (
              <div style={{ minHeight: '1px' }}></div>
            )}
            {!loading && (
              <div className="text-center mt-3">
                <small className="text-light">No testimonials available at the moment.</small>
              </div>
            )}
          </div>
        </Container>
      </section>
    );
  }
  return <section className="vl-testimonial vl-testimonial-bg sp1">
            <Container>
                <div className="vl-section-title-1 white mb-60 text-center">
                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Community Testimonials</h5>
                    <h2 className="title text-anime-style-3">{testimonialsData.sectionHeading}</h2>
                    <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                      {testimonialsData.sectionDescription}
                    </p>
                    {loading && (
                      <div style={{ minHeight: '1px' }}></div>
                    )}
                    {error && (
                      <div className="text-center mt-3">
                        <small className="text-warning">Using cached testimonials content</small>
                      </div>
                    )}
                </div>
                <Row>
                    <div className="vl-testimonial-arow p-relative">
                        <Swiper modules={[Autoplay, Navigation]} autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }} slidesPerView={3} navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }} breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // For small screens
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // For tablets
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            } // For desktops
          }} loop spaceBetween={30}>
                            <div id="testimoni1" className="owl-carousel owl-theme">
                                                                {testimonialsData.testimonials?.map((item, idx) => <SwiperSlide key={item._id || idx}>
                                            <div className="vl-testimonial-box p-relative">
                                                <div className="vl-testimonial-box-icon">
                                                    {renderStars(item.rating)}
                                                </div>
                                                <div className="vl-testimonial-box-content">
                                                    <p>"{item.content}"</p>
                                                </div>
                                                <div className="vl-testimonial-box-auth">
                                                    <div className="vl-auth-desc">
                                                        <div className="auth-img">
                                                            <img
                                                              style={{ width: "50px", height: "50px", borderRadius: "100%", objectFit: "cover" }}
                                                              src={item.image}
                                                              alt={`${item.name} testimonial`}
                                                              onError={(e) => {
                                                                console.log('Image load error for:', item.image);
                                                                // Set a placeholder image on error
                                                                e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face';
                                                              }}
                                                            />
                                                        </div>
                                                        <div className="auth-title">
                                                            <h4 className="title"><a href="#">{item.name}</a></h4>
                                                            <span>{item.designation}</span>
                                                        </div>
                                                    </div>
                                                    <div className="vl-auth-quote">
                                                        <span><img src={qutImg} alt='qutImg' /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>)}
                            </div>
                        </Swiper>
                        <div className='owl-nav'>
                            <button className="owl-prev swiper-button-prev">
                                <img src={arrowLeft} alt="arrowLeft" />
                            </button>

                            <button className="owl-next swiper-button-next">
                                <img src={angleRight} alt="angleRight" />
                            </button>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>;
};
export default Testimonial;