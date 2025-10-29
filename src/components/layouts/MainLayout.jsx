import TopBanner from "@/components/layouts/TopBanner.jsx";
import TopBar from "@/components/layouts/TopBar";
import CtaArea from "@/components/layouts/CtaArea.jsx";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";
import { Suspense } from "react";
import Loader from "@/components/Loader.jsx";
import useScrollToTop from "@/hooks/useScrollToTop.js";
const MainLayout = ({
  children
}) => {
  // Auto scroll to top on route changes
  useScrollToTop();
  
  return <>
            <Suspense fallback={<Loader />}>
                <TopBanner />
                <TopBar />
                {children}
                <CtaArea />
                <Footer />
                <BackToTop />
            </Suspense>
        </>;
};
export default MainLayout;