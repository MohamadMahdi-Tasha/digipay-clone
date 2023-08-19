// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import 'swiper/css';
import HolderComponent from "@/chunks/holderComponent";
import FirstSectionSliderComponent from "@/components/firstSectionSliderComponent";

// Creating And Exporting First Section Component As Default
export default function FirstSectionComponent():React.ReactNode {
    // Returning JSx
    return (
        <section className={'pt-[200px] pb-[100px] bg-lightBlue overflow-hidden'}>
            <HolderComponent>
                <header className={'lg:mb-[120px] mb-[100px]'}>
                    <h6 className={'text-darkBlue mb-[10px] text-center lg:text-[28px] text-[16px] font-normal'}>تراکنش‌های هوشمندانه و سریع با</h6>
                    <h1 className={'text-darkBlue text-center lg:text-[36px] text-[18px] font-extrabold'}>اپلیکیشن پرداخت موبایلی دیجی‌پی</h1>
                </header>
                <main>
                    <FirstSectionSliderComponent />
                </main>
            </HolderComponent>
        </section>
    );
}