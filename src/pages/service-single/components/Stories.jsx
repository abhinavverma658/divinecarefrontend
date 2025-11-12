import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { storiesAPI } from '@/utils/storiesApi';
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await storiesAPI.getStories();
        
        if (response.success && response.stories) {
          // Limit to only 4 stories
          setStories(response.stories.slice(0, 4));
        } else if (Array.isArray(response)) {
          // Handle direct array response
          setStories(response.slice(0, 4));
        } else {
          throw new Error('Failed to load stories');
        }
      } catch (err) {
        console.error('Error fetching stories:', err);
        setError(err.message);
        // Fallback to default stories if API fails
        setStories([
          {
            _id: 1,
            title: "Emma's Journey to Independence",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
            author: "Emma R.",
            content: "When I first moved into Divine Care, I was nervous about living away from my family. But the staff helped me build confidence, learn daily skills, and discover that I could truly be independent. Now, I cook my own meals, make new friends, and feel proud of how far I've come."
          },
          {
            _id: 2,
            title: "A Parent's Peace of Mind",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
            author: "Michael & Laura S.",
            content: "As a parent, finding the right home for my son was overwhelming. The compassion and care he receives here are beyond what we hoped for. Divine Care gave him a place where he's safe, happy, and part of a loving community — and that gives our whole family peace."
          },
          {
            _id: 3,
            title: "Finding a Second Family",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
            author: "Ryan L.",
            content: "Divine Care isn't just where I'm living. It's where I belong. Everyone treats each other like family. We celebrate birthdays, cook together, and share in each other's everyday joys. It's the first time I've truly felt at home."
          },
          {
            _id: 4,
            title: "A Family's Gratitude",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
            author: "The Garcia Family",
            content: "Divine Care has been a blessing for our daughter. The team not only supports her needs but also encourages her dreams. We've seen her grow into a more confident, joyful person. We'll always be grateful for the difference they've made."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // Create excerpt from content (strip HTML and limit to 120 characters)
  const createExcerpt = (content, maxLength = 180) => {
    if (!content) return '';
    // Strip HTML tags for length calculation
    const strippedContent = content.replace(/<[^>]*>/g, '');
    if (strippedContent.length <= maxLength) return content;
    
    // Find a good breaking point (space) near the limit
    const excerpt = strippedContent.substring(0, maxLength);
    const lastSpace = excerpt.lastIndexOf(' ');
    const finalExcerpt = lastSpace > 0 ? excerpt.substring(0, lastSpace) : excerpt;
    
    return finalExcerpt + '..';
  };

  return (
    <section className="vl-stories sp2">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <h2 className="title">Stories That Inspire Hope</h2>
          </Col>
        </Row>
        
        {loading ? (
          <Row>
            <Col lg={12}>
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="vl-single-story mb-4 p-4" style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px'
                }}>
                  <div className="d-flex align-items-start">
                    <div className="story-avatar me-4">
                      <Skeleton circle width={80} height={80} />
                    </div>
                    <div className="story-content flex-grow-1">
                      <Skeleton height={30} width="60%" style={{ marginBottom: '15px' }} />
                      <Skeleton count={3} style={{ marginBottom: '10px' }} />
                      <Skeleton height={20} width={150} style={{ marginBottom: '15px' }} />
                      <Skeleton height={40} width={120} style={{ borderRadius: '4px' }} />
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        ) : error ? (
          <Row>
            <Col lg={12}>
              <div className="alert alert-info text-center">
                Showing default stories. {error}
              </div>
            </Col>
          </Row>
        ) : null}
        
        <Row>
          <Col lg={12}>
            <div className="vl-stories-list">
              {stories.map((story, idx) => (
                <div key={story._id || story.id} className="vl-single-story mb-4 p-4" style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px'
                }}>
                  <div className="d-flex align-items-start">
                    <div className="story-avatar me-4">
                      <img 
                        src={getImageUrl(story.image) || 'https://via.placeholder.com/80'} 
                        alt={story.title || story.name}
                        className="rounded-circle"
                        style={{ 
                          width: '80px', 
                          height: '80px', 
                          objectFit: 'cover',
                          flexShrink: 0
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop';
                        }}
                      />
                    </div>
                    <div className="story-content flex-grow-1">
                      <h4 className="title mb-3">
                        {story.title || story.name}
                      </h4>
                      <div 
                        className="para mb-3" 
                        style={{ fontStyle: 'italic' }}
                        dangerouslySetInnerHTML={{ 
                          __html: `"${createExcerpt(story.content)}"` 
                        }} 
                      />
                      <div className="story-author mb-3">
                        — {story.author}
                      </div>
                      <a 
                        href={`/blog-single/${story._id || story.id}`} 
                        className="btn btn-sm"
                        style={{
                          backgroundColor: '#012372',
                          color: '#fff',
                          border: 'none',
                          padding: '8px 20px',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          display: 'inline-block',
                          transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e6a825'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#012372'}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stories;