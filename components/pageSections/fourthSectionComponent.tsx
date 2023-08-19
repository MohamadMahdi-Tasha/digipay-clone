// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState} from 'react';
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import BlogComponent from "@/components/blogComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import blogs from "@/api/blogs";

// Creating And Exporting Fourth Section As Default
export default function FourthSectionComponent(): React.ReactNode {
    // Defining State Of Component
    const [blogsFilter, setBlogsFilter] = useState('زندگی هوشمند');

    // Filtering Blogs
    const filtredBlogs = blogs.filter(item => item.type === blogsFilter);

    // Returning JSX
    return (
        <section className={'py-[50px]'}>
            <HolderComponent>
                <header>
                    <h4 className={'text-center text-darkBlue lg:text-[30px] text-[16px] mb-[20px] font-extrabold'}>مجله اینترنتی دیجی‌پی</h4>
                    <h5 className={'text-center text-darkBlue/80 lg:text-[24px] text-[14px] mb-[40px] font-light'}>جدیدترین اخبار و مطالب حوزه مالی، پرداخت و فین‌تک</h5>
                </header>
                <main>
                    <div className={'flex lg:flex-row flex-col items-center gap-[20px] mb-[30px]'}>
                        <div className={'lg:w-[85%] w-full flex justify-start items-center gap-[20px] overflow-auto'}>
                            <button data-active={(blogsFilter === 'دنیای مالی')} onClick={() => setBlogsFilter('دنیای مالی')} className={'flex-shrink-0 border border-darkBlue data-[active="false"]:text-darkBlue data-[active="true"]:text-white data-[active="true"]:bg-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>دنیای مالی</button>
                            <button data-active={(blogsFilter === 'زندگی هوشمند')} onClick={() => setBlogsFilter('زندگی هوشمند')} className={'flex-shrink-0 border border-darkBlue data-[active="false"]:text-darkBlue data-[active="true"]:text-white data-[active="true"]:bg-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>زندگی هوشمند</button>
                            <button data-active={(blogsFilter === 'اتاق خبر دیجی پی')} onClick={() => setBlogsFilter('اتاق خبر دیجی پی')} className={'flex-shrink-0 border border-darkBlue data-[active="false"]:text-darkBlue data-[active="true"]:text-white data-[active="true"]:bg-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>اتاق خبر دیجی پی</button>
                            <button data-active={(blogsFilter === 'پی کست')} onClick={() => setBlogsFilter('پی کست')} className={'flex-shrink-0 border border-darkBlue data-[active="false"]:text-darkBlue data-[active="true"]:text-white data-[active="true"]:bg-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>پی کست</button>
                            <button data-active={(blogsFilter === 'راهنمای خرید اقساطی')} onClick={() => setBlogsFilter('راهنمای خرید اقساطی')} className={'flex-shrink-0 border border-darkBlue data-[active="false"]:text-darkBlue data-[active="true"]:text-white data-[active="true"]:bg-darkBlue text-[16px] font-normal px-[20px] py-[10px] rounded-[50rem]'}>راهنمای خرید اقساطی</button>
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
                        {
                            (filtredBlogs[0] !== undefined) ? (
                                    filtredBlogs.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <BlogComponent img={item.img} date={item.date} type={item.type} title={item.title} />
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <div><span className={'text-center text-darkBlue text-[30px] mb-[20px] font-extrabold'}>بلاگی با این تاپیک پیدا نشد.</span></div>
                                )
                        }
                    </Swiper>
                </main>
            </HolderComponent>
        </section>
    );
}