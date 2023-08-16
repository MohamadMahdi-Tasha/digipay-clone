// Codes  By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState} from 'react';
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import Image from 'next/image';
import RightSideImage from '@/public/img/thirdSection/img-right.svg';

// Creating And Exporting Third Section
export default function ThirdSectionComponent():React.ReactNode {
    // Defining State Of Component
    const [isAndroidActive, setAndroidActive] = useState(true);
    const [isIosActive, setIosActive] = useState(false);
    const [isWebActive, setWeb1Active] = useState(false);

    // Returning JSX
    return (
        <section className={'py-[50px] bg-lightBlue'}>
            <HolderComponent className={'flex justify-between items-center gap-[30px]'}>
                <Image className={'w-[50%]'} src={RightSideImage.src} alt={'دیجی پی دانلود'} width={100} height={100} />
                <div className={'w-[50%]'}>
                    <h4 className={'text-center text-darkBlue text-[30px] mb-[20px] font-extrabold'}>دانلود اپلیکیشن دیجی‌پی</h4>
                    <h5 className={'text-center text-darkBlue/80 text-[24px] mb-[40px] font-light'}>در دسترس برای همه گوشی ها</h5>
                    <div className={'flex justify-center items-center gap-[20px] mb-[50px]'}>
                        <button onClick={() => {
                            setAndroidActive(true);
                            setIosActive(false);
                            setWeb1Active(false);
                        }} data-active={isAndroidActive} className={'flex transition-all data-[active="true"]:bg-themeColor data-[active="true"]:text-white data-[active="true"]:border-themeColor items-center rounded-[50rem] border-darkBlue border gap-[10px] py-[10px] px-[20px] truncate text-darkBlue font-light text-[16px]'}><IconComponent name={'android'} />اندروید</button>
                        <button onClick={() => {
                            setAndroidActive(false);
                            setIosActive(true);
                            setWeb1Active(false);
                        }} data-active={isIosActive} className={'flex transition-all data-[active="true"]:bg-themeColor data-[active="true"]:text-white data-[active="true"]:border-themeColor items-center rounded-[50rem] border-darkBlue border gap-[10px] py-[10px] px-[20px] truncate text-darkBlue font-light text-[16px]'}><IconComponent name={'ios'} />ایفون</button>
                        <button onClick={() => {
                            setAndroidActive(false);
                            setIosActive(false);
                            setWeb1Active(true);
                        }} data-active={isWebActive} className={'flex transition-all data-[active="true"]:bg-themeColor data-[active="true"]:text-white data-[active="true"]:border-themeColor items-center rounded-[50rem] border-darkBlue border gap-[10px] py-[10px] px-[20px] truncate text-darkBlue font-light text-[16px]'}><IconComponent name={'web'} />نسخه وب</button>
                    </div>
                    <div className={'flex justify-center items-center flex-wrap gap-[20px] px-[20px] py-[40px] rounded-[20px] bg-mediumBlue'}>
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