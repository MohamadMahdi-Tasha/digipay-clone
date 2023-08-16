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
        <div data-opened={isOpened} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={'border-t transition-all duration-500 border-t-myYellow shadow-lg data-[opened="false"]:translate-y-[-100px] overflow-auto lg:block hidden data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="false"]:h-[0] data-[opened="false"]:opacity-0'}>
            <HolderComponent>
                <div className={'flex'}>
                    <div className={'w-[25%] border-l border-l-darkBlue/20 p-[20px] flex flex-col gap-[20px] h-full overflow-auto'}>
                        <button className={'flex items-center gap-[10px] justify-between w-full transition-all p-[20px] rounded-[20px] bg-white hover:bg-lightBlue'}>
                            <div className={'overflow-hidden w-[75%]'}>
                                <span className={'text-darkBlue text-[15px] truncate text-start font-light block mb-[10px]'}>خدمات مالی و پرداختی</span>
                                <span className={'text-darkBlue/80 text-[10px] truncate text-start font-light block'}>انجام تراکنش های روزمره</span>
                            </div>
                            <IconComponent name={'left-arrow'} />
                        </button>
                        <button className={'flex items-center gap-[10px] justify-between w-full transition-all p-[20px] rounded-[20px] bg-white hover:bg-lightBlue'}>
                            <div className={'overflow-hidden w-[75%]'}>
                                <span className={'text-darkBlue text-[15px] truncate text-start font-light block mb-[10px]'}>خدمات سازمانی</span>
                                <span className={'text-darkBlue/80 text-[10px] truncate text-start font-light block'}>برای کارمندان سازمان شما</span>
                            </div>
                            <IconComponent name={'left-arrow'} />
                        </button>
                        <button className={'flex items-center gap-[10px] justify-between w-full transition-all p-[20px] rounded-[20px] bg-white hover:bg-lightBlue'}>
                            <div className={'overflow-hidden w-[75%]'}>
                                <span className={'text-darkBlue text-[15px] truncate text-start font-light block mb-[10px]'}>خدمات کسب و کار های انلاین</span>
                                <span className={'text-darkBlue/80 text-[10px] truncate text-start font-light block'}>برای صاحبان سایت های فروشگاهی</span>
                            </div>
                            <IconComponent name={'left-arrow'} />
                        </button>
                    </div>
                    <div className={'grid grid-cols-3 gap-[20px] w-[75%] p-[20px]'}>
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
            </HolderComponent>
            <ServicesHeaderFooterComponent />
        </div>
    );
}