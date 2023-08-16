// Codes By Mahdi Tasha
// Importing Part
import React from 'react';

// Defining Types Of Props
interface propsType {
    img: string;
    title: string;
    subTitle: string;
    isActive: boolean;
    onClick: any;
}

// Creating And Exporting Button In Right Side Of Features In Second Section
export default function SecondSectionFeaturesBtnComponent({img, title, subTitle, isActive, onClick}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <button onClick={onClick} data-active={isActive} className={'flex relative gap-[10px] items-center rounded-[20px] border data-[active="false"]:bg-lightBlue/30 transition-all data-[active="false"]:border-darkBlue/20 data-[active="true"]:bg-white data-[active="true"]:border-myYellow px-[20px] lg:py-[30px] py-[20px] lg:data-[active="true"]:after:block data-[active="true"]:after:hidden data-[active="true"]:after:content-[""] data-[active="true"]:after:absolute data-[active="true"]:after:top-[50%] data-[active="true"]:after:right-full data-[active="true"]:after:translate-y-[-50%] data-[active="true"]:after:translate-x-[-30px] data-[active="true"]:after:w-[2px] data-[active="true"]:after:h-[50px] data-[active="true"]:after:bg-myYellow'}>
            <img className={'w-[25%]'} src={img} alt={title}/>
            <div className={'w-[85%] overflow-hidden'}>
                <span className={'block truncate text-[16px] text-start text-darkBlue font-normal mb-[10px]'}>{title}</span>
                <span className={'block truncate text-[12px] text-start text-darkBlue/80 font-light'}>{subTitle}</span>
            </div>
        </button>
    );
}