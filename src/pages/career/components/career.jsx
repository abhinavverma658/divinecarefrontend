import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import logo from '@/assets/img/logo/16.png';
import notFoundImg from '@/assets/img/career/notFound.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ApplicationModal = ({ show, handleClose, jobTitle, jobDescription, jobId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
    resume: null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contactNumber', formData.contactNumber);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('resume', formData.resume);
      formDataToSend.append('coverLetter', formData.coverLetter);

      const response = await fetch(`https://divinecare-backend.onrender.com/api/careers/${jobId}/apply`, {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          contactNumber: '',
          address: '',
          resume: null,
          coverLetter: ''
        });
        alert('Application submitted successfully!');
        handleClose();
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton style={{ border: 'none', paddingBottom: 0 }}>
        <Modal.Title style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>
          Application Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: '30px' }}>
        <div className="mb-4">
          <h5 className="fw-bold mb-2">{jobTitle}</h5>
          <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {jobDescription}
          </p>
        </div>

        <Form onSubmit={handleSubmit}>
          {submitError && (
            <div className="alert alert-danger" role="alert">
              {submitError}
            </div>
          )}
          
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                  Full Name<span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '15px',
                    padding: '12px 16px',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.95rem'
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                  Email id<span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email id"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '15px',
                    padding: '12px 16px',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.95rem'
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                  Contact Number<span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="contactNumber"
                  placeholder="Enter your Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '15px',
                    padding: '12px 16px',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.95rem'
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                  Address<span style={{ color: 'red' }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: '15px',
                    padding: '12px 16px',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.95rem'
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: '600', fontSize: '0.95rem' }}>
              Resume<span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <div style={{ position: 'relative' }}>
              <Form.Control
                type="file"
                name="resume"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                style={{
                  borderRadius: '15px',
                  padding: '12px 16px',
                  border: '1px solid #e0e0e0',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3M12 3L8 7M12 3L16 7M3 15V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V15" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <Form.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
              Upload your Resume
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontWeight: '600', fontSize: '0.95rem' }}>
              Cover Letter
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="coverLetter"
              placeholder="Enter your Message....."
              value={formData.coverLetter}
              onChange={handleChange}
              style={{
                borderRadius: '15px',
                padding: '12px 16px',
                border: '1px solid #e0e0e0',
                fontSize: '0.95rem',
                resize: 'none'
              }}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#003366',
                border: 'none',
                borderRadius: '15px',
                padding: '12px 60px',
                fontSize: '1rem',
                fontWeight: '600',
                minWidth: '200px',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);
  const [reviewCount, setReviewCount] = useState(() => {
    // Initialize review count from localStorage or random value
    const savedCount = localStorage.getItem(`job-reviews-${job._id}`);
    return savedCount ? parseInt(savedCount) : Math.floor(Math.random() * 5000) + 1000;
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Increment review count on component mount
  useEffect(() => {
    const newCount = reviewCount + Math.floor(Math.random() * 3) + 1;
    setReviewCount(newCount);
    localStorage.setItem(`job-reviews-${job._id}`, newCount.toString());
  }, []);

  // Calculate days ago
  const getDaysAgo = (dateString) => {
    const posted = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Determine experience level label
  const getExperienceLabel = (experience) => {
    if (!experience) return 'Fresher Required';
    
    // Extract numeric value from experience string (e.g., "0-2 years" -> 2)
    const match = experience.match(/(\d+)-(\d+)/);
    if (match) {
      const maxYears = parseInt(match[2]);
      return maxYears <= 2 ? 'Fresher Required' : 'Senior Required';
    }
    
    // If just a number
    const years = parseInt(experience);
    if (!isNaN(years)) {
      return years <= 2 ? 'Fresher Required' : 'Senior Required';
    }
    
    return 'Fresher Required';
  };

  return (
    <>
      <div className="card border-0 mb-4" style={{ borderRadius: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title fw-bold mb-2">{job.title}</h5>
            <div className="d-flex align-items-center gap-3 mb-2">
              <span className="text-dark">
                {getExperienceLabel(job.experience)}
              </span>
              <div className="d-flex align-items-center gap-1">
                <span style={{color: '#ffbe2c', fontSize: '1.5rem'}}>★</span>
                <span className="fw-semibold" style={{fontSize: '0.95rem'}}>3.5</span>
                <span className="text-muted " style={{fontSize: '0.9rem', marginLeft: '5px'}}>{reviewCount.toLocaleString()} Reviews</span>
              </div>
            </div>
          </div>
          <img 
            src={logo} 
            alt="Care Logo" 
            style={{height: '40px'}}
          />
        </div>
        
        <div className="mb-3">
          <div className="d-flex gap-3 text-muted small mb-1">
            <span className="d-flex align-items-center gap-1">
              <svg fill="#6c757d" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M266.815 537.708c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 679.347c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 820.988c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM228.18 81.918v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm528.09 0v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path>
                  <path d="M890.877 137.517c33.931 0 61.44 27.509 61.44 61.44v703.375c0 33.931-27.509 61.44-61.44 61.44h-757.76c-33.931 0-61.44-27.509-61.44-61.44V198.957c0-33.931 27.509-61.44 61.44-61.44h757.76zm-757.76 40.96c-11.309 0-20.48 9.171-20.48 20.48v703.375c0 11.309 9.171 20.48 20.48 20.48h757.76c11.309 0 20.48-9.171 20.48-20.48V198.957c0-11.309-9.171-20.48-20.48-20.48h-757.76z"></path>
                  <path d="M575.03 338.288c0-33.93-27.51-61.44-61.44-61.44s-61.44 27.51-61.44 61.44c0 33.93 27.51 61.44 61.44 61.44s61.44-27.51 61.44-61.44zm40.96 0c0 56.551-45.849 102.4-102.4 102.4s-102.4-45.849-102.4-102.4c0-56.551 45.849-102.4 102.4-102.4s102.4 45.849 102.4 102.4z"></path>
                </g>
              </svg>
              {job.experience}
            </span>
            <span className="d-flex align-items-center gap-1">
              <svg width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#6c757d">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fill="#6c757d" d="M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"></path>
                  <path fill="#6c757d" d="M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"></path>
                  <path fill="#6c757d" d="M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"></path>
                </g>
              </svg>
              {job.salary}
            </span>
          </div>
          <div className="text-muted small d-flex align-items-center gap-1">
            <svg width="16px" height="16px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#6c757d">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Icon-Set" transform="translate(-104.000000, -411.000000)" fill="#6c757d">
                    <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location"></path>
                  </g>
                </g>
              </g>
            </svg>
            <span>{job.location}</span>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '16px 0' }} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="small text-muted">
            Posted: <span className="fw-semibold text-dark">{getDaysAgo(job.postedAt)} days ago</span> 
            {' '}Openings: <span className="fw-semibold text-dark">{job.openings}</span>
            {' '}Applicants: <span className="fw-semibold text-dark">{job.applicants?.length || 0}</span>
          </div>
          <button 
            className="btn btn-primary px-4" 
            style={{backgroundColor: '#003d82', borderColor: '#003d82', borderRadius: '20px'}}
            onClick={handleShow}
          >
            Apply
          </button>
          </div>
            <div className="mb-4" style={{ minHeight: '150px' }}>
          <h6 className="fw-bold mb-3">Role & Responsibilities</h6>
          <ul className="small text-muted" style={{lineHeight: '1.8', listStyleType: 'none', paddingLeft: 0}}>
            {job.responsibilities && job.responsibilities.length > 0 ? (
              job.responsibilities.map((responsibility, idx) => (
                <li key={idx} style={{position: 'relative', paddingLeft: '20px'}}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.5em',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#003d82',
                    borderRadius: '50%'
                  }}></span>
                  {responsibility}
                </li>
              ))
            ) : (
              <li style={{position: 'relative', paddingLeft: '20px'}}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: '0.5em',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#003d82',
                  borderRadius: '50%'
                }}></span>
                No responsibilities listed
              </li>
            )}
          </ul>
          </div>
             <div>
          <h6 className="fw-bold mb-3">Key Skills</h6>
          <div className="d-flex flex-wrap gap-2">
            {job.keySkills && job.keySkills.length > 0 ? (
              job.keySkills.slice(0, 10).map((skill, idx) => (
                <span 
                  key={idx} 
                  className="badge bg-light border text-dark px-3 py-2" 
                  style={{
                    borderRadius: '30px',
                    flex: idx < 5 ? '0 1 calc(20% - 8px)' : '0 1 calc(20% - 8px)',
                    minWidth: 'fit-content'
                  }}
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="badge bg-light text-dark border px-3 py-2">No skills listed</span>
            )}
          </div>
        </div>

        
      </div>
      </div>
    <ApplicationModal 
      show={showModal} 
      handleClose={handleClose}
      jobTitle={job.title}
      jobDescription={job.shortDescription}
      jobId={job._id}
    />
  </>
  );
};

const JobOpportunitiesPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://divinecare-backend.onrender.com/api/careers');
        const data = await response.json();
        
        if (data.success && data.jobs) {
          setJobs(data.jobs);
        } else {
          throw new Error('Failed to fetch jobs');
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  return (
    <>
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-5" style={{fontSize: '2.5rem'}}>Jobs Opportunities</h1>
        
        {loading ? (
          <div className="row row-cols-1 row-cols-lg-2 g-4">
            {[...Array(4)].map((_, idx) => (
              <div className="col" key={idx}>
                <div className="card border-0 mb-4" style={{ borderRadius: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div style={{ flex: 1 }}>
                        <Skeleton height={30} width="70%" style={{ marginBottom: '10px' }} />
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <Skeleton height={20} width={120} />
                          <div className="d-flex align-items-center gap-1">
                            <Skeleton circle width={24} height={24} />
                            <Skeleton height={20} width={40} />
                            <Skeleton height={18} width={100} />
                          </div>
                        </div>
                      </div>
                      <Skeleton height={40} width={40} />
                    </div>
                    
                    <div className="mb-3">
                      <Skeleton height={18} width="80%" style={{ marginBottom: '8px' }} />
                      <Skeleton height={18} width="60%" />
                    </div>

                    <Skeleton height={1} style={{ margin: '16px 0' }} />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Skeleton height={18} width="70%" />
                      <Skeleton height={40} width={100} style={{ borderRadius: '20px' }} />
                    </div>

                    <div className="mb-4">
                      <Skeleton height={22} width={200} style={{ marginBottom: '15px' }} />
                      <Skeleton count={3} style={{ marginBottom: '8px' }} />
                    </div>

                    <div>
                      <Skeleton height={22} width={120} style={{ marginBottom: '15px' }} />
                      <div className="d-flex flex-wrap gap-2">
                        {[...Array(5)].map((_, skillIdx) => (
                          <Skeleton key={skillIdx} height={32} width={80} style={{ borderRadius: '30px' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center" role="alert">
            <h5>Error loading jobs</h5>
            <p>{error}</p>
          </div>
        ) : jobs.length === 0 ? (
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <img 
                src={notFoundImg} 
                alt="No Jobs Available" 
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  marginBottom: '20px' 
                }} 
              />
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#000', marginBottom: '10px' }}>
                No Jobs Available right Now
              </h3>
              <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>
                Stay tuned for further updates.
              </p>
            </Col>
          </Row>
        ) : (
          <div className="row row-cols-1 row-cols-lg-2 g-4">
            {jobs.map((job) => (
              <div className="col" key={job._id}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JobOpportunitiesPage;