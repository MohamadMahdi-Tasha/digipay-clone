// Codes By Mahdi Tasha
// Importing Part
import React from "react";

// Defining Type Of Props
interface typeofProps {
    children: React.ReactNode;
}

// Creating And Exporting Holder Component As Default
export default function HolderComponent({children}:typeofProps):React.ReactNode {
    // Returning JSX
    return (
        <div className={'max-w-[1150px] px-[20px] mx-auto'}>
            {children}
        </div>
    );
}