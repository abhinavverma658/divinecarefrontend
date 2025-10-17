import { useRef, useEffect, useState } from 'react';
import hero1 from '@/assets/img/shape/vl-hero-shape-1.1.png';
import hero2 from '@/assets/img/shape/vl-hero-shape-1.2.png';
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg';
import { FaAngleLeft, FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { homeAPI } from '@/utils/api';
import './Hero.css';
const Hero = () => {
  const [heroData, setHeroData] = useState({
    title: 'Disaster Relief Funding',
    subtitle: 'Recognizing Our Disaster Relief Heroes',
    description: 'In times of crisis, when disaster strikes and hope seems lost, there emerge unsung heroes who rise to the occasion.',
    buttonText: 'Join The Relief Effort',
    buttonLink: '/pages/contact',
    socialMedia: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
    },
    heroImage: null
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    arrows: false,
    dots: false
  };
  const sliderRef = useRef(null);

  // Fetch hero data from API
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);
        const response = await homeAPI.getHeroData();
        
        if (response.success && response.data) {
          console.log('Hero API Response:', response.data);
          setHeroData(prevData => ({
            ...prevData,
            ...response.data
          }));
          console.log('Updated Hero Data:', {
            ...prevData,
            ...response.data
          });
        }
      } catch (err) {
        console.warn('Failed to fetch hero data from API, using default data:', err);
        setError(err);
        // Keep default data if API fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);
  // Create hero slide component
  const HeroSlide = ({ data, isActive = false }) => (
    <div 
      className={`vl-hero-slider vl-hero-bg slick-slide ${isActive ? 'slick-current slick-active' : ''}`}
      style={{
        backgroundImage: data?.heroImage ? `url(${data.heroImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxHeight: '70vh' // Adjusted minHeight for better fit
      }}
    >
      <div className="vl-hero-shape shape-1">
        <img src={hero1} alt='hero1' />
      </div>
      <div className="vl-hero-shape shape-2">
        <img src={hero2} alt='hero2' />
      </div>
      <div className="vl-hero-social d-none d-lg-block">
        <h4 className="title">Follow Us:</h4>
        <div className="vl-hero-social-icon">
          <ul>
            {data?.socialMedia?.facebook && data.socialMedia.facebook !== '#' && (
              <li><a className='d-flex align-items-center justify-content-center' href={data.socialMedia.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
            )}
            {data?.socialMedia?.instagram && data.socialMedia.instagram !== '#' && (
              <li><a className='d-flex align-items-center justify-content-center' href={data.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="fa-brands fa-instagram" /></a></li>
            )}
            {data?.socialMedia?.twitter && data.socialMedia.twitter !== '#' && (
              <li><a className='d-flex align-items-center justify-content-center' href={data.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className="fa-brands fa-twitter" /></a></li>
            )}
          </ul>
        </div>
      </div>
      <Container>
        <Row>
          <Col lg={7}>
            <div className="vl-hero-section-title hero-text-visible">
              <h5 className="vl-subtitle hero-text-visible" data-text={data?.subtitle}>
                <span><img src={titleIcon} alt='titleIcon' /></span> 
                {data?.subtitle || 'Recognizing Our Disaster Relief Heroes'}
              </h5>
              <h1 className="vl-title text-anime-style-3 hero-text-visible" data-text={data?.title}>
                {data?.title || 'Disaster Relief Funding'}
              </h1>
              <p className="hero-text-visible" data-text={data?.description}>
                {data?.description || 'In times of crisis, when disaster strikes and hope seems lost, there emerge unsung heroes who rise to the occasion.'}
              </p>
              <div className="vl-hero-btn">
                <a 
                  href={data?.buttonLink || '/pages/contact'} 
                  className="header-btn1 hero-text-visible"
                >
                  {data?.buttonText || 'Join The Relief Effort'} 
                  <span><FaArrowRight /></span>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5} />
        </Row>
      </Container>
    </div>
  );

  if (error && !heroData) {
    return (
      <div className="vl-banner p-relative fix">
        <div className="vl-hero-slider vl-hero-bg">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center py-5">
                  <p className="text-muted">Unable to load hero content. Please try again later.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }

  return (
    <div className="vl-banner p-relative fix hero-container-override">
      <Slider ref={sliderRef} {...settings} className="slider-active-1">
        <HeroSlide data={heroData} isActive={true} />
        <HeroSlide data={heroData} isActive={true} />
      </Slider>

      <div className="vl-arrow">
        <span className="prev-arow slick-arrow" onClick={() => sliderRef.current?.slickPrev()}>
          <FaAngleRight />
        </span>
        <span className="next-arow slick-arrow" onClick={() => sliderRef.current?.slickNext()}>
          <FaAngleLeft />
        </span>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading hero content...</p>
          </div>
        </div>
      )}

      {/* Custom styles to ensure text is always visible */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .vl-hero-section-title .vl-subtitle,
          .vl-hero-section-title .vl-title,
          .vl-hero-section-title p,
          .vl-hero-btn .header-btn1 {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateX(0px) !important;
          }
          
          .vl-hero-social {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateX(0px) !important;
          }

          .vl-hero-slider.vl-hero-bg {
            max-height: 600px;
          }
        `
      }} />
    </div>
  );
};
export default Hero;