import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTop = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / docHeight * 100;
      setProgress(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <div className={`progress-wrap ${scrollY > 40 && 'active-progress'}`} onClick={goToTop}>
            <div className="position-relative">
                <svg className="progress-circle position-relative z-10 svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" strokeDasharray="307" strokeDashoffset={307 - progress / 100 * 307} />
                </svg>
                <div className="position-absolute top-50 start-50 z-20 translate-middle">
                    <FaArrowUp className="text-black" size={18} />
                </div>
            </div>
        </div>;
};
export default ScrollToTop;