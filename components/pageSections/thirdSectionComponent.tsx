// Codes  By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState} from 'react';
import HolderComponent from "@/chunks/holderComponent";
import Image from 'next/image';
import RightSideImage from '@/public/img/thirdSection/img-right.svg';
import DownloadButtonComponent from "@/components/downloadButtonComponent";

// Creating And Exporting Third Section
export default function ThirdSectionComponent():React.ReactNode {
    // Defining State Of Component
    const [isAndroidActive, setAndroidActive] = useState(true);
    const [isIosActive, setIosActive] = useState(false);
    const [isWebActive, setWeb1Active] = useState(false);

    // Returning JSX
    return (
        <section className={'py-[50px] bg-lightBlue'}>
            <HolderComponent className={'flex lg:flex-row flex-col justify-between items-center gap-[30px]'}>
                <Image className={'lg:w-[50%] w-full'} src={RightSideImage.src} alt={'دیجی پی دانلود'} width={100} height={100} />
                <div className={'lg:w-[50%] w-full'}>
                    <h4 className={'text-center text-darkBlue lg:text-[30px] text-[16px] mb-[20px] font-extrabold'}>دانلود اپلیکیشن دیجی‌پی</h4>
                    <h5 className={'text-center text-darkBlue/80 lg:text-[24px] text-[14px] mb-[40px] font-light'}>در دسترس برای همه گوشی ها</h5>
                    <div className={'flex justify-center items-center gap-[20px] mb-[20px] lg:overflow-visible overflow-auto'}>
                        <DownloadButtonComponent name={'android'} isActive={isAndroidActive} onClick={() => {setAndroidActive(true);setIosActive(false);setWeb1Active(false);}} />
                        <DownloadButtonComponent name={'ios'} isActive={isIosActive} onClick={() => {setAndroidActive(false);setIosActive(true);setWeb1Active(false);}} />
                        <DownloadButtonComponent name={'web'} isActive={isWebActive} onClick={() => {setAndroidActive(false);setIosActive(false);setWeb1Active(true);}} />
                    </div>
                    <div className={'flex justify-center items-center flex-wrap gap-[20px] px-[20px] py-[40px] rounded-[20px] bg-mediumBlue h-[200px] overflow-auto'}>
                        {
                            (isAndroidActive)
                                ? (
                                    <>
                                        <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>گوگل پلی</button></a>
                                        <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>کافه بازار</button></a>
                                        <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>مایکت</button></a>
                                    </>
                                ) : (isIosActive)
                                    ? (
                                        <>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>وب اپلیکیشن</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>سیب اپ</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>سیب ایرانی</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>سیبچه</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>اناردونی</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>سیب بازار</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>ای اپس</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>سیب بانک</button></a>
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>دانلود رایگان از اپ استور</button></a>

                                        </>
                                    ) : (isWebActive)
                                        ? (
                                            <a href="#"><button className={'px-[20px] py-[10px] text-darkBlue text-[16px] font-light bg-white rounded-[10px]'} tabIndex={-1}>نسخه وب</button></a>
                                        ) : false
                        }
                    </div>
                </div>
            </HolderComponent>
        </section>
    );
}