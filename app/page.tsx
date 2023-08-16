// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import FirstSectionComponent from '@/components/pageSections/firstSectionComponent';
import SecondSectionComponent from "@/components/pageSections/secondSectionComponent";

// Creating Home Page And Exporting It As Default
export default function HomePage(): React.ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent/>
            <SecondSectionComponent/>
        </>
    );
}