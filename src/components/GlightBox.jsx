import glightbox from 'glightbox';
import { useEffect } from 'react';
const GlightBox = ({
  children
}) => {
  useEffect(() => {
    const instance = glightbox({
      openEffect: 'fade',
      closeEffect: 'fade'
    });
    return () => instance.destroy();
  }, []);
  return <>
            {children}
        </>;
};
export default GlightBox;