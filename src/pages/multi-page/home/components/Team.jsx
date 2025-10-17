import React, { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { teamData } from '../data';
import { homeAPI } from '../../../../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container, Row } from 'react-bootstrap';
import { Link } from "react-router";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";
const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching team members using centralized API...');
      
      // Use centralized API with token management and fallback handling
      const response = await homeAPI.getTeamMembers();
      
      if (response.success && response.teamMembers && Array.isArray(response.teamMembers)) {
        console.log('Processing team members:', response.teamMembers.length, 'members found');
        
        // Convert backend data to frontend format
        const convertedMembers = response.teamMembers
          .filter(member => {
            console.log('Checking member:', member.name || member.fullName, 'isActive:', member.isActive);
            return member.isActive !== false; // Only show active members
          })
          .map(member => {
            const converted = {
              id: member.id,
              name: member.name || member.fullName,
              role: member.designation || member.title,
              image: member.picture || member.image,
              // Add social links if available
              social: {
                facebook: member.socialLinks?.facebook || '#',
                twitter: member.socialLinks?.twitter || '#',
                instagram: member.socialLinks?.instagram || '#',
                github: member.socialLinks?.github || '#'
              }
            };
            console.log('Converted member:', converted);
            return converted;
          });
        
        console.log('Final converted members:', convertedMembers.length, 'active members');
        
        if (convertedMembers.length > 0) {
          setTeamMembers(convertedMembers);
          console.log('✅ Using dynamic team members from API');
        } else {
          console.log('⚠️ No active members found, using static data');
          setTeamMembers(teamData);
        }
      } else {
        // Fallback to static data if API response is empty
        console.log('📝 No team members from API or invalid response, using static data');
        console.log('API response details:', { 
          success: response.success, 
          hasTeamMembers: !!response.teamMembers,
          isArray: Array.isArray(response.teamMembers),
          count: response.teamMembers?.length 
        });
        setTeamMembers(teamData);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
      setError(error.message);
      
      // Fallback to static data on error
      console.log('Using fallback static team data');
      setTeamMembers(teamData);
    } finally {
      setLoading(false);
    }
  };

  // Use dynamic data if available, otherwise fallback to static data
  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : teamData;
  
  console.log('🎯 Display decision:', {
    teamMembersCount: teamMembers.length,
    displayMembersCount: displayTeamMembers.length,
    usingDynamic: teamMembers.length > 0,
    loading,
    error
  });
  return <section className="vl-team-bg-1 sp1">
            <Container>
                <div className="vl-team-section-title mb-60 text-center">
                    <div className="vl-section-title-1">
                        <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Meet
                            our Volunteer</h5>
                        <h2 className="title text-anime-style-3">Our Tem</h2>
                        <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>Provide tips, articles, or
                            expert advice on maintaining a healthy work- <br />life balance, managing, Workshops or
                            seminars </p>
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
                        {displayTeamMembers?.map((item, idx) => <SwiperSlide className="vl-team-parent" key={item.id || idx}>
                                <div className="vl-team-thumb">
                                    <img 
                                      width={301} 
                                      height={357} 
                                      className="w-100" 
                                      src={item.image} 
                                      alt={`${item.name} - ${item.role}`}
                                      onError={(e) => {
                                        console.log('Image load error for:', item.image);
                                        // You can set a default image here if needed
                                        // e.target.src = '/path/to/default-avatar.jpg';
                                      }}
                                    style={{objectFit: "cover"}}
                                    />
                                </div>
                                <div className="vl-team-content text-center">
                                    <Link to="/pages/team" className="title">{item.name}</Link>
                                    <span>{item.role}</span>
                                </div>
                            </SwiperSlide>)}
                    </Swiper>
                    <div className='owl-nav'>
                        <button className="owl-prev swiper-button-prev">
                            <img src={arrowLeft} alt="arrowLeft" />
                        </button>

                        <button className="owl-next swiper-button-next">
                            <img src={angleRight} alt="angleRight" />
                        </button>
                    </div>
                </Row>
            </Container>
        </section>;
};
export default Team;