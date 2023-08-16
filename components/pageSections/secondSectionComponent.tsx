// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
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
    // Returning JSX
    return (
        <section className={'pt-[200px] pb-[100px] overflow-hidden'}>
            <HolderComponent>
                <header>
                    <h3>خدمات کسب و کارها</h3>
                    <h4>شروع تحولی محسوس در کسب وا کارتان</h4>
                </header>
                <main>
                    <div>
                        <div>
                            <SecondSectionFeaturesBtnComponent img={RightSideButtonImage1.src} title={'درگاه پرداخت هوشمند'} subTitle={'افزایش شانس پرداخت موفق'} />
                            <SecondSectionFeaturesBtnComponent img={RightSideButtonImage2.src} title={'خرید اقساطی سازمانی'} subTitle={'دریافت اعتبار برای کارمندان سازمان ها'} />
                            <SecondSectionFeaturesBtnComponent img={RightSideButtonImage3.src} title={'درگاه پرداخت اشتراک'} subTitle={'پرداخت خودکار اشتراک‌ها'} />
                        </div>
                        <SecondSectionFeatureComponent name={'awsda'} />
                    </div>
                    <div>
                        <h4>بزرگ‌ترین مشتریان خدمات کسب و کار ما</h4>
                        <div>
                            <a href="#"><Image src={FideboLogo.src} width={100} height={100} alt={'فیدبو'} /></a>
                            <a href="#"><Image src={KomodaLogo.src} width={100} height={100} alt={'کمدا'} /></a>
                            <a href="#"><Image src={DigikalaLogo.src} width={100} height={100} alt={'دیجیکالا'} /></a>
                            <a href="#"><Image src={DigikalaBuisinesLogo.src} width={100} height={100} alt={'دیجیکالا بیزینس'} /></a>
                            <a href="#"><Image src={DigiStyleLogo.src} width={100} height={100} alt={'دیجی استایل'} /></a>
                            <a href="#"><Image src={DigikalaJetLogo.src} width={100} height={100} alt={'دیجیکالا جت'} /></a>
                        </div>
                    </div>
                    <a href="#"><img src={GameImage.src} width={100} height={100} alt="بازی سرزمین دیجی پی"/></a>
                </main>
            </HolderComponent>
        </section>
    );
}
