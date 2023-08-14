// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState} from "react";

// Creating And Exporting Mobile Header Links Component As Default
export default function MobileHeaderLinksComponent():React.ReactNode {
    // Defining States Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'lg:relative  lg:hidden block'}>
            <button onClick={() => setOpened(prevState => !prevState)} className={'hamburger-btn'} data-opened={isOpened}>
                <span className={'hamburger-line'}></span>
                <span className={'hamburger-line'}></span>
                <span className={'hamburger-line'}></span>
            </button>
            <div data-opened={isOpened} className={'header-menu right'}>
                <span>Menu</span>
            </div>
        </div>
    );
}