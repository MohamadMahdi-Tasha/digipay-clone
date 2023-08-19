// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React from 'react';
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import BlogComponent from "@/components/blogComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import BlogImage1 from '@/public/img/blogs/img-1.webp';
import BlogImage2 from '@/public/img/blogs/img-2.jpg';
import BlogImage3 from '@/public/img/blogs/img-3.jpeg';
import BlogImage4 from '@/public/img/blogs/img-4.webp';
import BlogImage5 from '@/public/img/blogs/img-5.webp';
import BlogImage6 from '@/public/img/blogs/img-6.jpg';
import BlogImage7 from '@/public/img/blogs/img-7.jpg';
import BlogImage8 from '@/public/img/blogs/img-8.jpg';
import BlogImage9 from '@/public/img/blogs/img-9.webp';
import BlogImage10 from '@/public/img/blogs/img-10.jpg';

// Creating And Exporting Fourth Section As Default
export default function FourthSectionComponent(): React.ReactNode {
    // Returning JSX
    return (
        <section className={'py-[50px]'}>
            <HolderComponent>
                <header>
                    <h4 className={'text-center text-darkBlue text-[30px] mb-[20px] font-extrabold'}>مجله اینترنتی دیجی‌پی</h4>
                    <h5 className={'text-center text-darkBlue/80 text-[24px] mb-[40px] font-light'}>جدیدترین اخبار و مطالب حوزه مالی، پرداخت و فین‌تک</h5>
                </header>
                <main>
                    <div className={'flex lg:flex-row flex-col items-center gap-[20px] mb-[30px]'}>
                        <div className={'lg:w-[85%] flex justify-start items-center gap-[20px] overflow-auto'}>
                            <button className={'flex-shrink-0 border border-darkBlue text-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>دنیای مالی</button>
                            <button className={'flex-shrink-0 border border-darkBlue text-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>زندگی هوشمند</button>
                            <button className={'flex-shrink-0 border border-darkBlue text-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>اتاق خبر دیجی پی</button>
                            <button className={'flex-shrink-0 border border-darkBlue text-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>پی کست</button>
                            <button className={'flex-shrink-0 border border-darkBlue text-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>راهمای خرید اقساطی</button>
                        </div>
                        <div className={'w-[15%] lg:flex hidden justify-end items-center gap-[10px]'}>
                            <button className={'w-[30px] h-[30px] flex justify-center items-center'}><IconComponent name={'chevron-right'} /></button>
                            <button className={'w-[30px] h-[30px] flex justify-center items-center'}><IconComponent name={'chevron-left'} /></button>
                        </div>
                    </div>
                    <Swiper className={'fourth-section-slider'} initialSlide={3} spaceBetween={50} breakpoints={{
                        991: {slidesPerView: 2,},
                        0: {slidesPerView: 1,}
                    }}>
                        <SwiperSlide><BlogComponent img={BlogImage1.src} title={'بهترین گوشی های هوشمند از نظر باتری'} type={'راهنمای خرید اقساطی'} date={'8/17/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage2.src} title={'نحوه واریز پول به شماره حساب با گوشی'} type={'زندگی هوشمند'} date={'8/17/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage3.src} title={'اینترنت کدام اپراتور بهتر است'} type={'زندگی هوشمند'} date={'8/12/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage4.src} title={'بهترین موتورسیکلت های سفر و تورینگ'} type={'راهنمای خرید اقساطی'} date={'8/12/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage5.src} title={'بهترین کارت گرافیک برای بازی'} type={'راهنمای خرید اقساطی'} date={'8/12/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage6.src} title={'چگونه هدفون بلوتوثی را به ps5 وصل کنیم'} type={'راهنمای خرید اقساطی'} date={'8/5/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage7.src} title={'بهترین مارک جاروبرقی ایرانی و خارجی'} type={'راهنمای خرید اقساطی'} date={'8/5/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage8.src} title={'بهترین برند لوازم خانگی ایرانی'} type={'راهنمای خرید اقساطی'} date={'8/5/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage9.src} title={'بهترین لپ تاپ های سبک بازار'} type={'راهنمای خرید اقساطی'} date={'7/29/2023'} /></SwiperSlide>
                        <SwiperSlide><BlogComponent img={BlogImage10.src} title={'راهنمای خرید کیبورد گیمینگ'} type={'راهنمای خرید اقساطی'} date={'7/29/2023'} /></SwiperSlide>
                    </Swiper>
                </main>
            </HolderComponent>
        </section>
    );
}