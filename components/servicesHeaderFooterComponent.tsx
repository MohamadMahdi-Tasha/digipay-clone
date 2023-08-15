// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import IconComponent from "@/chunks/iconComponent";
import HolderComponent from '@/chunks/holderComponent';

// Creating And Exporting Bottom Of Services Component In Header As Default
export default function ServicesHeaderFooterComponent():React.ReactNode {
    // Returning JSX
    return (
        <div className={'bg-darkBlue/20 p-[20px]'}>
            <HolderComponent className={'flex justify-between items-center gap-[10px]'}>
                <div className={'w-[50%]'}>
                    <span className={'text-[16px] block truncate text-darkBlue font-normal mb-[10px]'}>دریافت اعتبار ۵۰ ملیونی</span>
                    <span className={'text-[12px] block truncate text-darkBlue/80 font-light'}>با دریافت اعتلار ۵۰ ملیونی میتوانید از دیجیکالا با بیش از ۱۰ ملیون تنوع محصولات خرید کنید.</span>
                </div>
                <a className={'flex items-center gap-[10px] whitespace-nowrap'} href="#">
                    ثبت نام
                    <IconComponent name={'chevron-left'} />
                </a>
            </HolderComponent>
        </div>
    );
}