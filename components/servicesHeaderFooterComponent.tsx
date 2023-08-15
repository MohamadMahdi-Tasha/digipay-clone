// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import IconComponent from "@/chunks/iconComponent";

// Creating And Exporting Bottom Of Services Component In Header As Default
export default function ServicesHeaderFooterComponent():React.ReactNode {
    // Returning JSX
    return (
        <div>
            <div>
                <span>دریافت اعتبار ۵۰ ملیونی</span>
                <span>با دریافت اعتلار ۵۰ ملیونی میتوانید از دیجیکالا با بیش از ۱۰ ملیون تنوع محصولات خرید کنید.</span>
            </div>
            <a href="#">
                ثبت نام
                <IconComponent name={'chevron-left'} />
            </a>
        </div>
    );
}