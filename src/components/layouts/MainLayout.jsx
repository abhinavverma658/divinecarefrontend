import TopBanner from "@/components/layouts/TopBanner.jsx";
import TopBar from "@/components/layouts/TopBar";
import CtaArea from "@/components/layouts/CtaArea.jsx";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";
import { Suspense } from "react";
import Loader from "@/components/Loader.jsx";
const MainLayout = ({
  children
}) => {
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