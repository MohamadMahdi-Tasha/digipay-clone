// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import ServicesHeaderFooterComponent from "@/components/servicesHeaderFooterComponent";
import Image from 'next/image';
import BlogImage1 from '@/public/img/header/blog/img-blog-1.jpg';
import BlogImage2 from '@/public/img/header/blog/img-blog-2.jpg';
import BlogImage3 from '@/public/img/header/blog/img-blog-3.jpg';
import BlogImage4 from '@/public/img/header/blog/img-blog-4.jpg';

// Defining Types Of Props
interface propsType {
    isOpened: boolean;
    onMouseEnter: any;
    onMouseLeave: any;
}

// Creating And Exporting Online Magazine In Header Component
export default function OnlineMagazineHeaderComponent({isOpened, onMouseEnter, onMouseLeave}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <div data-opened={isOpened} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={'border-t transition-all duration-500 border-t-myYellow shadow-lg h-[250px] overflow-auto lg:block hidden data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="false"]:h-[0] data-[opened="false"]:opacity-0'}>
            <HolderComponent className={'flex'}>
                <div className={'w-[25%] border-l border-l-darkBlue/20 p-[20px] flex flex-col gap-[10px]'}>
                    <span className={'truncate block text-darkBlue font-bold text-[20px]'}>دسته بندی مجله های اینترنتی:</span>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">دنیای مالی</a>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">زندگی هوشمند</a>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">اتاق خبر دیجی پی</a>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">پی کست</a>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">راهنمای خرید اقساطی</a>
                </div>
                <div className={'w-[75%] p-[20px] grid grid-cols-2 gap-[20px]'}>
                    <div className={'flex items-center gap-[10px]'}>
                        <Image width={100} height={100} className={'w-[40%] h-[100px] object-cover rounded-[20px]'} src={BlogImage1} alt={'بانکداری دیجیتال در خاورمیانه'} />
                        <a href={'#'} className={'w-[60%] block'}>
                            <span className={'font-bold text-[16px] text-darkBlue mb-[10px] truncate block'}>بانکداری دیجیتال در خاورمیانه</span>
                            <span className={'flex items-center gap-[10px] text-[14px] text-darkBlue/80 font-light truncate'}>
                                <IconComponent name={'calender'} />
                                ۶ ماه پیش
                            </span>
                        </a>
                    </div>
                    <div className={'flex items-center gap-[10px]'}>
                        <Image width={100} height={100} className={'w-[40%] h-[100px] object-cover rounded-[20px]'} src={BlogImage2} alt={'شرایط خرید سرویس اعتباری (BNPL) در دنیا چگونه است؟'} />
                        <a href={'#'} className={'w-[60%] block'}>
                            <span className={'font-bold text-[16px] text-darkBlue mb-[10px] truncate block'}>شرایط خرید سرویس اعتباری (BNPL) در دنیا چگونه است؟</span>
                            <span className={'flex items-center gap-[10px] text-[14px] text-darkBlue/80 font-light truncate'}>
                                <IconComponent name={'calender'} />
                                ۷ ماه پیش
                            </span>
                        </a>
                    </div>
                    <div className={'flex items-center gap-[10px]'}>
                        <Image width={100} height={100} className={'w-[40%] h-[100px] object-cover rounded-[20px]'} src={BlogImage3} alt={'۱۷ عادت مالی هوشمند که همه باید بدانند'} />
                        <a href={'#'} className={'w-[60%] block'}>
                            <span className={'font-bold text-[16px] text-darkBlue mb-[10px] truncate block'}>۱۷ عادت مالی هوشمند که همه باید بدانند</span>
                            <span className={'flex items-center gap-[10px] text-[14px] text-darkBlue/80 font-light truncate'}>
                                <IconComponent name={'calender'} />
                                ۷ ماه پیش
                            </span>
                        </a>
                    </div>
                    <div className={'flex items-center gap-[10px]'}>
                        <Image width={100} height={100} className={'w-[40%] h-[100px] object-cover rounded-[20px]'} src={BlogImage4} alt={'روش هایمدیریت مالی برای استارتاپ های نوپا'} />
                        <a href={'#'} className={'w-[60%] block'}>
                            <span className={'font-bold text-[16px] text-darkBlue mb-[10px] truncate block'}>روش هایمدیریت مالی برای استارتاپ های نوپا</span>
                            <span className={'flex items-center gap-[10px] text-[14px] text-darkBlue/80 font-light truncate'}>
                                <IconComponent name={'calender'} />
                                ۷ ماه پیش
                            </span>
                        </a>
                    </div>
                </div>
            </HolderComponent>
            <ServicesHeaderFooterComponent />
        </div>
    );
}