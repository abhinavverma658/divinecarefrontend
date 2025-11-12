import calenderImg from '@/assets/img/icons/vl-calender-1.1.svg';
import thumb1 from '@/assets/img/blog/vl-blog-large-thumb-1.1.png';
import tags from '@/assets/img/icons/vl-tags.svg';
import chatting from '@/assets/img/icons/vl-chatting-icon.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router";
import { useState, useEffect } from 'react';
import { storiesAPI } from '@/utils/storiesApi';
import { getImageUrl } from '@/utils/imageUtils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const SideBar = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
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

  useEffect(() => {
    const fetchStory = async () => {
      if (!id) {
        setError('No story ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await storiesAPI.getStoryById(id);
        
        if (response.success && response.story) {
          setStory(response.story);
        } else {
          throw new Error('Failed to load story');
        }
      } catch (err) {
        console.error('Error fetching story:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return <div className="vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="vl-event-content-area">
              <div className="vl-large-thumb">
                <Skeleton height={400} style={{ borderRadius: '8px' }} />
              </div>
              <div className="vl-blog-meta-box mt-32">
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0 }}>
                  <li>
                    <Skeleton circle width={40} height={40} style={{ marginRight: '8px', display: 'inline-block' }} />
                    <Skeleton width={100} height={20} style={{ display: 'inline-block' }} />
                  </li>
                  <li>
                    <Skeleton width={120} height={20} />
                  </li>
                  <li>
                    <Skeleton width={80} height={20} />
                  </li>
                  <li>
                    <Skeleton width={90} height={20} />
                  </li>
                </ul>
              </div>
              <div className="vl-event-content vl-blg-content">
                <Skeleton height={40} width="80%" style={{ marginBottom: '20px' }} />
                <Skeleton count={8} style={{ marginBottom: '10px' }} />
              </div>
              <div className="vl-blg-icon-box">
                <Row>
                  <Col lg={6} md={6}>
                    <div className="single-blog-box1 mb-30">
                      <Skeleton height={28} width="80%" style={{ marginBottom: '10px' }} />
                      <Skeleton count={2} style={{ marginBottom: '8px' }} />
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="single-blog-box1 mb-30">
                      <Skeleton height={28} width="80%" style={{ marginBottom: '10px' }} />
                      <Skeleton count={2} style={{ marginBottom: '8px' }} />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
  }

  if (error || !story) {
    return <div className="vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="alert alert-warning text-center">
              <h4>Story Not Found</h4>
              <p>The requested story could not be loaded.</p>
              <Link to="/blog" className="btn btn-primary">Back to Stories</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
  }

  return <div className="vl-sidebar-area sp2">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="vl-event-content-area">
                            <div className="vl-large-thumb">
                                <img className="w-100 img-fluid" src={story.image ? getImageUrl(story.image) : thumb1} alt={story.title || 'Story'} />
                            </div>
                            <div className="vl-blog-meta-box mt-32">
                                <ul>
                                    <li><a href="#"> <span><img src={story.image ? getImageUrl(story.image) : thumb1} alt='author' /></span>{story.author || 'Anonymous'}</a></li>
                                    <li><a href="#"> <span className="icon"><img className="mt-4-" src={calenderImg} alt='calenderImg' /></span> {formatDate(story.date)}</a>
                                    </li>
                                    <li><a href="#"> <span className="icon"><img className="mt-4-" src={tags} alt='tags' /></span> Stories</a></li>
                                    <li><a href="#"> <span className="icon"><img className="mt-4-" src={chatting} alt='chatting' /></span>Comments</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="vl-event-content vl-blg-content">
                                <h2 className="title">{story.title}</h2>
                                <div className="para pb-16" dangerouslySetInnerHTML={{ __html: story.content }} />
                            </div>
                            <div className="vl-blg-icon-box">
                                <Row>
                                    <Col lg={6} md={6}>
                                        <div className="single-blog-box1 mb-30">
                                            <Link to="/blog-single" className="title">Mission and Vision</Link>
                                            <p className="para">Join us on this journey &amp; let continue making the
                                                world a better place.</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <div className="single-blog-box1 mb-30">
                                            <Link to="/blog-single" className="title">A Journey of Impact</Link>
                                            <p className="para">Our blog is more than just collection of updates it’s a
                                                platform for sharing.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {/*<div className="event-content-area">
                                <h2 className="title">Join Us in Making a Difference</h2>
                                <p className="para">We invite you to join us, meet like-minded individuals, and become
                                    part of a movement that makes real, lasting change. Whether you attend, volunteer,
                                    or help spread the word, your involvement is invaluable. Explore our upcoming
                                    events.</p>
                                <h2 className="title">Event Highlights &amp; Details</h2>
                                <p className="para">Our events are designed to unite passionate individuals, raise
                                    critical funds, &amp; increase awareness for the causes we serve. Each event offers
                                    a unique opportunity to connect, contribute, and witness the power of community in
                                    action.</p>
                                <p className="para">Our events are opportunities to bring people together for meaningful
                                    causes, creating moments of connection and impact that extend far beyond the day
                                    itself.</p>
                                <h2 className="title">Upcoming Fundraisers and Community Events</h2>
                                <p className="para">From heartwarming charity dinners to hands-on volunteer days, these
                                    gatherings allow us to celebrate milestones, share stories of impact, and inspire
                                    further action. By joining us at our upcoming events, you’re not just attending
                                    you’re becoming part movement.</p>
                                <p className="para">Each event, whether a fundraiser, awareness campaign, volunteer
                                    drive, or community gathering, plays a vital role in supporting our mission and
                                    raising essential resources.</p>
                                <h2 className="title">Event Details and How to Participate</h2>
                                <p className="para">Whether you attend, volunteer, or help spread the word, your
                                    involvement is invaluable. Explore our upcoming events, find ways to get involved,
                                    and help us create brighter futures for those in need. Together, we can make an
                                    extraordinary impact!</p>
                            </div>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>;
};
export default SideBar;