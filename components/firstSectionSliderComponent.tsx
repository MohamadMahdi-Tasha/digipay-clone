// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import React from "react";
import FirstSectionSlideComponent from '@/components/firstSectionSlideComponent';
import SimImage from '@/public/img/firstSection/2d/img-sim.png';
// import CartImage from '@/public/img/firstSection/2d/img-cart.png';
// import WifiImage from '@/public/img/firstSection/2d/img-wifi.png';
// import ListImage from '@/public/img/firstSection/2d/img-list.png';
// import CalenderImage from '@/public/img/firstSection/2d/img-calender.png';
// import RoadImage from '@/public/img/firstSection/2d/img-road.png';
// import CameraImage from '@/public/img/firstSection/2d/img-camera.png';

// Creating And Exporting First Sections Slider Component As Default
export default function FirstSectionSliderComponent():React.ReactNode {
    // Returning JSX
    return (
        <div className={'relative'}>
            <div className={'w-[300px] bg-gradient-to-l from-lightBlue absolute top-0 right-0 h-full z-[99] pointer-events-none'} />
            <Swiper
                slidesPerView={5}
                centeredSlides={true}
                initialSlide={3}
                spaceBetween={30}
                className={'first-section-slider'}
            >
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
            </Swiper>
            <div className={'w-[300px] bg-gradient-to-r from-lightBlue absolute top-0 left-0 h-full z-[99] pointer-events-none'} />
        </div>
    );
}