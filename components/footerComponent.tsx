// Codes BY Mahdi Tasha
// Importing Part
import React from 'react';
import HolderComponent from "@/chunks/holderComponent";
import LogoTypoImage from '@/public/img/header/img-logo-typo.svg';
import Image from 'next/image';
import IconComponent from "@/chunks/iconComponent";
import SamandehiImage from '@/public/img/footer/img-samandehi.jpg';
import RasaneImage from '@/public/img/footer/img-rasane.svg';
import EnamadImage from '@/public/img/footer/img-enamad.jpg';

// Creating And Exporting Footer Component As Default
export default function FooterComponent():React.ReactNode {
    // Returning JSX
    return (
        <footer>
            <HolderComponent>
                <div>
                    <div>
                        <Image width={100} height={100} src={LogoTypoImage.src} alt={'دیجی پی'}></Image>
                        <p>آدرس:تهران، بلوار نلسون ماندلا، بلوار صبا غربی، پلاک 2، طبقه 3</p>
                        <a href="#">شماره تماس: 02161930400</a>
                        <span>دیجی پی در شبکه های اجتماعی</span>
                        <div>
                            <a href="#"><IconComponent name={'instagram'} /></a>
                            <a href="#"><IconComponent name={'twitter'} /></a>
                            <a href="#"><IconComponent name={'linkedin'} /></a>
                            <a href="#"><IconComponent name={'aparat'} /></a>
                        </div>
                    </div>
                    <div>
                        <span>درباره ما</span>
                        <ul>
                            <li><a href="#">درباره دیجی‌پی</a></li>
                            <li><a href="#">تماس با ما</a></li>
                            <li><a href="#">مجله اینترنتی دیجی‌پی</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>خدمات ما</span>
                        <ul>
                            <li><a href="#">خرید شارژ</a></li>
                            <li><a href="#">خرید اینترنت</a></li>
                            <li><a href="#">دریافت اعتبار</a></li>
                            <li><a href="#">پرداخت قبض</a></li>
                        </ul>
                    </div>
                    <div>
                        <span>دانلود سریع</span>
                        <div>
                            <a href={"#"}>
                                <span>گوگل پلی</span>
                                <span>برای کاربران اندروید</span>
                            </a>
                            <a href={"#"}>
                                <span>کافه بازار</span>
                                <span>برای کاربران اندروید</span>
                            </a>
                            <a href={"#"}>
                                <span>وب اپلیکیشن</span>
                                <span>برای همه کاربران</span>
                            </a>
                        </div>
                        <div>
                            <div>
                                <span>مشاهده لینــــــک دانلود اپلیکیشن</span>
                                <span>پشتیبانی از همه پلتفرم ها</span>
                            </div>
                            <a href="#"><button>دانلود اپلیکیشن</button></a>
                        </div>
                    </div>
                </div>
                <div>
                    <span>کلیه حقوق این سایت متعلق به شرکت نوآوران پرداخت مجازی ایرانیان (دیجی پی) است.</span>
                    <div />
                    <div>
                        <a href="#"><img src={SamandehiImage.src} alt="ساماندهی"/></a>
                        <a href="#"><img src={RasaneImage.src} alt="رسانه"/></a>
                        <a href="#"><img src={EnamadImage.src} alt="ای-نماد"/></a>
                    </div>
                </div>
            </HolderComponent>
        </footer>
    );
}