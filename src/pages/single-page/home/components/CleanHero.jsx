import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { homeAPI } from '@/utils/api';
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg';
import { FaArrowRight } from "react-icons/fa6";

const CleanHero = () => {
  const [heroData, setHeroData] = useState({
    title: 'Default Title',
    subtitle: 'Default Subtitle', 
    description: 'Default description text',
    buttonText: 'Default Button',
    buttonLink: '/pages/contact'
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        console.log('CleanHero: Fetching hero data...');
        const response = await homeAPI.getHeroData();
        console.log('CleanHero: API Response:', response);
        if (response.success && response.data) {
          setHeroData(prevData => {
            const newData = {
              ...prevData,
              ...response.data
            };
            console.log('CleanHero: Setting hero data:', newData);
            return newData;
          });
        } else {
          console.log('CleanHero: API response not successful, using defaults');
        }
      } catch (err) {
        console.warn('CleanHero: API failed, using defaults:', err);
      }
    };
    fetchHeroData();
  }, []);

  console.log('CleanHero: Rendering with data:', heroData);

  return (
    <section style={{
      minHeight: '100vh',
      background: heroData.heroImage ? `url(${heroData.heroImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      color: 'white',
      border: '5px solid red' // Debug border to see if component renders
    }}>
      {/* Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }}></div>
      
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row>
          <Col lg={8}>
            <div style={{ padding: '2rem 0' }}>
              
              {/* DEBUG: Simple text first */}
              <div style={{
                background: 'red',
                color: 'white',
                padding: '20px',
                margin: '20px 0',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                DEBUG: Can you see this red box? Data: {JSON.stringify(heroData)}
              </div>

              {/* Subtitle */}
              <h5 style={{
                background: 'yellow',
                color: 'black',
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                border: '3px solid red'
              }}>
                <img src={titleIcon} alt="" style={{ marginRight: '8px', height: '16px' }} />
                SUBTITLE: {heroData.subtitle}
              </h5>
              
              {/* Main Title */}
              <h1 style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                lineHeight: '1.2',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                background: 'green',
                color: 'white',
                padding: '20px',
                border: '5px solid yellow'
              }}>
                TITLE: {heroData.title}
              </h1>
              
              {/* Description */}
              <p style={{
                fontSize: '1.5rem',
                lineHeight: '1.6',
                marginBottom: '2rem',
                maxWidth: '600px',
                background: 'blue',
                color: 'white',
                padding: '20px',
                border: '3px solid orange'
              }}>
                DESC: {heroData.description}
              </p>
              
              {/* Call to Action Button */}
              <a 
                href={heroData.buttonLink}
                style={{
                  background: '#007bff',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';
                }}
              >
                {heroData.buttonText}
                <FaArrowRight />
              </a>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CleanHero;