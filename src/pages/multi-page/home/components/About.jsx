import aboutIcons1 from '@/assets/img/icons/vl-about-1.1.svg';
import aboutIcons2 from '@/assets/img/icons/vl-about-1.2.svg';
import about1 from '@/assets/img/about/vl-about-1.1.png';
import about2 from '@/assets/img/about/vl-about-1.2.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import { FaHandsHelping, FaHeart, FaUsers, FaShieldAlt, FaHome, FaBullseye, FaStar, FaLeaf, FaHandHoldingHeart, FaGlobeAmericas, FaLightbulb, FaRocket } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { homeAPI } from '@/utils/api';
const About = () => {
  const [aboutData, setAboutData] = useState({
    mainHeading: 'Committed to Relief, Our Work Dedicated to Hope',
    mainDescription: 'At the heart of our organization lies simple yet powerful mission provide immediate relief & lasting hope to communities affected.',
    topRightDescription: 'At the heart of our lies a simple yet powerful mission: to provide and immediate relief affected by disaster organization.',
    keyPointers: [
      {
        heading: 'Helping people rebuild and prepare',
        description: 'We help them rebuild stronger more resilient for the future. Together with supporters like.',
        icon: 'fa-hands-helping'
      },
      {
        heading: 'Putting people first in everything we do',
        description: 'Guided by compassion driven the belief that every act kindness makes a difference.',
        icon: 'fa-heart'
      }
    ],
    centerImage: about1,
    rightImage: about2
  });
  const [loading, setLoading] = useState(true);

  // Icon mapping function
  const getIconComponent = (iconName) => {
    const iconMap = {
      'fa-hands-helping': FaHandsHelping,
      'fa-heart': FaHeart,
      'fa-users': FaUsers,
      'fa-shield-alt': FaShieldAlt,
      'fa-home': FaHome,
      'fa-bullseye': FaBullseye,
      'fa-star': FaStar,
      'fa-leaf': FaLeaf,
      'fa-hand-holding-heart': FaHandHoldingHeart,
      'fa-globe-americas': FaGlobeAmericas,
      'fa-lightbulb': FaLightbulb,
      'fa-rocket': FaRocket
    };
    return iconMap[iconName] || FaHeart; // Default fallback
  };

  // Fetch about data from API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        console.log('Fetching about data from API...');
        const response = await homeAPI.getAboutData();
        console.log('About API Response:', response);

        if (response.success && response.about) {
          setAboutData(response.about);
          console.log('About data loaded successfully:', response.about);
        } else {
          throw new Error('Failed to fetch about data');
        }
      } catch (error) {
        console.warn('About API failed, using defaults:', error);
        // Keep default data if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <section className="vl-about-section sp2">
        <Container>
          <Row>
            <Col lg={12} className="text-center py-5">
              <div>Loading...</div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="vl-about-section sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                  About Us
                </h5>
                <h2 className="title text-anime-style-3">
                  {aboutData.mainHeading}
                </h2>
                <p className="pb-32" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                  {aboutData.mainDescription}
                </p>
              </div>
              <div className="vl-about-grid">
                {aboutData.keyPointers.map((pointer, index) => {
                  const IconComponent = getIconComponent(pointer.icon);
                  return (
                    <div key={index} className="vl-about-icon-box mb-30">
                      <div className="vl-about-icon">
                        <span>
                          <IconComponent size={40} color="#e74c3c" />
                        </span>
                      </div>
                      <div className="vl-icon-content">
                        <h3 className="title">
                          <Link to="/pages/service">{pointer.heading}</Link>
                        </h3>
                        <p>{pointer.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-30">
            <div className="vl-about-large-thumb reveal">
              <img 
                className="w-100" 
                src={aboutData.centerImage} 
                alt="About us center image"
                onError={(e) => {
                  // Fallback to default image if API image fails to load
                  e.target.src = about1;
                }}
              />
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-30">
            <div className="vl-about-sm-content" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={300}>
              <p>{aboutData.topRightDescription}</p>
              <div className="btn-area">
                <Link to="/about" className="header-btn1">
                  About Us <span><FaArrowRight /></span>
                </Link>
              </div>
              <div className="vl-about-sm-thumb d-none d-md-block">
                <img 
                  className="w-100" 
                  src={aboutData.rightImage} 
                  alt="About us right image"
                  onError={(e) => {
                    // Fallback to default image if API image fails to load
                    e.target.src = about2;
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;