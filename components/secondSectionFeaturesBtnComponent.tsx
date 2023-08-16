// Codes By Mahdi Tasha
// Importing Part
import React from 'react';

// Defining Types Of Props
interface propsType {
    img: string;
    title: string;
    subTitle: string;
}

// Creating And Exporting Button In Right Side Of Features In Second Section
export default function SecondSectionFeaturesBtnComponent({img,title,subTitle}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <button>
            <img src={img} alt={title}/>
            <div>
                <span>{title}</span>
                <span>{subTitle}</span>
            </div>
        </button>
    );
}