// Codes By Mahdi Tasha
// Importing Part
import React from 'react';

// Defining Type Of Props
interface propsType {
    img: string;
    type: string;
    date: string;
    title: string;
}

// Creating And Exporting Blog Component As Default
export default function BlogComponent({img,type,date,title}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <a className={'h-[300px] rounded-[20px] overflow-hidden block relative'} href={'#'}>
            <img src={img} alt="تامبنیل بلاگ" className={'w-full h-full absolute top-0 left-0 object-cover'}/>
            <div className={'h-full'}>
                <div className={'h-[60%] p-[20px] flex justify-end items-start'}>
                    <div className={'bg-myYellow/50 backdrop-blur px-[20px] truncate py-[10px] rounded-[50rem] text-[15px] font-normal text-white w-[200px] text-center'}>{type}</div>
                </div>
                <div className={'h-[40%] bg-themeColor/50 backdrop-blur p-[20px]'}>
                    <span className={'block text-mediumBlue text-[12px] truncate font-normal mb-[10px]'}>{date}</span>
                    <span className={'block text-lightBlue text-[20px] truncate font-bold'}>{title}</span>
                </div>
            </div>
        </a>
    );
}