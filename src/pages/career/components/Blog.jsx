import React from 'react';

const JobCard = () => {
    return (
        <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '30px' }}>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="card-title fw-bold mb-2">Disability Support Worker</h5>
            <div className="d-flex align-items-center gap-3 mb-2">
              <span className="badge bg-light text-dark border">Fresher Required</span>
              <span className="text-warning">★ 3.5</span>
              <span className="text-muted small">24M Reviews</span>
            </div>
          </div>
          <img 
            src="https://via.placeholder.com/80x40/003d82/ffffff?text=CARE" 
            alt="Care Logo" 
            style={{height: '40px'}}
          />
        </div>
        
        <div className="mb-3">
          <div className="d-flex gap-3 text-muted small mb-1">
            <span>📅 0 - 2 years</span>
            <span>📍 1-2.5 Lacs P.A.</span>
          </div>
          <div className="text-muted small">
            📍 Madurai, Coimbatore
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="small text-muted">
            Posted: <span className="fw-semibold text-dark">4 days ago</span> Openings: <span className="fw-semibold text-dark">5</span> Applicants: <span className="fw-semibold text-dark">50+</span>
          </div>
          <button className="btn btn-primary px-4" style={{backgroundColor: '#003d82', borderColor: '#003d82', borderRadius: '20px'}}>
            Apply
          </button>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold mb-3">Role & responsibilities</h6>
          <ul className="small text-muted" style={{lineHeight: '1.8'}}>
            <li>Develop and maintain strong relationships with clients, focusing on their insurance needs andsatisfaction.</li>
            <li>Access client requirements, recommend suitable insurance products, and assist with claims processing.</li>
            <li>Stay updated on industry trends and regulatory changes to provide informed advice.</li>
          </ul>
        </div>

        <div>
          <h6 className="fw-bold mb-3">Key Skills</h6>
          <div className="d-flex flex-wrap gap-2">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="badge bg-light text-dark border px-3 py-2">Sales</span>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="badge bg-light text-dark border px-3 py-2">Sales</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const JobOpportunitiesPage = () => {
  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-5" style={{fontSize: '2.5rem'}}>Jobs Opportunities</h1>
        
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <JobCard />
          </div>
          <div className="col">
            <JobCard />
          </div>
          <div className="col">
            <JobCard />
          </div>
          <div className="col">
            <JobCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobOpportunitiesPage;