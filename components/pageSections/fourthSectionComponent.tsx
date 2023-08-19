// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React from 'react';
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import BlogComponent from "@/components/blogComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import BlogImage1 from '@/public/img/blogs/img-1.webp';

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
                    <div>
                        <div>
                            <button>دنیای مالی</button>
                            <button>زندگی هوشمند</button>
                            <button>اتاق خبر دیجی پی</button>
                            <button>پی کست</button>
                            <button>راهمای خرید اقساطی</button>
                        </div>
                        <div>
                            <button><IconComponent name={'chevron-right'} /></button>
                            <button><IconComponent name={'chevron-left'} /></button>
                        </div>
                    </div>
                    <Swiper>
                        <SwiperSlide><BlogComponent img={BlogImage1.src} title={'بهترین گوشی های هوشمند از نظز باتری'} type={'راهنمای خرید اقساطی'} date={'8/17/2023'} /></SwiperSlide>
                    </Swiper>
                </main>
            </HolderComponent>
        </section>
    );
}