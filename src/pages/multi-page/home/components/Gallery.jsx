import React, { useState, useEffect } from 'react';
import gallerySearch from '@/assets/img/icons/vl-gallery-search-1.1.svg';
import { homeAPI } from '../../../../utils/api';
import { getImageUrl } from '@/utils/imageUtils';
import { Col, Container, Row } from 'react-bootstrap';
import GlightBox from "@/components/GlightBox";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Gallery = () => {
  const [galleryData, setGalleryData] = useState({
    heading: 'The Frontlines of Relief',
    description: 'These titles aim to convey emotion and meaning while showcasing the importance of your organization\'s work through visuals.',
    images: [],
    _id: null,
    updatedAt: null
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
      
      // Handle the correct response structure: response.gallery
      const gallery = response.gallery;
      
      if (response.success && gallery) {
        const newData = {
          _id: gallery._id,
          heading: gallery.heading || galleryData.heading,
          description: gallery.description || galleryData.description,
          images: gallery.images || [],
          updatedAt: gallery.updatedAt
        };
        setGalleryData(newData);
        console.log('🖼️ [Gallery Component] Data updated:', {
          heading: newData.heading,
          imageCount: newData.images.length,
          isFallback: response.fallback || false,
          galleryId: newData._id
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

  // Only render if there are images to show
  if (!galleryData.images || galleryData.images.length === 0) {
    return (
      <section id='gallery' className="vl-gallery sp2">
        <style>{`.gallery-subtitle--important{font-size:21px !important;}`}</style>
        <Container>
          <div className="vl-gallery-content mb-60">
            <div className="vl-section-title-1">
              <h5
                className="subtitle gallery-subtitle--important"
                data-aos="fade-right"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                Our Gallery
              </h5>
              <h2 className="title text-anime-style-3">{galleryData.heading}</h2>
              <p data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                {galleryData.description}
              </p>
              {loading && (
                <div className="mt-5">
                  <Row>
                    {[...Array(4)].map((_, idx) => (
                      <Col lg={6} md={6} className="mb-30" key={idx}>
                        <Skeleton height={350} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
              {!loading && (
                <div className="text-center mt-3">
                  <small className="text-muted">No gallery images available at the moment.</small>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
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
                          <div style={{ minHeight: '1px' }}>
                            <Skeleton width={200} height={20} style={{ margin: '0 auto' }} />
                          </div>
                        )}
                        {error && (
                          <div className="text-center mt-3">
                            <small className="text-warning">Using cached gallery content</small>
                          </div>
                        )}
                    </div>
                    {/* CTA Button removed as it's not part of the backend structure */}
                </div>
                <GlightBox>
                    <Row>
                        {galleryData.images.map((image, index) => (
                          <Col lg={6} md={6} className="mb-30" key={image._id || index}>
                              <div className="vl-single-box" data-aos="zoom-in-up" data-aos-duration={800 + (index * 100)} data-aos-delay={300}>
                                  <img 
                                    className="w-100" 
                                    src={getImageUrl(image.url)} 
                                    alt={`Gallery image ${index + 1}`}
                                    onError={(e) => {
                                      console.log('Image load error for:', image.url);
                                      // Set a placeholder image on error
                                      e.target.src = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                                    }}
                                  />
                                  {/* <a href={getImageUrl(image.url)} className="glightbox search-ic">
                                      <span><img src={gallerySearch} alt='gallerySearch' /></span>
                                  </a> */}
                              </div>
                          </Col>
                        ))}
                    </Row>
                </GlightBox>
            </Container>
        </section>;
};
export default Gallery;