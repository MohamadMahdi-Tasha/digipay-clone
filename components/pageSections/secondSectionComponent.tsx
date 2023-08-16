// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState} from 'react';
import Image from "next/image";
import HolderComponent from "@/chunks/holderComponent";
import SecondSectionFeaturesBtnComponent from "@/components/secondSectionFeaturesBtnComponent";
import SecondSectionFeatureComponent from '@/components/secondSectionFeatureComponent';
import RightSideButtonImage1 from '@/public/img/secondSection/rightSideButtons/img-1.png';
import RightSideButtonImage2 from '@/public/img/secondSection/rightSideButtons/img-2.png';
import RightSideButtonImage3 from '@/public/img/secondSection/rightSideButtons/img-3.png';
import FideboLogo from '@/public/img/secondSection/companys/img-fidebo.png';
import KomodaLogo from '@/public/img/secondSection/companys/img-komoda.png';
import DigikalaLogo from '@/public/img/secondSection/companys/img-digikala.png';
import DigikalaBuisinesLogo from '@/public/img/secondSection/companys/img-digikala-buisiness.png';
import DigiStyleLogo from '@/public/img/secondSection/companys/img-digistyle.png';
import DigikalaJetLogo from '@/public/img/secondSection/companys/img-digikalajet.png';
import GameImage from '@/public/img/secondSection/img-game.png';

// Creating And Exporting Second Section Component
export default function SecondSectionComponent():React.ReactNode {
    // Defining State Of Component
    const [isFeatures1Active, setFeatures1Active] = useState(true);
    const [isFeatures2Active, setFeatures2Active] = useState(false);
    const [isFeatures3Active, setFeatures3Active] = useState(false);
    const [activeFeatures, setActiveFeatures] = useState('first');

    // Returning JSX
    return (
        <section className={'py-[50px]'}>
            <HolderComponent>
                <header className={'mb-[50px]'}>
                    <h3 className={'text-center text-darkBlue text-[30px] mb-[10px] font-extrabold'}>خدمات کسب و کارها</h3>
                    <h4 className={'text-center text-darkBlue text-[24px] font-light'}>شروع تحولی محسوس در کسب وا کارتان</h4>
                </header>
                <main>
                    <div className={'flex lg:flex-row flex-col gap-[30px] items-center mb-[100px]'}>
                        <div className={'lg:w-[25%] w-full flex flex-col gap-[20px]'}>
                            <SecondSectionFeaturesBtnComponent onClick={() => {
                                setFeatures1Active(true);
                                setFeatures2Active(false);
                                setFeatures3Active(false);
                                setActiveFeatures('first');
                            }} isActive={isFeatures1Active} img={RightSideButtonImage1.src} title={'درگاه پرداخت هوشمند'} subTitle={'افزایش شانس پرداخت موفق'} />
                            <SecondSectionFeaturesBtnComponent onClick={() => {
                                setFeatures1Active(false);
                                setFeatures2Active(true);
                                setFeatures3Active(false);
                                setActiveFeatures('second');
                            }} isActive={isFeatures2Active} img={RightSideButtonImage2.src} title={'خرید اقساطی سازمانی'} subTitle={'دریافت اعتبار برای کارمندان سازمان ها'} />
                            <SecondSectionFeaturesBtnComponent onClick={() => {
                                setFeatures1Active(false);
                                setFeatures2Active(false);
                                setFeatures3Active(true);
                                setActiveFeatures('third');
                            }} isActive={isFeatures3Active} img={RightSideButtonImage3.src} title={'درگاه پرداخت اشتراک'} subTitle={'پرداخت خودکار اشتراک‌ها'} />
                        </div>
                        <SecondSectionFeatureComponent name={activeFeatures} />
                    </div>
                    <div className={'mb-[75px]'}>
                        <h4 className={'text-center text-darkBlue text-[30px] mb-[50px] font-extrabold'}>بزرگ‌ترین مشتریان خدمات کسب و کار ما</h4>
                        <div className={'flex overflow-auto scrollbar-hidden'}>
                            <a className={'block shrink-0 opacity-50'} href="#"><Image className={'w-[200px]'} src={FideboLogo.src} width={100} height={100} alt={'فیدبو'} /></a>
                            <a className={'block shrink-0 opacity-50'} href="#"><Image className={'w-[200px]'} src={KomodaLogo.src} width={100} height={100} alt={'کمدا'} /></a>
                            <a className={'block shrink-0 opacity-50'} href="#"><Image className={'w-[200px]'} src={DigikalaLogo.src} width={100} height={100} alt={'دیجیکالا'} /></a>
                            <a className={'block shrink-0 opacity-50'} href="#"><Image className={'w-[200px]'} src={DigikalaBuisinesLogo.src} width={100} height={100} alt={'دیجیکالا بیزینس'} /></a>
                            <a className={'block shrink-0 opacity-50'} href="#"><Image className={'w-[200px]'} src={DigiStyleLogo.src} width={100} height={100} alt={'دیجی استایل'} /></a>
                            <a className={'block shrink-0 opacity-50'} href="#"><Image className={'w-[200px]'} src={DigikalaJetLogo.src} width={100} height={100} alt={'دیجیکالا جت'} /></a>
                        </div>
                    </div>
                    <a className={'block'} href="#"><img className={'w-full'} src={GameImage.src} width={100} height={100} alt="بازی سرزمین دیجی پی"/></a>
                </main>
            </HolderComponent>
        </section>
    );
}
