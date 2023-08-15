// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import IconComponent from "@/chunks/iconComponent";

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
            case "cart" : image = require('@/public/img/services/img-card.png');break;
            case "sim" : image = require('@/public/img/services/img-sim.png');break;
            case "phone" : image = require('@/public/img/services/img-phone.png');break;
            case "radio" : image = require('@/public/img/services/img-radio.png');break;
            case "cartHolder" : image = require('@/public/img/services/img-cartHolder.png');break;
            case "cartTimer" : image = require('@/public/img/services/img-cartTimer.png');break;
            case "calender" : image = require('@/public/img/services/img-calender.png');break;
            case "name" : image = require('@/public/img/services/img-name.png');break;
            case "umbrella" : image = require('@/public/img/services/img-umbrella.png');break;
        }

        // Returning JSX
        return (
            <div>
                <img src={image.src} alt="عکس کارت"/>
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