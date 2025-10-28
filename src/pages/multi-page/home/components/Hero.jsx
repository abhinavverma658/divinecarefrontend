import { useRef, useState, useEffect } from 'react';
import hero1 from '@/assets/img/shape/vl-hero-shape-1.1.png';
import hero2 from '@/assets/img/shape/vl-hero-shape-1.2.png';
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg';
import { FaAngleLeft, FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaTwitter, FaSpinner } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import { homeAPI } from '@/utils/api';
import './HeroFix.css';

const Hero = () => {
  // State for hero data and loading
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch hero data on component mount
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        console.log('🏠 [Hero Component] Fetching hero data from API...');
        const response = await homeAPI.getHeroData();
        console.log('🏠 [Hero Component] API Response:', response);
        
        // Check if using fallback data
        if (response.fallback) {
          console.warn('🏠 [Hero Component] ⚠️ USING FALLBACK DATA');
        } else {
          console.log('🏠 [Hero Component] ✅ USING REAL API DATA');
        }
        
        if (response && response.success && response.home) {
          // Normalize response into predictable shape for the component
          const h = response.home;
          
          // Backend returns: heroTitle, heroHeading, description, heroImage, facebookUrl, instagramUrl, xUrl
          const normalized = {
            title: h.heroHeading || h.title || h.heading || '',
            subtitle: h.heroTitle || h.subtitle || h.subTitle || '',
            description: h.description || h.desc || '',
            buttonText: h.buttonText || 'Join The Relief Effort',
            buttonLink: h.buttonLink || '/pages/contact',
            heroImage: h.heroImage || h.image || '',
            socialMedia: {
              facebook: h.facebookUrl || h.socialMedia?.facebook || '#',
              instagram: h.instagramUrl || h.socialMedia?.instagram || '#',
              twitter: h.xUrl || h.socialMedia?.twitter || '#',
            },
            // keep raw home so debug can inspect
            _raw: h,
            _isFallback: response.fallback || false
          };

          setHeroData(normalized);
          console.log('🏠 [Hero Component] Data loaded:', {
            title: normalized.title,
            subtitle: normalized.subtitle,
            description: normalized.description?.substring(0, 50) + '...',
            heroImage: normalized.heroImage?.substring(0, 50) + '...',
            facebook: normalized.socialMedia.facebook,
            instagram: normalized.socialMedia.instagram,
            twitter: normalized.socialMedia.twitter,
            isFallback: normalized._isFallback
          });
        } else {
          throw new Error('Failed to fetch hero data');
        }
      } catch (err) {
        console.error('🏠 [Hero Component] Hero data fetch error:', err);
        setError(err.message);
        // Fallback to default data if API fails
        setHeroData({
          title: "Disaster Relief Funding",
          subtitle: "Recognizing Our Disaster Relief Heroes",
          description: "In times of crisis, when disaster strikes and hope seems lost, there emerge unsung heroes who rise to the occasion.",
          buttonText: "Join The Relief Effort",
          buttonLink: "/pages/contact",
          heroImage: "https://via.placeholder.com/1200x600/007bff/ffffff?text=DivineCare+Hero+Section",
          socialMedia: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
          },
          _isFallback: true
        });
        console.log('🏠 [Hero Component] Using hardcoded fallback hero data');
      } finally {
        setLoading(false);
      }
    };

  fetchHeroData();
    
    // Optional: Set up periodic refresh to catch admin updates
    // const intervalId = setInterval(fetchHeroData, 30000); // Refresh every 30 seconds
    
    // return () => clearInterval(intervalId);
  }, []);


  // Loading state
  if (loading) {
    return (
      <div className="vl-banner p-relative fix" style={{ minHeight: '600px', backgroundColor: '#f8f9fa' }}></div>
    );
  }

  // Error state with fallback content
  if (error && !heroData) {
    return (
      <div className="vl-banner p-relative fix d-flex align-items-center justify-content-center" style={{ minHeight: '600px', backgroundColor: '#f8f9fa' }}>
        <div className="text-center">
          <p className="text-danger">Failed to load content. Please try again later.</p>
        </div>
      </div>
    );
  }

  // Create slide content component to avoid duplication
  const SlideContent = ({ slideIndex }) => (
    <div 
      className="vl-hero-slider"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${heroData?.heroImage || 'https://via.placeholder.com/1200x600/007bff/ffffff?text=DivineCare+Hero+Section'}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '700px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
      role="img"
      aria-label={`Hero slide ${slideIndex}: ${heroData?.title || 'DivineCare Hero Section'}`}
    >
      {/* Decorative shapes */}
      <div className="vl-hero-shape shape-1" style={{ position: 'absolute', zIndex: 2 }}>
        <img src={hero1} alt='' aria-hidden="true" />
      </div>
      <div className="vl-hero-shape shape-2" style={{ position: 'absolute', zIndex: 2 }}>
        <img src={hero2} alt='' aria-hidden="true" />
      </div>
      
      {/* Social media links */}
      <div className="vl-hero-social d-none d-lg-block" style={{ position: 'absolute', zIndex: 3 }}>
        <h4 className="title text-white">Follow Us:</h4>
        <div className="vl-hero-social-icon">
          <ul className="list-unstyled">
            <li><a 
              className='d-flex align-items-center justify-content-center' 
              href={heroData?.socialMedia?.facebook || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            ><FaFacebookF /></a></li>
            <li><a 
              className='d-flex align-items-center justify-content-center' 
              href={heroData?.socialMedia?.instagram || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            ><FaInstagram /></a></li>
            <li><a 
              className='d-flex align-items-center justify-content-center' 
              href={heroData?.socialMedia?.twitter || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            ><FaTwitter /></a></li>
          </ul>
        </div>
      </div>
      
      {/* Main content */}
      <Container style={{ position: 'relative', zIndex: 3 }}>
        <Row>
          <Col lg={7}>
            <div className="vl-hero-section-title">
              <h5 className="vl-subtitle text-white mb-3">
                <span><img src={titleIcon} alt='' aria-hidden="true" /></span> 
                {heroData?.subtitle || 'Recognizing Our Disaster Relief Heroes'}
              </h5>
              <h1 className="vl-title text-anime-style-3 text-white mb-4">
                {heroData?.title || 'Disaster Relief Funding'}
              </h1>
              <p className="text-white mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                {heroData?.description || 'In times of crisis, when disaster strikes and hope seems lost, there emerge unsung heroes who rise to the occasion.'}
              </p>
              <div className="vl-hero-btn">
                <a 
                  href={"/pages/contact"} 
                  className="header-btn1"
                  role="button"
                  aria-label={`${heroData?.buttonText || 'Join The Relief Effort'} - Navigate to contact page`}
                >
                   Contact Us 
                  <span className='ms-2'><FaArrowRight /></span>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5} />
        </Row>
      </Container>
    </div>
  );

  // Render hero slider with dynamic data
  return (
    <div className="vl-banner p-relative fix">
      <SlideContent slideIndex={1} />
    </div>
  );
};

export default Hero;