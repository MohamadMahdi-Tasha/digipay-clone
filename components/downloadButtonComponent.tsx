// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import IconComponent from "@/chunks/iconComponent";

// Defining Type Ofg Props
interface propsType {
    name: string;
    onClick: any;
    isActive: boolean;
}

// Creating And Exporting Download Buttons As Default
export default function DownloadButtonComponent({name, onClick, isActive}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <button onClick={onClick}
                data-active={isActive}
                className={'flex shrink-0 transition-all data-[active="true"]:bg-themeColor data-[active="true"]:text-white data-[active="true"]:border-themeColor items-center rounded-[50rem] border-darkBlue border gap-[10px] py-[10px] px-[20px] text-darkBlue font-light text-[16px] relative lg:data-[active="true"]:after:content-[""] lg:data-[active="true"]:after:absolute lg:data-[active="true"]:after:w-full lg:data-[active="true"]:after:h-[5px] lg:data-[active="true"]:after:bg-themeColor lg:data-[active="true"]:after:left-0 lg:data-[active="true"]:after:top-full lg:data-[active="true"]:after:translate-y-[23px]'}
        >
            <IconComponent name={name} />
            {
                (name === 'ios')
                    ? 'ایفون'
                    : (name === 'android')
                        ? 'اندروید'
                        : (name === 'web')
                            ? 'نسخه وب'
                            : false
            }
        </button>
    );
}