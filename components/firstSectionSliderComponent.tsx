// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import React from "react";
import FirstSectionSlideComponent from '@/components/firstSectionSlideComponent';
import SimImage from '@/public/img/firstSection/img-sim.png';
import CartImage from '@/public/img/firstSection/img-cart.png';
import WifiImage from '@/public/img/firstSection/img-wifi.png';
import ListImage from '@/public/img/firstSection/img-list.png';
import CalenderImage from '@/public/img/firstSection/img-calender.png';
import RoadImage from '@/public/img/firstSection/img-road.png';
import CameraImage from '@/public/img/firstSection/img-camera.png';

// Creating And Exporting First Sections Slider Component As Default
export default function FirstSectionSliderComponent():React.ReactNode {
    // Returning JSX
    return (
        <div className={'relative'}>
            <div className={'w-[300px] bg-gradient-to-l from-lightBlue absolute top-[-50%] right-0 h-[500px] z-[99] pointer-events-none'} />
            <Swiper
                slidesPerView={5}
                centeredSlides={true}
                initialSlide={3}
                spaceBetween={30}
                className={'first-section-slider'}
                autoplay={true}
            >
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={CartImage.src} title={'کارت به کارت'} subtitle={'با پوشش بیش از ۲۰ کارت بانکی'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={WifiImage.src} title={'خرید بسته اینترنت'} subtitle={'طرح های متنوع از اپراتورهای مختلف'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={ListImage.src} title={'پرداخت قبوض'} subtitle={'با امکان یاداوری سررسید قبض'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={CalenderImage.src} title={'خرید اقساطی کالا'} subtitle={'بدون نیاز به ضامن'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={RoadImage.src} title={'عوارض جاده ای'} subtitle={'بدون نیاز به توقف در باجه های عوارضی'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={CameraImage.src} title={'طرح ترافیک'} subtitle={'با امکان انتخواب طرح های متنوع'} /></SwiperSlide>
            </Swiper>
            <div className={'w-[300px] bg-gradient-to-r from-lightBlue absolute top-[-50%] left-0 h-[500px] z-[99] pointer-events-none'} />
        </div>
    );
}