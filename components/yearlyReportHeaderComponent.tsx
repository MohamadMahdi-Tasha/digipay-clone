// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import ServicesHeaderFooterComponent from "@/components/servicesHeaderFooterComponent";
import ImageDigipay from '@/public/img/img-digipay.png';
import Image from "next/image";

// Defining Types Of Props
interface propsType {
    isOpened: boolean;
    onMouseEnter: any;
    onMouseLeave: any;
}

// Creating And Exporting Yearly Report Item Component In Header As Default
export default function YearlyReportHeaderComponent({isOpened, onMouseEnter, onMouseLeave}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <div data-opened={isOpened} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={'border-t transition-all duration-500 border-t-myYellow shadow-lg data-[opened="false"]:translate-y-[-100px] overflow-auto lg:block hidden data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="false"]:h-[0] data-[opened="false"]:opacity-0'}>
            <HolderComponent className={'flex'}>
                <div className={'w-[25%] border-l border-l-darkBlue/20 p-[20px] flex flex-col gap-[10px]'}>
                    <span className={'truncate block text-darkBlue font-bold text-[20px]'}>گزارش سالانه دیجی پی</span>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">سال ۹۹</a>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">سال ۱۴۰۰</a>
                    <a className={'truncate block text-darkBlue/80 font-light text-[16px] transition-all hover:text-themeColor'} href="#">سال ۱۴۰۱</a>
                </div>
                <div className={'flex gap-[20px] w-[75%] p-[20px]'}>
                    <div className={'w-[75%]'}>
                        <span className={'font-bold text-[24px] mb-[10px] text-darkBlue'}>گزارش سالیانه ۱۳۹۹ دیجی پی</span>
                        <p className={'font-light text-[16px] mb-[20px] text-darkBlue/80'}> گزارش حاضر گزیده‌ای شفاف از عملکرد دیجی‌پی در سال ۱۳۹۹ است که با استناد به آمار ارائه شده از سوی واحدهای کسب وکار، تجربه مشتریان، بازاریابی، پشتیباین مشتریان، تکنولوژی و دیتا گردآوری شده است.</p>
                        <a className={'text-themeColor flex whitespace-nowrap gap-[10px]'} href="#">
                            مطالعه بیشتر
                            <IconComponent name={'left-arrow'} />
                        </a>
                    </div>
                    <Image className={'w-[25%] object-cover rounded-[20px]'} src={ImageDigipay.src} alt={'دیجی پی'} width={100} height={100} />
                </div>
            </HolderComponent>
            <ServicesHeaderFooterComponent />
        </div>
    );
}