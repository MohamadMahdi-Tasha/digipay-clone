// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import FirstSectionComponent from '@/components/pageSections/firstSectionComponent';
import SecondSectionComponent from "@/components/pageSections/secondSectionComponent";
import ThirdSectionComponent from "@/components/pageSections/thirdSectionComponent";
import FourthSectionComponent from "@/components/pageSections/fourthSectionComponent";
import localFont from 'next/font/local';

// Defining Font To Use
const YekanBakhFont = localFont({src: [
    {
        path: '../public/fonts/YekanBakh/YekanBakh-light.woff',
        weight: '300',
        style: 'normal'
    },
    {
        path: '../public/fonts/YekanBakh/YekanBakh-Regular.woff',
        weight: '500',
        style: 'normal'
    },
    {
        path: '../public/fonts/YekanBakh/YekanBakh-Black.woff',
        weight: '900',
        style: 'normal'
    },
    {
        path: '../public/fonts/YekanBakh/YekanBakh-Bold.woff',
        weight: '700',
        style: 'normal'
    }
], variable : '--font-primary'})

// Creating Home Page And Exporting It As Default
export default function HomePage(): React.ReactNode {
    // Returning JSX
    return (
        <div className={`${YekanBakhFont.variable} font-primary`}>
            <FirstSectionComponent/>
            <SecondSectionComponent/>
            <ThirdSectionComponent />
            <FourthSectionComponent />
        </div>
    );
}