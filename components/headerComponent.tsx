// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState, useEffect} from "react";
import HolderComponent from "@/chunks/holderComponent";
import Image from "next/image";
import TypoLogoImage from '@/public/img/header/img-logo-typo.svg';
import DropDownImage from '@/public/img/header/img-user-dropdown.svg';
import IconComponent from "@/chunks/iconComponent";
import TopSideImage from '@/public/img/header/img-top-side.jpg'
import ClickDropdownComponent from "@/chunks/clickDropdownComponent";
import MobileHeaderLinksComponent from "@/components/mobileHeaderLinksComponent";
import ServicesHeaderComponent from '@/components/servicesHeaderComponent';
import CollectHeaderComponent from '@/components/collectHeaderComponent';
import YearlyReportHeaderComponent from '@/components/yearlyReportHeaderComponent';
import OnlineMagazineHeaderComponent from '@/components/onlineMagazineHeaderComponent';

// Creating And Exporting Header Component As Default
export default function HeaderComponent():React.ReactNode {
    // Defining State Of Component
    const [isScrolled, setScrolled] = useState(false);
    const [isServicesItemHovered, setServicesItemHovered] = useState(false);
    const [isCollectItemHovered, setCollectItemHovered] = useState(false);
    const [isYearlyReportHovered, setYearlyReportHovered] = useState(false);
    const [isOnlineMagazineHovered, setOnlineMagazineHovered] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            (window.scrollY !== 0)
                ? setScrolled(true)
                : setScrolled(false)
        })
    })

    // Returning JSX
    return (
        <header data-scrolled={isScrolled} className={'bg-white shadow fixed w-full z-[9999] duration-500 transition-all data-[scrolled="false"]:top-0 data-[scrolled="true"]:top-[-70px]'}>
            <a data-scrolled={isScrolled} className={'transition-all duration-500 data-[scrolled="true"]:invisible data-[scrolled="false"]:visible data-[scrolled="true"]:opacity-0 data-[scrolled="false"]:opacity-100'} href="#"><Image src={TopSideImage.src} alt={'ضمانت تترلند'} width={1150} height={20} className={'w-full h-[70px] object-cover'} /></a>
            <HolderComponent className={'flex items-center justify-between gap-[20px] lg:py-0 py-[20px]'}>
                <MobileHeaderLinksComponent />
                <a href="#"><Image src={TypoLogoImage.src} alt={'دیجی پی'} width={75} height={75} /></a>
                <ul className={'lg:flex hidden items-center gap-[30px]'}>
                    <li className={'h-[85px] flex items-center justify-center'} onMouseEnter={() => setServicesItemHovered(true)} onMouseLeave={() => setServicesItemHovered(false)}><a data-active={isServicesItemHovered} className={'transition-all text-sm data-[active="false"]:text-darkBlue truncate data-[active="true"]:text-themeColor'} href="#">خدمات</a></li>
                    <li className={'h-[85px] flex items-center justify-center'} onMouseEnter={() => setCollectItemHovered(true)} onMouseLeave={() => setCollectItemHovered(false)}><a data-active={isCollectItemHovered} className={'transition-all text-sm data-[active="true"]:text-themeColor text-darkBlue truncate'} href="#">دریافت اعتبار</a></li>
                    <li className={'h-[85px] flex items-center justify-center'} onMouseEnter={() => setYearlyReportHovered(true)} onMouseLeave={() => setYearlyReportHovered(false)}><a data-active={isYearlyReportHovered} className={'transition-all text-sm data-[active="true"]:text-themeColor text-darkBlue truncate'} href="#">گزارش سالانه</a></li>
                    <li className={'h-[85px] flex items-center justify-center'} onMouseEnter={() => setOnlineMagazineHovered(true)} onMouseLeave={() => setOnlineMagazineHovered(false)}><a data-active={isOnlineMagazineHovered} className={'transition-all text-sm data-[active="true"]:text-themeColor text-darkBlue truncate'} href="#">مجله اینترنتی دیجی پی</a></li>
                </ul>
                <ClickDropdownComponent icon={'person'}>
                    <Image className={'w-[50px]'} src={DropDownImage.src} alt={'ورود'} width={100} height={100} />
                    <a href="#" className={'flex items-center'}>
                        <IconComponent name={'login'} />
                        <span className={'truncate mr-[10px] text-themeColor text-xs font-bold'}>ورود به دیجی پی</span>
                    </a>
                </ClickDropdownComponent>
            </HolderComponent>
            <ServicesHeaderComponent onMouseEnter={() => setServicesItemHovered(true)} onMouseLeave={() => setServicesItemHovered(false)} isOpened={isServicesItemHovered} />
            <CollectHeaderComponent onMouseEnter={() => setCollectItemHovered(true)} onMouseLeave={() => setCollectItemHovered(false)} isOpened={isCollectItemHovered} />
            <YearlyReportHeaderComponent onMouseEnter={() => setYearlyReportHovered(true)} onMouseLeave={() => setYearlyReportHovered(false)} isOpened={isYearlyReportHovered} />
            <OnlineMagazineHeaderComponent onMouseEnter={() => setOnlineMagazineHovered(true)} onMouseLeave={() => setOnlineMagazineHovered(false)} isOpened={isOnlineMagazineHovered} />
        </header>
    );
}