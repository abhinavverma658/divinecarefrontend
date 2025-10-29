import React, { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { homeAPI } from '../../../../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";
const Team = () => {
  const [teamData, setTeamData] = useState({
    heading: 'Meet our Volunteer members',
    description: 'Provide tips, articles, or expert advice on maintaining a healthy work-life balance, managing, Workshops or seminars organizational.',
    members: []
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('👥 [Team Component] Fetching team members using centralized API...');
      
      // Use centralized API with token management and fallback handling
      const response = await homeAPI.getTeamMembers();
      
      // Check if using fallback data
      if (response.fallback) {
        console.warn('👥 [Team Component] ⚠️ USING FALLBACK DATA');
      } else {
        console.log('👥 [Team Component] ✅ USING REAL API DATA');
      }
      
      // Handle the correct response structure: response.section
      const section = response.section;
      
      if (response.success && section) {
        console.log('👥 [Team Component] Processing team members:', section.members.length, 'members found');
        
        // Convert backend data to frontend format
        const convertedMembers = section.members.map((member, index) => ({
          id: member._id || index,
          name: member.fullName,
          role: member.designation,
          image: member.image,
          // Add default social links since they're not in the backend structure
          social: {
            facebook: '#',
            twitter: '#',
            instagram: '#',
            github: '#'
          }
        }));
        
        const newData = {
          _id: section._id,
          heading: section.heading || teamData.heading,
          description: section.description || teamData.description,
          members: convertedMembers,
          updatedAt: section.updatedAt
        };
        
        setTeamData(newData);
        console.log('👥 [Team Component] Data updated:', {
          heading: newData.heading,
          membersCount: newData.members.length,
          isFallback: response.fallback || false,
          sectionId: newData._id
        });
      } else {
        console.log('👥 [Team Component] Using default team data');
      }
    } catch (error) {
      console.error('👥 [Team Component] Error fetching team members:', error);
      setError(error.message);
      // Keep default data on error
    } finally {
      setLoading(false);
    }
  };

  // Don't render if no team members available
  if (!teamData.members || teamData.members.length === 0) {
    return (
      <section className="vl-team-bg-1 sp1">
        <Container>
          <div className="vl-team-section-title mb-60 text-center">
            <div className="vl-section-title-1">
              <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Meet our Volunteer</h5>
              <h2 className="title text-anime-style-3">{teamData.heading}</h2>
              <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                {teamData.description}
              </p>
              {loading && (
                <div className="text-center mt-3">
                </div>
              )}
              {!loading && (
                <div className="text-center mt-3">
                  <small className="text-muted">No team members available at the moment.</small>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }
  return <section className="vl-team-bg-1 sp1">
            <Container>
                <div className="vl-team-section-title mb-60 text-center">
                    <div className="vl-section-title-1">
                        <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Meet our Volunteer</h5>
                        <h2 className="title text-anime-style-3">{teamData.heading}</h2>
                        <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                          {teamData.description}
                        </p>
                        {loading && (
                          <div className="text-center mt-3">
                            <small className="text-muted">Loading team members...</small>
                          </div>
                        )}
                        {error && (
                          <div className="text-center mt-3">
                            <small className="text-warning">Using cached team data</small>
                          </div>
                        )}
                    </div>
                </div>
                <Row id='team1'>
                    <Swiper modules={[Autoplay, Navigation]} autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }} slidesPerView={4} navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }} loop breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // Small screens
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // Tablets
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          } // Desktops
        }} spaceBetween={30}>
                        {teamData.members?.map((item, idx) => <SwiperSlide className="vl-team-parent" key={item._id || idx}>
                                <div className="vl-team-thumb">
                                    <img 
                                      width={301} 
                                      height={287} 
                                      src={item.image} 
                                      alt={`${item.name} - ${item.role}`}
                                      onError={(e) => {
                                        console.log('Image load error for:', item.image);
                                        // Set a placeholder image on error
                                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face';
                                      }}
                                    />
                                    <div className="vl-team-content">
                                        <h4 className="title">
                                            <Link to="/page/team">{item.name}</Link>
                                        </h4>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>
                    <div className="vl-swiper-button">
                        <div className="swiper-button-next" />
                        <div className="swiper-button-prev" />
                    </div>
                </Row>
            </Container>
        </section>;
};
export default Team;