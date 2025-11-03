// This file is deprecated - use /src/pages/service-single instead
// Left here for backward compatibility

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

const SingleService = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  useEffect(() => {
    // Redirect to new service-single route structure
    if (serviceId) {
      navigate(`/service-single/${serviceId}`, { replace: true });
    } else {
      navigate('/pages/service', { replace: true });
    }
  }, [navigate, serviceId]);

  return null;
};

export default SingleService;