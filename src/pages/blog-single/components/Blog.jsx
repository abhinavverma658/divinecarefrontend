import { blogData } from '../data';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import userImg from '@/assets/img/icons/vl-user-1.1.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
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
  const cleanAndTruncateText = (htmlContent, maxLength = 120) => {
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

  // Create excerpt from content (handle HTML content)
  const createExcerpt = (content, maxLength = 120) => {
    return cleanAndTruncateText(content, maxLength);
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await storiesAPI.getStories();
        
        if (response.success && response.stories) {
          // Map API data and limit to 3 stories
          const mappedStories = response.stories.slice(0, 3).map(story => ({
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
        // Use static data as fallback, limited to 3 items
        setStories(blogData.slice(0, 3));
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return <section className="vl-singlevent-iner pb-50">
            <Container>
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="more-title text-center mb-60">
                            <h2 className="title">More Stories</h2>
                        </div>
                    </Col>
                </Row>
                
                {loading ? (
                    <Row className="g-4">
                        {[...Array(3)].map((_, idx) => (
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
                    {stories.map((item, idx) => <Col lg={4} md={6} key={item._id || idx} className="d-flex mb-4">
                                <div className="vl-single-blg-item d-flex flex-column h-100 w-100">
                                    <div className="vl-blg-thumb">
                                        <Link to={`/blog-single/${item._id}`}><img className="w-100" src={getImageUrl(item.image)} alt={item.title || 'Story'} /></Link>
                                    </div>
                                    <div className="vl-meta">
                                        <ul>
                                            <li><a href="#">
                                                <span className="top-minus">
                                                    <img src={calenderImg} alt='calenderImg' />
                                                </span> 
                                                {item.date}
                                            </a></li>
                                            <li><a href="#">
                                                <span className="top-minus">
                                                    <img src={userImg} alt='userImg' />
                                                </span>
                                                {item.author || 'Anonymous'}
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className="vl-blg-content d-flex flex-column flex-grow-1">
                                        <h3 className="title"><Link to={`/blog-single/${item._id}`}>{item.title}</Link></h3>
                                        <div className="flex-grow-1" dangerouslySetInnerHTML={{ __html: `<p>${item.excerpt}</p>` }} />
                                        <Link to={`/blog-single/${item._id}`} className="read-more mt-auto">Read
                                            More <span><FaArrowRight /></span></Link>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Blog;