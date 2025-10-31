import { useEffect, useState } from 'react';
import { Link } from "react-router";
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import { apiRequest } from '@/utils/api';
import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import userImg from '@/assets/img/icons/vl-user-1.1.svg';

const Blog = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    // Format date utility function
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            day: 'numeric',
            month: 'long', 
            year: 'numeric'
        });
    };

    useEffect(() => {
        const fetchStories = async () => {
            setLoading(true);
            try {
                // Fetch from /api/stories endpoint
                const res = await apiRequest('/stories', { method: 'GET' });
                // If response is an array, use it directly
                if (Array.isArray(res)) {
                    setStories(res);
                } else if (res && Array.isArray(res.stories)) {
                    setStories(res.stories);
                } else {
                    setStories([]);
                }
            } catch (err) {
                setStories([]);
            }
            setLoading(false);
        };
        fetchStories();
    }, []);

    const sortedStories = stories
        .sort((a, b) => {
            const dateA = new Date(a.date || a.createdAt || 0);
            const dateB = new Date(b.date || b.createdAt || 0);
            return dateB - dateA; // Newest first
        })
        .slice(0, 3); // Limit to 3 stories

    return (
        <section className="vl-blg sp2">
            <Container>
                <div className="vl-section-title-1 mb-60 text-center">
                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Stories</h5>
                    <h2 className="title text-anime-style-3">Stories of Relief and Recovery</h2>
                    <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        Ever wondered how your contributions make an impact? This blog dives into <br /> the tangible ways that donations big or small help provide food.
                    </p>
                </div>
                <Row>
                    {loading ? (
                        <Col lg={12} className="text-center">
                            <div>Loading stories...</div>
                        </Col>
                    ) : stories.length === 0 ? (
                        <Col lg={12} className="text-center">
                            <div>No stories found.</div>
                        </Col>
                    ) : (
                                                sortedStories.map((story, idx) => (
                                                    <Col lg={4} md={6} key={story._id || idx}>
                                                        <div className="vl-single-blg-item mb-30" data-aos="fade-up" data-aos-duration={1000 + idx * 200} data-aos-delay={300}>
                                                            <div className="vl-blg-thumb">
                                                                {story.image ? (
                                                                    <Link to={`/blog-single/${story._id}`}><img className="w-100" src={story.image} alt={story.title || 'Story'} /></Link>
                                                                ) : null}
                                                            </div>
                                                            <div className="vl-meta">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#">
                                                                            <span className="top-minus">
                                                                                <img src={calenderImg} alt='calenderImg' />
                                                                            </span> 
                                                                            {formatDate(story.date)}
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <span className="top-minus">
                                                                                <img src={userImg} alt='userImg' />
                                                                            </span>
                                                                            {story.author || 'Anonymous'}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="vl-blg-content">
                                                                <h3 className="title">
                                                                    <Link to={`/blog-single/${story._id}`}>{story.title || 'Untitled Story'}</Link>
                                                                </h3>
                                                                <p dangerouslySetInnerHTML={{ __html: (story.description || story.content || '').length > 120 
                                                                    ? (story.description || story.content || '').substring(0, 120) + '...'
                                                                    : (story.description || story.content || '')
                                                                }} />
                                                                <Link to={`/blog-single/${story._id}`} className="read-more">Read More <span><FaArrowRight /></span></Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                ))
                    )}
                </Row>
            </Container>
        </section>
    );
};
export default Blog;