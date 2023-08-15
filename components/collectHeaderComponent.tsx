// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import ServicesHeaderFooterComponent from "@/components/servicesHeaderFooterComponent";
import Image from "next/image";
import AqsatiImage from '@/public/img/header/img-aqsati.png';

// Defining Types Of Props
interface propsType {
    isOpened: boolean;
    onMouseEnter: any;
    onMouseLeave: any;
}

// Creating And Exporting Collect Item Component In Header As Default
export default function CollectHeaderComponent({isOpened, onMouseEnter, onMouseLeave}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <div data-opened={isOpened} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={'border-t transition-all duration-500 border-t-myYellow shadow-lg h-[80vh] overflow-auto lg:block hidden data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="false"]:h-[0] data-[opened="false"]:opacity-0'}>
            <div>
                <div>
                    <span>دریافت وام ۵۰ ملیون تومانی</span>
                    <p> تا 5۰ میلیون تومان اعتبار بعد از ثبت نام در دیجی پی  برای خرید اقساطی کالا از بین 10 میلیون کالا متنوع از برترین برند ها در بزرگترین فروشگاه اینترنتی دیجی کالا </p>
                    <a href="#">
                        دریافت اعتبار
                        <IconComponent name={'left-arrow'} />
                    </a>
                </div>
                <Image src={AqsatiImage.src} alt={'خرید اقساطی'} width={100} height={100} />
            </div>
            <ServicesHeaderFooterComponent />
        </div>
    );
}