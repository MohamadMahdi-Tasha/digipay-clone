// Codes By Mahdi Tasha
// Importing Part
import {Metadata} from "next";
import '@/app/index.css';
import React from "react";

// Creating And Exporting Meta Data Of Page
export const metadata: Metadata = {
    title: 'دیجی پی کلون | پرداخت باهوش',
    description: 'انتقال وجه اینترنتی به سایر بانک‌ها و کارت به کارت با موبایل با رمز دوم ایستا و پویا در دیجی‌ پی کلون بدون مراجعه حضوری به بانک و دستگاه خودپرداز',
    keywords: 'دیجی پی,خرید,دیجیکالا,بانک,پول,رمز پویا,کارت به کارت,انلاین,digipay,digikala,atm,online',
    themeColor: '#0040ff',
    viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    manifest: '/public/manifest.json'
}

// Defining Types Of Props
interface propsType {
    children: React.ReactNode;
}

// Creating Root Layout Of Pages And Exporting It A Default
export default function RootLayout({children}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <html lang={'fa'}>
            <body dir={'rtl'}>
                {children}
            </body>
        </html>
    );
}