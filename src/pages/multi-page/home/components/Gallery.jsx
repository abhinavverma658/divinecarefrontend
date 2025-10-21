import React, { useState, useEffect } from 'react';
import gallerySearch from '@/assets/img/icons/vl-gallery-search-1.1.svg';
import galleryImg1 from '@/assets/img/gallery/vl-gallery-1.1.png';
import galleryImg2 from '@/assets/img/gallery/vl-gallery-1.2.png';
import galleryImg3 from '@/assets/img/gallery/vl-gallery-1.3.png';
import galleryImg4 from '@/assets/img/gallery/vl-gallery-1.4.png';
import galleryImg5 from '@/assets/img/gallery/vl-gallery-1.5.png';
import galleryImg6 from '@/assets/img/gallery/vl-gallery-1.6.png';
import { homeAPI } from '../../../../utils/api';
import { FaArrowRight } from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import GlightBox from "@/components/GlightBox";
const Gallery = () => {
  const [galleryData, setGalleryData] = useState({
    heading: 'The Frontlines of Relief',
    description: 'These titles aim to convey emotion and meaning while showcasing the importance of your organization\'s work through visuals.',
    images: [
      { id: 1, url: galleryImg1, public_id: 'gallery/default1' },
      { id: 2, url: galleryImg2, public_id: 'gallery/default2' },
      { id: 3, url: galleryImg3, public_id: 'gallery/default3' },
      { id: 4, url: galleryImg4, public_id: 'gallery/default4' },
      { id: 5, url: galleryImg5, public_id: 'gallery/default5' },
      { id: 6, url: galleryImg6, public_id: 'gallery/default6' }
    ],
    ctaButton: {
      text: 'Vineyard Venues',
      link: '/event-single'
    },
    isActive: true
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🖼️ [Gallery Component] Fetching gallery data using centralized API...');
      
      // Use centralized API with token management and fallback handling
      const response = await homeAPI.getGalleryData();
      
      // Check if using fallback data
      if (response.fallback) {
        console.warn('🖼️ [Gallery Component] ⚠️ USING FALLBACK DATA');
      } else {
        console.log('🖼️ [Gallery Component] ✅ USING REAL API DATA');
      }
      
      // Handle both response.gallery and response.galleryData (for backwards compatibility)
      const gallery = response.gallery || response.galleryData;
      
      if (response.success && gallery) {
        const newData = {
          ...prevData => prevData,
          heading: gallery.heading || galleryData.heading,
          description: gallery.description || galleryData.description,
          images: gallery.images && gallery.images.length > 0 ? gallery.images : galleryData.images,
          ctaButton: gallery.ctaButton || galleryData.ctaButton,
          isActive: gallery.isActive !== undefined ? gallery.isActive : galleryData.isActive
        };
        setGalleryData(newData);
        console.log('🖼️ [Gallery Component] Data updated:', {
          heading: newData.heading,
          imageCount: newData.images.length,
          isFallback: response.fallback || false
        });
      } else {
        console.log('🖼️ [Gallery Component] Using default gallery data');
      }
    } catch (error) {
      console.error('🖼️ [Gallery Component] Error fetching gallery data:', error);
      setError(error.message);
      // Keep default data on error
    } finally {
      setLoading(false);
    }
  };

  // Don't render if not active
  if (!galleryData.isActive) {
    return null;
  }
  return <section id='gallery' className="vl-gallery sp2">
            <Container>
                <div className="vl-gallery-content mb-60">
                    <div className="vl-section-title-1">
                        <h5 className="subtitle" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>Our
                            Gallery</h5>
                        <h2 className="title text-anime-style-3">{galleryData.heading}</h2>
                        <p data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                            {galleryData.description}
                        </p>
                        {loading && (
                          <div className="text-center mt-3">
                            <small className="text-muted">Loading latest gallery...</small>
                          </div>
                        )}
                        {error && (
                          <div className="text-center mt-3">
                            <small className="text-warning">Using cached gallery content</small>
                          </div>
                        )}
                    </div>
                    <div className="vl-gallery-btn text-end" data-aos="fade-left" data-aos-duration={900} data-aos-delay={300}>
                        <div className="btn-area">
                            <Link to={galleryData.ctaButton.link} className="header-btn1">
                              {galleryData.ctaButton.text} <span><FaArrowRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <GlightBox>
                    <Row>
                        {galleryData.images.map((image, index) => (
                          <Col lg={6} md={6} className="mb-30" key={image.id || index}>
                              <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={800 + (index * 100)} data-aos-delay={300}>
                                  <img 
                                    className="w-100" 
                                    src={image.url} 
                                    alt={`Gallery image ${index + 1}`}
                                    onError={(e) => {
                                      console.log('Image load error for:', image.url);
                                      // Fallback to default images if API image fails
                                      const defaultImages = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6];
                                      if (defaultImages[index]) {
                                        e.target.src = defaultImages[index];
                                      }
                                    }}
                                  />
                                  <a href={image.url} className="glightbox search-ic">
                                      <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                  </a>
                              </div>
                          </Col>
                        ))}
                    </Row>
                </GlightBox>
            </Container>
        </section>;
};
export default Gallery;