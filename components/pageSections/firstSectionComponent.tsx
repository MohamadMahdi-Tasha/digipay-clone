// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React from "react";
import 'swiper/css';
import HolderComponent from "@/chunks/holderComponent";
import FirstSectionSliderComponent from "@/components/firstSectionSliderComponent";

// Creating And Exporting First Section Component As Default
export default function FirstSectionComponent():React.ReactNode {
    // Returning JSx
    return (
        <section className={'pt-[200px] pb-[100px] bg-lightBlue'}>
            <HolderComponent>
                <header className={'mb-[50px]'}>
                    <h6 className={'text-darkBlue mb-[10px] text-center text-[28px] font-normal'}>تراکنش‌های هوشمندانه و سریع با</h6>
                    <h1 className={'text-darkBlue text-center text-[36px] font-extrabold'}>اپلیکیشن پرداخت موبایلی دیجی‌پی</h1>
                </header>
                <FirstSectionSliderComponent />
            </HolderComponent>
        </section>
    );
}