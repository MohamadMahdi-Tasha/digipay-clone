// Codes  By Mahdi Tasha
// Importing Part
import React from 'react';
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import Image from 'next/image';
import RightSideImage from '@/public/img/thirdSection/img-right.svg';

// Creating And Exporting Third Section
export default function ThirdSectionComponent():React.ReactNode {
    // Returning JSX
    return (
        <section className={'py-[50px] bg-lightBlue'}>
            <HolderComponent>
                <Image src={RightSideImage.src} alt={'دیجی پی دانلود'} width={100} height={100} />
                <div>
                    <h4>دانلود اپلیکیشن دیجی‌پی</h4>
                    <h5>در دسترس برای همه گوشی ها</h5>
                    <div>
                        <button><IconComponent name={'android'} />اندروید</button>
                        <button><IconComponent name={'ios'} />ایفون</button>
                        <button><IconComponent name={'web'} />نسخه وب</button>
                    </div>
                    <div>
                        <a href="#"><button tabIndex={-1}>گوگل پلی</button></a>
                        <a href="#"><button tabIndex={-1}>کافه بازار</button></a>
                        <a href="#"><button tabIndex={-1}>مایکت</button></a>
                    </div>
                </div>
            </HolderComponent>
        </section>
    );
}