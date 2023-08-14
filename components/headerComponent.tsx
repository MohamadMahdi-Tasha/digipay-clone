// Codes By Mahdi Tasha

// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState, useRef} from "react";
import HolderComponent from "@/chunks/holderComponent";
import Image from "next/image";
import TypoLogoImage from '@/public/img/header/img-logo-typo.svg';
import DropDownImage from '@/public/img/header/img-user-dropdown.svg';
import IconComponent from "@/chunks/iconComponent";
import TopSideImage from '@/public/img/header/img-top-side.jpg'
import ClickDropdownComponent from "@/chunks/clickDropdownComponent";
import MobileHeaderLinksComponent from "@/components/mobileHeaderLinksComponent";

// Creating And Exporting Header Component As Default
export default function HeaderComponent():React.ReactNode {
    // Defining State Of Component
    const [isScrolled, setScrolled] = useState(false);

    // Checking If Window Is Scrolled
    window.addEventListener('scroll', () => {
        (window.scrollY !== 0)
            ? setScrolled(true)
            : setScrolled(false)
    })

    // Returning JSX
    return (
        <header data-scrolled={isScrolled} className={'bg-white shadow fixed w-full  duration-500 transition-all data-[scrolled="false"]:top-0 data-[scrolled="true"]:top-[-10%]'}>
            <a data-scrolled={isScrolled} className={'transition-all duration-500 data-[scrolled="true"]:opacity-0'} href="#"><Image src={TopSideImage.src} alt={'ضمانت تترلند'} width={1150} height={20} className={'w-full h-[70px] object-cover'} /></a>
            <HolderComponent className={'flex items-center justify-between gap-[20px] py-[20px]'}>
                <MobileHeaderLinksComponent />
                <a href="#"><Image src={TypoLogoImage.src} alt={'دیجی پی'} width={75} height={75} /></a>
                <ul className={'lg:flex hidden items-center gap-[30px]'}>
                    <li><a className={'transition-all text-sm text-darkBlue hover:text-themeColor truncate hover:font-bold'} href="#">خدمات</a></li>
                    <li><a className={'transition-all text-sm text-darkBlue hover:text-themeColor truncate hover:font-bold'} href="#">دریافت اعتبار</a></li>
                    <li><a className={'transition-all text-sm text-darkBlue hover:text-themeColor truncate hover:font-bold'} href="#">گزارش سالانه</a></li>
                    <li><a className={'transition-all text-sm text-darkBlue hover:text-themeColor truncate hover:font-bold'} href="#">مجله اینترنتی دیجی پی</a></li>
                </ul>
                <ClickDropdownComponent icon={'person'}>
                    <Image className={'w-[50px]'} src={DropDownImage.src} alt={'ورود'} width={100} height={100} />
                    <a href="#" className={'flex items-center'}>
                        <IconComponent name={'login'} />
                        <span className={'truncate mr-[10px] text-themeColor text-xs font-bold'}>ورود به دیجی پی</span>
                    </a>
                </ClickDropdownComponent>
            </HolderComponent>
        </header>
    );
}