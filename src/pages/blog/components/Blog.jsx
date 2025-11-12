import { useState, useEffect } from 'react';
import { blogData } from '../data';
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { storiesAPI } from '@/utils/storiesApi';
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Blog = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format date utility function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric'
    });
  };

  // Clean and truncate text content
  const cleanAndTruncateText = (htmlContent, maxLength = 150) => {
    if (!htmlContent) return 'No content available';
    
    // Remove HTML tags
    const textContent = htmlContent.replace(/<[^>]*>/g, '');
    
    // Split by paragraphs (double line breaks or paragraph indicators)
    const paragraphs = textContent.split(/\n\s*\n|\r\n\s*\r\n/).filter(p => p.trim());
    
    // Get the first paragraph only
    const firstParagraph = paragraphs[0] || textContent;
    
    // Truncate if longer than maxLength
    if (firstParagraph.length > maxLength) {
      return firstParagraph.substring(0, maxLength).trim() + '...';
    }
    
    return firstParagraph.trim();
  };

  // Create excerpt from content
  const createExcerpt = (content, maxLength = 150) => {
    return cleanAndTruncateText(content, maxLength);
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await storiesAPI.getStories();
        
        if (response.success && response.stories) {
          // Map API data to match component structure
          const mappedStories = response.stories.map(story => ({
            ...story,
            excerpt: createExcerpt(story.content),
            date: formatDate(story.date)
          }));
          setStories(mappedStories);
        } else {
          throw new Error('Failed to load stories');
        }
      } catch (err) {
        console.error('Error fetching stories:', err);
        setError(err.message);
        // Use static data as fallback
        setStories(blogData);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);
  return <section className="vl-blog-inner sp2">
            <Container>
                {loading ? (
                    <Row className="g-4">
                        {[...Array(6)].map((_, idx) => (
                            <Col lg={4} md={6} key={idx} className="d-flex mb-4">
                                <div className="vl-single-blg-item d-flex flex-column h-100 w-100">
                                    <div className="vl-blg-thumb">
                                        <Skeleton height={250} style={{ borderRadius: '8px' }} />
                                    </div>
                                    <div className="vl-meta">
                                        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
                                            <li>
                                                <Skeleton width={120} height={18} />
                                            </li>
                                            <li>
                                                <Skeleton width={100} height={18} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="vl-blg-content d-flex flex-column flex-grow-1">
                                        <Skeleton height={28} width="85%" style={{ marginBottom: '15px' }} />
                                        <Skeleton count={3} style={{ marginBottom: '8px' }} />
                                        <Skeleton height={20} width={120} style={{ marginTop: '15px' }} />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                ) : error ? (
                    <Row>
                        <Col lg={12}>
                            <div className="alert alert-warning text-center">
                                <p>Unable to load stories. Showing cached data.</p>
                                <p><small>{error}</small></p>
                            </div>
                        </Col>
                    </Row>
                ) : null}
                
                <Row className="g-4">
                                        {stories?.map((item, idx) => (
                                            <Col lg={4} md={6} key={item._id || idx} className="d-flex mb-4">
                                                <div className="vl-single-blg-item d-flex flex-column h-100 w-100">
                                                    <div className="vl-blg-thumb">
                                                        <Link to={`/blog-single/${item._id}`}>
                                                            <img 
                                                                className="w-100" 
                                                                src={getImageUrl(item.image)} 
                                                                alt={item.title || 'Story'} 
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="vl-meta">
                                                        <ul>
                                                            <li>
                                                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                                    <span className="top-minus">
                                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </span> 
                                                                    <span>{item.date}</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                                    <span className="top-minus">
                                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </span>
                                                                    <span>{item.author || 'Anonymous'}</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="vl-blg-content d-flex flex-column flex-grow-1">
                                                        <h3 className="title">
                                                            <Link to={`/blog-single/${item._id}`}>{item.title}</Link>
                                                        </h3>
                                                        <p className="flex-grow-1">{item.excerpt}</p>
                                                        <Link to={`/blog-single/${item._id}`} className="read-more mt-auto">
                                                            Read More <span><FaArrowRight /></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                </Row>
                {stories && stories.length >= 9 && (
                  <Row>
                    <Col xs={12} className="m-auto">
                        <div className="theme-pagination thme-pagination-mt text-center mt-18">
                            <ul>
                                <li><a href="#"><FaAngleLeft className="fa-solid fa-angle-left" /></a></li>
                                <li><a className="active" href="#">01</a></li>
                                <li><a href="#">02</a></li>
                                <li>...</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#"><FaAngleRight className="fa-solid fa-angle-right" /></a></li>
                            </ul>
                        </div>
                    </Col>
                  </Row>
                )}
            </Container>
        </section>;
};
export default Blog;