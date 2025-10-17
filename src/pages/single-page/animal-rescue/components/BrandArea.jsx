import brand1 from '@/assets/img/brand/vl-brand-2.1.png';
import brand2 from '@/assets/img/brand/vl-brand-2.2.png';
import brand3 from '@/assets/img/brand/vl-brand-2.3.png';
import brand4 from '@/assets/img/brand/vl-brand-2.4.png';
import brand5 from '@/assets/img/brand/vl-brand-2.5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const BrandArea = () => {
  const logos = [brand1, brand2, brand3, brand4, brand5, brand1];
  return <div className="vl-brand-area">
            <div className="container">
                <Swiper modules={[Autoplay]} autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }} slidesPerView={5} loop spaceBetween={30} breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }}>
                    <div id="vl-brand-active2" className="owl-carousel owl-theme">
                        {logos.map((logo, idx) => <SwiperSlide className="single-brand-item" key={idx}>
                                    <img src={logo} alt='brand1' />
                                </SwiperSlide>)}
                    </div>
                </Swiper>
            </div>
        </div>;
};
export default BrandArea;