import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css'

import one from '../../../assets/banner/one.jpg'
import two from '../../../assets/banner/two.jpg'
import three from '../../../assets/banner/three.jpg'
import four from '../../../assets/banner/four.jpg'
import five from '../../../assets/banner/five.jpg'

const Banner = () => {
        return (
                <div className="md:flex mt-4">
                        <div className="md:w-1/2">
                                <>
                                        <Swiper
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                autoplay={{
                                                        delay: 5000,
                                                        disableOnInteraction: false,
                                                }}
                                                pagination={{
                                                        clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Autoplay, Pagination, Navigation]}
                                                className="mySwiper"
                                        >
                                                <SwiperSlide> <img className='h-[300px]' src={one} alt="" /> </SwiperSlide>
                                                <SwiperSlide> <img className='h-[300px]' src={two} alt="" /> </SwiperSlide>
                                                <SwiperSlide> <img className='h-[300px]' src={three} alt="" /> </SwiperSlide>
                                                <SwiperSlide> <img className='h-[300px]' src={four} alt="" /> </SwiperSlide>
                                                <SwiperSlide> <img className='h-[300px]' src={five} alt="" /> </SwiperSlide>
                                        </Swiper>
                                </>
                        </div>
                        <div className="md:w-1/2 md:block hidden">
                                <h1>This my content</h1>
                        </div>
                </div>
        );
};

export default Banner;