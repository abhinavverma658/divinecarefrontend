import { useEffect, useState } from "react";

const BackToTop = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Only show button if progress > 5
  if (progress <= 5) return null;
  return (
    <div
      className="progress-wrap1 active-progress1"
      onClick={goToTop}
      style={{
        cursor: "pointer",
        width: "60px",
        height: "60px",
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 1000,
      }}
    >
      <div className="position-relative w-100 h-100">
        {/* Circular Progress SVG */}
        <svg
          className="position-relative z-10"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="2"
          />
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeDasharray="307"
            strokeDashoffset={307 - (progress / 100) * 307}
            strokeLinecap="round"
          />
        </svg>

        {/* Up Arrow SVG */}
        <div
          className="position-absolute top-50 start-50 translate-middle z-20 d-flex justify-content-center align-items-center"
          style={{ background: "transparent", pointerEvents: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              display: "block",
              background: "none",
              border: "none",
              boxShadow: "none",
            }}
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BackToTop;
