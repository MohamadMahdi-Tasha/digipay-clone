// Codes By Mahdi Tasha
// Importing Part
import React from "react";

// Defining Type Of Props
interface typeofProps {
    children: React.ReactNode;
    className?: string;
}

// Creating And Exporting Holder Component As Default
export default function HolderComponent({children, className}:typeofProps):React.ReactNode {
    // Returning JSX
    return (
        <div className={
            (className === undefined)
                ? 'max-w-[1150px] px-[20px] mx-auto'
                : `max-w-[1150px] px-[20px] mx-auto ${className}`
        }>
            {children}
        </div>
    );
}