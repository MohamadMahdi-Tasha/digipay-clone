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
        <footer className={'py-[50px] border-t border-darkBlue/20'}>
            <HolderComponent>
                <div className={'grid grid-cols-6 gap-[50px] mb-[30px]'}>
                    <div className={'col-span-2'}>
                        <Image className={'w-[80px] mb-[10px]'} width={100} height={100} src={LogoTypoImage.src} alt={'دیجی پی'}></Image>
                        <p className={'font-light text-darkBlue/80 text-[15px] mb-[10px]'}>آدرس:تهران، بلوار نلسون ماندلا، بلوار صبا غربی، پلاک 2، طبقه 3</p>
                        <a className={'font-light block text-darkBlue/80 text-[15px] mb-[35px]'} href="tel:02161930400">شماره تماس: 02161930400</a>
                        <span className={'font-normal block text-darkBlue text-[15px] mb-[10px]'}>دیجی پی در شبکه های اجتماعی</span>
                        <div className={'flex flex-wrap gap-[20px]'}>
                            <a href="#"><IconComponent name={'instagram'} /></a>
                            <a href="#"><IconComponent name={'twitter'} /></a>
                            <a href="#"><IconComponent name={'linkedin'} /></a>
                            <a href="#"><IconComponent name={'aparat'} /></a>
                        </div>
                    </div>
                    <div>
                        <span className={'font-light text-darkBlue block mb-[20px] text-[15px]'}>درباره ما</span>
                        <ul className={'flex flex-col gap-[10px]'}>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">درباره دیجی‌پی</a></li>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">تماس با ما</a></li>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">مجله اینترنتی دیجی‌پی</a></li>
                        </ul>
                    </div>
                    <div>
                        <span className={'font-light text-darkBlue block mb-[20px] text-[15px]'}>خدمات ما</span>
                        <ul className={'flex flex-col gap-[10px]'}>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">خرید شارژ</a></li>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">خرید اینترنت</a></li>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">دریافت اعتبار</a></li>
                            <li><a className={'text-[15px] font-light text-darkBlue/80'} href="#">پرداخت قبض</a></li>
                        </ul>
                    </div>
                    <div className={'col-span-2'}>
                        <span className={'font-light text-darkBlue block mb-[20px] text-[15px]'}>دانلود سریع</span>
                        <div className={'grid grid-cols-3 gap-[10px] mb-[30px]'}>
                            <a className={'px-[10px] shrink-0 overflow-hidden'} href={"#"}>
                                <span className={'font-light text-darkBlue block mb-[5px] truncate text-[12px]'}>گوگل پلی</span>
                                <span className={'text-[10px] font-light text-darkBlue/80 truncate block'}>برای کاربران اندروید</span>
                            </a>
                            <a className={'px-[10px] shrink-0 overflow-hidden border-x border-x-darkBlue/20'} href={"#"}>
                                <span className={'font-light text-darkBlue block mb-[5px] truncate text-[12px]'}>کافه بازار</span>
                                <span className={'text-[10px] font-light text-darkBlue/80 truncate block'}>برای کاربران اندروید</span>
                            </a>
                            <a className={'px-[10px] shrink-0 overflow-hidden'} href={"#"}>
                                <span className={'font-light text-darkBlue block mb-[5px] truncate text-[12px]'}>وب اپلیکیشن</span>
                                <span className={'text-[10px] font-light text-darkBlue/80 truncate block'}>برای همه کاربران</span>
                            </a>
                        </div>
                        <div className={'rounded-[20px] p-[20px] bg-lightBlue flex'}>
                            <div className={'w-[75%]'}>
                                <span className={'font-light truncate text-darkBlue block text-[12px]'}>مشاهده لینــــــک دانلود اپلیکیشن</span>
                                <span className={'text-[12px] truncate font-light text-darkBlue/80'}>پشتیبانی از همه پلتفرم ها</span>
                            </div>
                            <a href="#" className={'block w-[25%]'}><button className={'bg-darkBlue text-white rounded-[10px] px-[10px] text-[10px] w-full h-full text-center truncate'}>دانلود اپلیکیشن</button></a>
                        </div>
                    </div>
                </div>
                <div className={'flex items-center gap-[20px]'}>
                    <span className={'font-light text-darkBlue block whitespace-nowrap text-[10px]'}>کلیه حقوق این سایت متعلق به شرکت نوآوران پرداخت مجازی ایرانیان (دیجی پی) است.</span>
                    <div className={'w-full h-[1px] bg-darkBlue/20'} />
                    <div className={'flex items-center gap-[20px]'}>
                        <a className={'p-[20px] rounded-[20px] border border-darkBlue/20'} href="#"><img className={'w-[200px] aspect-square'} src={SamandehiImage.src} alt="ساماندهی"/></a>
                        <a className={'p-[20px] rounded-[20px] border border-darkBlue/20'} href="#"><img className={'w-[200px] aspect-square'} src={RasaneImage.src} alt="رسانه"/></a>
                        <a className={'p-[20px] rounded-[20px] border border-darkBlue/20'} href="#"><img className={'w-[200px] aspect-square'} src={EnamadImage.src} alt="ای-نماد"/></a>
                    </div>
                </div>
            </HolderComponent>
        </footer>
    );
}