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
                <div className={'w-[75%] p-[20px]'}>
                    <div>
                        <Image src={BlogImage1} alt={'بانکداری دیجیتال در خاورمیانه'} />
                        <div>
                            <span>بانکداری دیجیتال در خاورمیانه</span>
                            <span>
                                <IconComponent name={'calender'} />
                                ۶ ماه پیش
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image src={BlogImage2} alt={'شرایط خرید سرویس اعتباری (BNPL) در دنیا چگونه است؟'} />
                        <div>
                            <span>شرایط خرید سرویس اعتباری (BNPL) در دنیا چگونه است؟</span>
                            <span>
                                <IconComponent name={'calender'} />
                                ۷ ماه پیش
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image src={BlogImage3} alt={'۱۷ عادت مالی هوشمند که همه باید بدانند'} />
                        <div>
                            <span>۱۷ عادت مالی هوشمند که همه باید بدانند</span>
                            <span>
                                <IconComponent name={'calender'} />
                                ۷ ماه پیش
                            </span>
                        </div>
                    </div>
                    <div>
                        <Image src={BlogImage4} alt={'روش هایمدیریت مالی برای استارتاپ های نوپا'} />
                        <div>
                            <span>روش هایمدیریت مالی برای استارتاپ های نوپا</span>
                            <span>
                                <IconComponent name={'calender'} />
                                ۷ ماه پیش
                            </span>
                        </div>
                    </div>
                </div>
            </HolderComponent>
            <ServicesHeaderFooterComponent />
        </div>
    );
}