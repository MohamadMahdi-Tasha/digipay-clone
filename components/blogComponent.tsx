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
        <a href={'#'}>
            <img src={img} alt="تامبنیل بلاگ"/>
            <div>
                <div>
                    <div>{type}</div>
                </div>
                <div>
                    <span>{date}</span>
                    <span>{title}</span>
                </div>
            </div>
        </a>
    );
}