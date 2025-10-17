import brand1 from '@/assets/img/brand/vl-brand-5.1.png';
import brand2 from '@/assets/img/brand/vl-brand-5.2.png';
import brand3 from '@/assets/img/brand/vl-brand-5.3.png';
import brand4 from '@/assets/img/brand/vl-brand-5.4.png';
import brand5 from '@/assets/img/brand/vl-brand-5.5.png';
import brand6 from '@/assets/img/brand/vl-brand-5.6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const Brand = () => {
  const logo = [brand1, brand2, brand3, brand4, brand5, brand6, brand1];
  return <div className="vl-brand5">
            <div className="container">
                <Swiper modules={[Autoplay]} autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }} slidesPerView={4} loop spaceBetween={30}>
                    <div id="brandactive5" className="owl-carousel owl-theme">
                        {logo.map((logo, idx) => <SwiperSlide key={idx} className="single-brand-logo">
                                    <img src={logo} alt='brand1' />
                                </SwiperSlide>)}
                    </div>
                </Swiper>
            </div>
        </div>;
};
export default Brand;