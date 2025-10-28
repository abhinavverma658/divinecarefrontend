import { useState, useEffect } from 'react';
import { blogData } from '../data';
import { Link } from "react-router";
import { FaArrowRight } from 'react-icons/fa6';
import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import userImg from '@/assets/img/icons/vl-user-1.1.svg';
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

  // Create excerpt from content
  const createExcerpt = (content, maxLength = 150) => {
    if (!content) return 'No content available';
    return content.length > maxLength 
      ? content.substring(0, maxLength) + '...' 
      : content;
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
  return <section className="vl-singlevent-iner pb-50">
            <Container>
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="more-title text-center mb-60">
                            <h2 className="title">More Blog</h2>
                        </div>
                    </Col>
                </Row>
                
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

                <Row>
                    {stories.map((item, idx) => <Col lg={4} md={6} key={item._id || idx}>
                                <div className="vl-single-blg-item mb-30">
                                    <div className="vl-blg-thumb">
                                        <Link to="/blog-single">
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
                                    <div className="vl-blg-content">
                                        <h3 className="title">
                                            <Link to="/blog-single">{item.title}</Link>
                                        </h3>
                                        <p>{item.excerpt}</p>
                                        <Link to="/blog-single" className="read-more">
                                            Read More <span><FaArrowRight /></span>
                                        </Link>
                                    </div>
                                </div>
                            </Col>)}
                </Row>
            </Container>
        </section>;
};
export default Blog;