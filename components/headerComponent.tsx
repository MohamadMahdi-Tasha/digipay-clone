// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HolderComponent from "@/chunks/holderComponent";
import Image from "next/image";
import TypoLogoImage from '@/public/img/header/img-logo-typo.svg';
import DropDownImage from '@/public/img/header/img-user-dropdown.svg';
import IconComponent from "@/chunks/iconComponent";
import TopSideImage from '@/public/img/header/img-top-side.jpg'

// Creating And Exporting Header Component As Default
export default function HeaderComponent():React.ReactNode {
    // Returning JSX
    return (
        <header>
            <Image src={TopSideImage.src} alt={'ضمانت تترلند'} width={100} height={100} />
            <HolderComponent>
                <Image src={TypoLogoImage.src} alt={'دیجی پی'} width={100} height={100} />
                <ul>
                    <li><a href="#">خدمات</a></li>
                    <li><a href="#">دریافت اعتبار</a></li>
                    <li><a href="#">گزارش سالانه</a></li>
                    <li><a href="#">مجله اینترنتی دیجی پی</a></li>
                </ul>
                <div>
                    <button>
                        <IconComponent name={'person'} />
                        <IconComponent name={'chevron-down'} />
                    </button>
                    <div>
                        <Image src={DropDownImage.src} alt={'ورود'} width={100} height={100} />
                        <a href="#">
                            <IconComponent name={'login'} />
                            ورود به دیجی پی
                        </a>
                    </div>
                </div>
            </HolderComponent>
        </header>
    );
}