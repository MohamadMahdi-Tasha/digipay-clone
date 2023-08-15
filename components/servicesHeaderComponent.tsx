// Codes By Mahdi Tasha
// Importing Part
import React from "react";
import HolderComponent from "@/chunks/holderComponent";
import IconComponent from "@/chunks/iconComponent";
import ServicesHeaderIconComponent from "@/components/servicesHeaderIconComponent";
import ServicesHeaderFooterComponent from "@/components/servicesHeaderFooterComponent";

// Defining Types Of Props
interface propsType {
    isOpened: boolean;
    onMouseEnter: any;
    onMouseLeave: any;
}

// Creating And Exporting Services Component In Header As Default
export default function ServicesHeaderComponent({isOpened, onMouseEnter, onMouseLeave}:propsType):React.ReactNode {
    // Returning JSX
    return (
        <div data-opened={isOpened} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <HolderComponent>
                <div>
                    <div>
                        <button>
                            <div>
                                <span>خدمات مالی و پرداختی</span>
                                <span>انجام تراکنش های روزمره</span>
                            </div>
                            <IconComponent name={'left-arrow'} />
                        </button>
                        <button>
                            <div>
                                <span>خدمات سازمانی</span>
                                <span>برای کارمندان سازمان شما</span>
                            </div>
                            <IconComponent name={'left-arrow'} />
                        </button>
                        <button>
                            <div>
                                <span>خدمات کسب و کار های انلاین</span>
                                <span>برای صاحبان سایت های فروشگاهی</span>
                            </div>
                            <IconComponent name={'left-arrow'} />
                        </button>
                    </div>
                    <div>
                        <ServicesHeaderIconComponent icon={'cart'} title={'کارت به کارت'} subtitle={'پشتیبانی از ۳۰+ بانک ایران'} />
                        <ServicesHeaderIconComponent icon={'radio'} title={'خرید بسته اینترنت'} subtitle={'ایرانسل, همراه اول و رایتل'} />
                        <ServicesHeaderIconComponent icon={'car'} title={'پرداخت عوارض جاده ای'} subtitle={'استعلام و پرداخت عوارض'} />
                        <ServicesHeaderIconComponent icon={'name'} title={'پرداخت قبوض حدماتی'} subtitle={'پرداخت اینترنی قبوض (اب,برق,گاز)'} />
                        <ServicesHeaderIconComponent icon={'sim'} title={'خرید شارژ'} subtitle={'ایرانسل, همراه اول و رایتل'} />
                        <ServicesHeaderIconComponent icon={'cardHolder'} title={'کیف پول'} subtitle={'انتقال خرید با یک کلیک'} />
                        <ServicesHeaderIconComponent icon={'calender'} title={'خرید اقساطی از دیجیکالا'} subtitle={'پرداهت اعتباری ۲۴-۱۲ ماهه'} />
                        <ServicesHeaderIconComponent icon={'umbrella'} title={'بیمه تجهیزات الکترونیک'} subtitle={'محصولات دیجیتالی دیجیکالا'} />
                        <ServicesHeaderIconComponent icon={'phone'} title={'پرداخت قبض موبایل'} subtitle={'ایرانسل, همراه اول و رایتل'} />
                        <ServicesHeaderIconComponent icon={'cardTimer'} title={'الان بخر بعدا پرداخت کن'} subtitle={'بازپرداخت یکم تا پنجم ماه بعد'} />
                    </div>
                </div>
                <ServicesHeaderFooterComponent />
            </HolderComponent>
        </div>
    );
}