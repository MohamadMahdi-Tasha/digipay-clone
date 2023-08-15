// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import IconComponent from "@/chunks/iconComponent";
import cardImage from '@/public/img/services/img-card.png';
import carImage from '@/public/img/services/img-car.png';
import simImage from '@/public/img/services/img-sim.png';
import phoneImage from '@/public/img/services/img-phone.png';
import radioImage from '@/public/img/services/img-radio.png';
import cartHolderImage from '@/public/img/services/img-cardHolder.png';
import cartTimerImage from '@/public/img/services/img-cardTimer.png';
import calenderImage from '@/public/img/services/img-calender.png';
import nameImage from '@/public/img/services/img-name.png';
import umbrellaImage from '@/public/img/services/img-umbrella.png';


// Defining Types Of Props
interface propsType {
    title: string;
    icon: any;
    subtitle: string;
}

// Creating And Exporting Services Icon Component In Header As Default
export default function ServicesHeaderIconComponent({title, subtitle, icon}:propsType):React.ReactNode {
    // Small Inner Component
    function RightSideIconComponent():React.ReactNode {
        // Condition To Set Icon Image And Its Bg
        let image;
        let bg;

        switch (icon) {
            case "cart" : image = cardImage.src;bg = 'bg-lightGreen';break;
            case "car" : image = carImage.src;bg = 'bg-lightBlue';break;
            case "sim" : image = simImage.src;bg = 'bg-lightOrange';break;
            case "phone" : image = phoneImage.src;bg = 'bg-lightOrange';break;
            case "radio" : image = radioImage.src;bg = 'bg-lightOrange';break;
            case "cardHolder" : image = cartHolderImage.src;bg = 'bg-lightGreen';break;
            case "cardTimer" : image = cartTimerImage.src;bg = 'bg-lightBlue';break;
            case "calender" : image = calenderImage.src;bg = 'bg-lightBlue';break;
            case "name" : image = nameImage.src;bg = 'bg-lightOrange';break;
            case "umbrella" : image = umbrellaImage.src;bg = 'bg-lightBlue';break;
        }

        // Returning JSX
        return (
            <div className={`w-[50px] rounded-[10px] ml-[10px] aspect-square ${bg}`}>
                <img src={image} className={'w-full h-full'} alt={title}/>
            </div>
        );
    }

    // Returning JSX
    return (
        <a href={'#'}>
            <button className={'flex gap-[10px] justify-between items-center w-[300px] [&>div:last-of-type]:hover:opacity-100'} tabIndex={-1}>
                <div className={'flex gap-[10px] items-center w-[75%]'}>
                    <RightSideIconComponent />
                    <div className={'w-full overflow-hidden'}>
                        <span className={'block text-[16px] truncate font-normal text-darkBlue text-start'}>{title}</span>
                        <span className={'block text-[12px] truncate font-light text-darkBlue text-start'}>{subtitle}</span>
                    </div>
                </div>
                <div className={'w-[25%] opacity-0 transition-all'}>
                    <IconComponent name={'left-arrow'} />
                </div>
            </button>
        </a>
    );
}