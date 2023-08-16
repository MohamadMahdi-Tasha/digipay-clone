// CodesBy Mahdi Tasha
// Importing Part
import React from 'react';
import IconComponent from "@/chunks/iconComponent";
import ThirdImage from '@/public/img/secondSection/features/img-third.png';
import SecondImage from '@/public/img/secondSection/features/img-second.png';
import FirstImage from '@/public/img/secondSection/features/img-first.png';

// Defining Types Of Props
interface propsType {
    name: string;
}

// Creating And Exporting Features Component In Second Section
export default function SecondSectionFeatureComponent({name}:propsType):React.ReactNode {
    // Conditional Rendering JSX
    if (name === 'third') {
        return (
            <div className={'p-[30px] border rounded-[20px] border-darkBlue/20'}>
                <h4 className={'font-extrabold text-darkBlue/50 mb-[20px] text-[34px] truncate w-[20ch] overflow-hidden'}>آسان شدن فرآیند تمدید سرویس‌های اشتراکی</h4>
                <div className={'flex gap-[30px] items-center'}>
                    <div className={'w-[75%]'}>
                        <div className={'border rounded-[20px] border-darkBlue/20 p-[20px] flex flex-wrap gap-[20px] mb-[30px]'}>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                دسترسی به پنل گزارش
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                تسهیل در عقد قراردادهای مشابه
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                               دوره آزمایشی
                            </span>
                        </div>
                        <p className={'text-darkBlue/50 font-light text-[16px] mb-[30px] line-clamp-3'}>پرداخت حق عضویت یا درگاه پرداخت اشتراک، برای کسب و کارهایی که خدمات خود را در قالب بسته‌های اشتراک ارائه می‌دهند، طراحی شده است. این سرویس طی یک قرارداد سه جانبه، مجوز برداشت خودکار از کیف پول دیجی‌پی کاربر را با تأیید وی و به منظور پرداخت دوره‌ای خدمات مختلف دریافت می‌کند.</p>
                        <a href="#"><button className={'px-[20px] py-[10px] text-[16px] font-normal bg-themeColor text-white rounded-[10px]'} tabIndex={-1}>درگاه پرداخت اشتراک</button></a>
                    </div>
                    <img className={'w-[25%]'} src={ThirdImage.src} alt="آسان شدن فرآیند تمدید سرویس‌های اشتراکی"/>
                </div>
            </div>
        );
    } else if (name === 'second') {
        return (
            <div className={'p-[30px] border rounded-[20px] border-darkBlue/20'}>
                <h4 className={'font-extrabold text-darkBlue/50 mb-[20px] text-[34px] truncate w-[20ch] overflow-hidden'}>با اعتبار دیجی پی,از دیجی کالا قسطی خرید کنید</h4>
                <div className={'flex gap-[30px] items-center'}>
                    <div className={'w-[75%]'}>
                        <div className={'border rounded-[20px] border-darkBlue/20 p-[20px] flex flex-wrap gap-[20px] mb-[30px]'}>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                ثبت نام
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                بررسی درخواست
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                ادامه مراحل دریافت اعتبار
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                اعطای اعتبار
                            </span>
                        </div>
                        <p className={'text-darkBlue/50 font-light text-[16px] mb-[30px] line-clamp-3'}>شرکت دیجی‌پی امکان خرید اقساطی کارکنان سازمان‌ها روی دیجی‌کالا و با امکان انتخاب از بستری شامل 8 میلیون کالا، در سرتاسر کشور فراهم نموده است. جهت استفاده از این سرویس کافیست سازمان‌ها با دیجی‌پی، تفاهم نامه همکاری داشته باشد. بدین‌ترتیب کارکنان، بدون نیاز به چک یا سفته ضمانت و فقط با ارائه مدارک هویتی و فیش حقوقی و ضمانت سازمان، امکان خرید تا سقف ۳۰ میلیون تومان و بازپرداخت در بلند مدت را خواهند داشت .</p>
                        <a href="#"><button className={'px-[20px] py-[10px] text-[16px] font-normal bg-themeColor text-white rounded-[10px]'} tabIndex={-1}>اطلاعات بیشتر</button></a>
                    </div>
                    <img className={'w-[25%]'} src={SecondImage.src} alt="با اعتبار دیجی پی,از دیجی کالا قسطی خرید کنید"/>
                </div>
            </div>
        );
    } else if (name === 'first') {
        return (
            <div className={'p-[30px] border rounded-[20px] border-darkBlue/20'}>
                <h4 className={'font-extrabold text-darkBlue/50 mb-[20px] text-[34px] truncate w-[20ch] overflow-hidden'}>آسان شدن فرآیند تمدید سرویس‌های اشتراکی</h4>
                <div className={'flex gap-[30px] items-center'}>
                    <div className={'w-[75%]'}>
                        <div className={'border rounded-[20px] border-darkBlue/20 p-[20px] flex flex-wrap gap-[20px] mb-[30px]'}>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                دسترسی به پنل گزارش
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                بررسی درخواست تسهیل در عقد قراردادهای مشابه
                            </span>
                            <span className={'flex items-center gap-[10px]'}>
                                <IconComponent name={'check'} />
                                دوره آزمایشی
                            </span>
                        </div>
                        <p className={'text-darkBlue/50 font-light text-[16px] mb-[30px] line-clamp-3'}>پرداخت حق عضویت یا درگاه پرداخت اشتراک، برای کسب و کارهایی که خدمات خود را در قالب بسته‌های اشتراک ارائه می‌دهند، طراحی شده است. این سرویس طی یک قرارداد سه جانبه، مجوز برداشت خودکار از کیف پول دیجی‌پی کاربر را با تأیید وی و به منظور پرداخت دوره‌ای خدمات مختلف دریافت می‌کند.</p>
                        <a href="#"><button className={'px-[20px] py-[10px] text-[16px] font-normal bg-themeColor text-white rounded-[10px]'} tabIndex={-1}>درگاه پرداخت هوشمند</button></a>
                    </div>
                    <img className={'w-[25%]'} src={FirstImage.src} alt="آسان شدن فرآیند تمدید سرویس‌های اشتراکی"/>
                </div>
            </div>
        );
    }
}