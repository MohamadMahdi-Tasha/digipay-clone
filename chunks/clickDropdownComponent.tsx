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
        <div className={'relative'}>
            <button onClick={() => setOpened(prevState => !prevState)} className={'flex items-center'}>
                <IconComponent name={icon} />
                <IconComponent name={'chevron-down'} />
            </button>
            <div data-opened={isOpened}
                 className={'absolute transition-all shadow-lg w-[200px] left-0 top-[52px] data-[opened="true"]:translate-y-0 data-[opened="true"]:opacity-100 data-[opened="true"]:visible data-[opened="false"]:translate-y-[-10px] data-[opened="false"]:opacity-0 data-[opened="false"]:invisible border-t border-t-myYellow bg-white flex flex-col items-center justify-center p-[20px]'}>
                {children}
            </div>
        </div>
    );
}