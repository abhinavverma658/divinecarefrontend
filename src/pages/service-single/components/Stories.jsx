import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { storiesAPI } from '@/utils/storiesApi';

const Stories = () => {
  const [stories] = useState([
    {
      id: 1,
      name: "Emma's Journey to Independence",
      image: "/api/placeholder/60/60",
      content: "When I first moved into Divine Care, I was nervous about living away from my family. But the staff helped me build confidence, learn daily skills, and discover that I could truly be independent. Now, I cook my own meals, make new friends, and feel proud of how far I've come."
    },
    {
      id: 2, 
      name: "A Parent's Peace of Mind",
      image: "/api/placeholder/60/60",
      content: "As a parent, finding the right home for my son was overwhelming. The compassion and care he receives here are beyond what we hoped for. Divine Care gave him a place where he's safe, happy, and part of a loving community — and that gives our whole family peace."
    },
    {
      id: 3,
      name: "Finding a Second Family", 
      image: "/api/placeholder/60/60",
      content: "At Divine Care isn't just where I'm living. It's where I belong. Everyone treats each other like family. We celebrate birthdays, cook together, and share in each other's everyday joys. It's the first time I've truly felt at home."
    },
    {
      id: 4,
      name: "A Family's Gratitude",
      image: "/api/placeholder/60/60", 
      content: "Divine Care has been a blessing for our daughter. The team not only supports her needs but also encourages her dreams. We've seen her grow into a more confident, joyful person. We'll always be grateful for the difference they've made."
    }
  ]);

  return (
    <section className="vl-stories sp2">
      <Container>
        <Row>
          <Col lg={12} className="mb-5">
            <h2 className="title">Stories That Inspire Hope</h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12}>
            <div className="vl-stories-list">
              {stories.map((story, idx) => (
                <div key={story.id} className="vl-single-story mb-4 p-4" style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '8px'
                }}>
                  <div className="d-flex align-items-start">
                    <div className="story-avatar me-4">
                      <img 
                        src={story.image} 
                        alt={story.name}
                        className="rounded-circle"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="story-content flex-grow-1">
                      <h4 className="title mb-3">
                        {story.name}
                      </h4>
                      <p className="para mb-3">
                        "{story.content}"
                      </p>
                      <div className="story-author">
                        — {story.name.includes('Emma') ? 'Emma B.' : 
                            story.name.includes('Parent') ? 'Michael & Laura S.' :
                            story.name.includes('Second') ? 'Ryan L.' : 'The Carter Family'}
                      </div>
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