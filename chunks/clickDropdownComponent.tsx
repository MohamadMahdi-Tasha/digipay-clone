// Codes By Mahdi Tasha
// Forcing Next.js To Render This Component As Client Side Component
'use client';

// Importing Part
import React, {useState} from "react";
import IconComponent from "@/chunks/iconComponent";

// Defining Type Of Props
interface typeofProps {
    icon: string;
    children: React.ReactNode;
}

// Creating And Exporting DropDown Component As Default
export default function ClickDropdownComponent({icon,children}:typeofProps):React.ReactNode {
    // Defining State Of Component
    const [isOpened, setOpened] = useState(false);

    // Returning JSX
    return (
        <div className={'lg:relative'}>
            <button onClick={() => setOpened(prevState => !prevState)} className={'flex items-center'}>
                <IconComponent name={icon} />
                <IconComponent name={'chevron-down'} />
            </button>
            <div data-opened={isOpened} className={'header-menu left'}>
                {children}
            </div>
        </div>
    );
}