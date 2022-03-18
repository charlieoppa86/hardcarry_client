import './banner.scss';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

const Banner = () => {
SwiperCore.use([Navigation, Pagination, Autoplay, Parallax]);
  return (
    <div> 
        <Swiper
            className='banner'
            style={{ height: '480px'}}
            parallax={true}
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={0}
            centeredSlides={true}
            navigation={true}
            onSlideChange={() => console.log('change')}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
        >
            <SwiperSlide>
                    <img className='banner1' alt='배너1' src={banner1}/>
            </SwiperSlide>
            <SwiperSlide>
                    <img className='banner2' alt='배너2' src={banner2}/>    
            </SwiperSlide>
            <SwiperSlide>
                  <img className='banner3' alt='배너3' src={banner3}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Banner