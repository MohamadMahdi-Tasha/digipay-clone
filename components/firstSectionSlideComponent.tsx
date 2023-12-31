// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import 'swiper/css';
import Image from 'next/image';

// Defining Types Of Props
interface propsType {
    img: string;
    title: string;
    subtitle: string;
}

// Creating And Exporting First Sections Slide As Default
export default function FirstSectionSlideComponent({img,title,subtitle}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <div className={'bg-mediumBlue p-[20px] rounded-[20px] transition-all'}>
            <Image className={'w-[50%] mx-auto mb-[30px]'} width={100} height={100} alt={title} src={img} />
            <span className={'block font-bold truncate w-full mb-[10px] text-center text-darkBlue lg:text-[20px] text-[14px]'}>{title}</span>
            <span className={'block font-light truncate w-full text-darkBlue text-center lg:text-[18px] text-[12px]'}>{subtitle}</span>
        </div>
    );
}