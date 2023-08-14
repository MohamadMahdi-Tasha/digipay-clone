// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";
import Image from "next/image";
import SimImage from '@/public/img/firstSection/2d/img-sim.png';
import CartImage from '@/public/img/firstSection/2d/img-cart.png';
import WifiImage from '@/public/img/firstSection/2d/img-wifi.png';
import ListImage from '@/public/img/firstSection/2d/img-list.png';
import CalenderImage from '@/public/img/firstSection/2d/img-calender.png';
import RoadImage from '@/public/img/firstSection/2d/img-road.png';
import CamerImage from '@/public/img/firstSection/2d/img-camera.png';

// Defining Type Of Props
interface SlidesPropsType {
    img: any;
    alt: string;
    title: string;
    subtitle: string;
}

// Creating And Exporting First Sections Slider Component As Default
export default function FirstSectionSliderComponent():React.ReactNode {
    // Small Inner Component
    function FirstSectionSlideComponent({img,alt,title,subtitle}:SlidesPropsType) {
        // Returning JSX
        return (
            <a className={'rounded-[20px] w-[200px] p-[20px] bg-mediumBlue flex overflow-hidden flex-col items-center justify-center'} href={'#'}>
                <Image className={'w-[100px] h-[100px] mb-[30px]'} src={img} width={100} height={100} alt={alt} />
                <span className={'truncate block text-center text-darkBlue font-bold text-[20px] mb-[10px]'}>{title}</span>
                <span className={'truncate block text-center text-darkBlue font-light text-[14px]'}>{subtitle}</span>
            </a>
        );
    }

    // Returning JSX
    return (
        <main className={'relative'}>
            <div className={'absolute w-[200px] h-full top-0 right-0 bg-gradient-to-l from-lightBlue pointer-events-none z-40'} />
            <Swiper dir={'ltr'} centeredSlides={true} slidesPerView={5} loop={true} spaceBetween={20} initialSlide={3}>
                <SwiperSlide><FirstSectionSlideComponent img={SimImage.src} alt={'عکس سیم کارت'} title={'خرید شارژ'} subtitle={'با امکان تنظیم یاد اور'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={WifiImage.src} alt={'عکس وای فای'} title={'خرید بسته اینترنت'} subtitle={'طرح های متونع از اپراتورهای مختلف'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={ListImage.src} alt={'عکس لیست'} title={'پرداخت قبوض'} subtitle={'با امکان یاداوری سررسید قبض'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={CartImage.src} alt={'عکس کارت'} title={'کارت به کارت'} subtitle={'با پوشش بیش از ۲۰ کارت بانکی'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={CalenderImage.src} alt={'عکس کارت'} title={'خرید اقساطی کالا'} subtitle={'بدون نیاز به ضامن'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={RoadImage.src} alt={'عکس جاده'} title={'عوازض جاده ای'} subtitle={'بدون نیاز به توقف در باجه های عوارضی'} /></SwiperSlide>
                <SwiperSlide><FirstSectionSlideComponent img={CamerImage.src} alt={'عکس دوربین'} title={'طرح ترافیک'} subtitle={'با امکان اتخواب طرح های متنوع'} /></SwiperSlide>
            </Swiper>
            <div className={'absolute w-[200px] h-full top-0 left-0 bg-gradient-to-r from-lightBlue pointer-events-none z-40'} />
        </main>
    );
}