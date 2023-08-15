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
        // Condition To Set Icon Image
        let image;

        switch (icon) {
            case "cart" : image = cardImage.src;break;
            case "car" : image = carImage.src;break;
            case "sim" : image = simImage.src;break;
            case "phone" : image = phoneImage.src;break;
            case "radio" : image = radioImage.src;break;
            case "cardHolder" : image = cartHolderImage.src;break;
            case "cardTimer" : image = cartTimerImage.src;break;
            case "calender" : image = calenderImage.src;break;
            case "name" : image = nameImage.src;break;
            case "umbrella" : image = umbrellaImage.src;break;
        }

        // Returning JSX
        return (
            <div>
                <img src={image} alt={title}/>
            </div>
        );
    }

    // Returning JSX
    return (
        <a href={'#'}>
            <button tabIndex={-1}>
                <div>
                    <RightSideIconComponent />
                    <div>
                        <span>{title}</span>
                        <span>{subtitle}</span>
                    </div>
                </div>
                <IconComponent name={'arrow-left'}/>
            </button>
        </a>
    );
}