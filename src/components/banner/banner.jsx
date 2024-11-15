import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
    return (
        <div className='banner-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://www.schoolshop.in/backend/web/uploads/banner/1725614606slide1.webp" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.schoolshop.in/backend/web/uploads/banner/1725614591slide2.webp" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}


export default Banner;