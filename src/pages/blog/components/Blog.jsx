import { useState, useEffect } from 'react';
import { blogData } from '../data';
import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import userImg from '@/assets/img/icons/vl-user-1.1.svg';
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { storiesAPI } from '@/utils/storiesApi';
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
                    <Row>
                        <Col lg={12}>
                            <div className="text-center py-5">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading stories...</p>
                            </div>
                        </Col>
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
                                                                src={item.image} 
                                                                alt={item.title || 'Story'} 
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="vl-meta">
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="top-minus">
                                                                        <img src={calenderImg} alt='calenderImg' />
                                                                    </span> 
                                                                    {item.date}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <span className="top-minus">
                                                                        <img src={userImg} alt='userImg' />
                                                                    </span>
                                                                    {item.author || 'Anonymous'}
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