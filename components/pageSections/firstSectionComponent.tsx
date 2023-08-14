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
        <section className={'pt-[200px]'}>
            <HolderComponent>
                <header>
                    <h4>تراکنش‌های هوشمندانه و سریع با</h4>
                    <h1>اپلیکیشن پرداخت موبایلی دیجی‌پی</h1>
                </header>
                <FirstSectionSliderComponent />
            </HolderComponent>
        </section>
    );
}