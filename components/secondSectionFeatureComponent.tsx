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
            <div>
                <h4>آسان شدن فرآیند تمدید سرویس‌های اشتراکی</h4>
                <div>
                    <div>
                        <div>
                            <span>
                                <IconComponent name={'check'} />
                                دسترسی به پنل گزارش
                            </span>
                                <span>
                                <IconComponent name={'check'} />
                                تسهیل در عقد قراردادهای مشابه
                            </span>
                                <span>
                                <IconComponent name={'check'} />
                               دوره آزمایشی
                            </span>
                        </div>
                        <p>پرداخت حق عضویت یا درگاه پرداخت اشتراک، برای کسب و کارهایی که خدمات خود را در قالب بسته‌های اشتراک ارائه می‌دهند، طراحی شده است. این سرویس طی یک قرارداد سه جانبه، مجوز برداشت خودکار از کیف پول دیجی‌پی کاربر را با تأیید وی و به منظور پرداخت دوره‌ای خدمات مختلف دریافت می‌کند.</p>
                        <a href="#"><button>درگاه پرداخت اشتراک</button></a>
                    </div>
                    <img src={ThirdImage.src} alt="آسان شدن فرآیند تمدید سرویس‌های اشتراکی"/>
                </div>
            </div>
        );
    } else if (name === 'second') {
        return (
            <div>
                <h4>با اعتبار دیجی پی,از دیجی کالا قسطی خرید کنید</h4>
                <div>
                    <div>
                        <div>
                            <span>
                                <IconComponent name={'check'} />
                                ثبت نام
                            </span>
                                <span>
                                <IconComponent name={'check'} />
                                بررسی درخواست
                            </span>
                            <span>
                                <IconComponent name={'check'} />
                                ادامه مراحل دریافت اعتبار
                            </span>
                            <span>
                                <IconComponent name={'check'} />
                                اعطای اعتبار
                            </span>
                        </div>
                        <p>شرکت دیجی‌پی امکان خرید اقساطی کارکنان سازمان‌ها روی دیجی‌کالا و با امکان انتخاب از بستری شامل 8 میلیون کالا، در سرتاسر کشور فراهم نموده است. جهت استفاده از این سرویس کافیست سازمان‌ها با دیجی‌پی، تفاهم نامه همکاری داشته باشد. بدین‌ترتیب کارکنان، بدون نیاز به چک یا سفته ضمانت و فقط با ارائه مدارک هویتی و فیش حقوقی و ضمانت سازمان، امکان خرید تا سقف ۳۰ میلیون تومان و بازپرداخت در بلند مدت را خواهند داشت .</p>
                        <a href="#"><button>اطلاعات بیشتر</button></a>
                    </div>
                    <img src={SecondImage.src} alt="با اعتبار دیجی پی,از دیجی کالا قسطی خرید کنید"/>
                </div>
            </div>
        );
    } else if (name === 'first') {
        return (
            <div>
                <h4>آسان شدن فرآیند تمدید سرویس‌های اشتراکی</h4>
                <div>
                    <div>
                        <div>
                            <span>
                                <IconComponent name={'check'} />
                                دسترسی به پنل گزارش
                            </span>
                            <span>
                                <IconComponent name={'check'} />
                                بررسی درخواست تسهیل در عقد قراردادهای مشابه
                            </span>
                            <span>
                                <IconComponent name={'check'} />
                                دوره آزمایشی
                            </span>
                        </div>
                        <p>پرداخت حق عضویت یا درگاه پرداخت اشتراک، برای کسب و کارهایی که خدمات خود را در قالب بسته‌های اشتراک ارائه می‌دهند، طراحی شده است. این سرویس طی یک قرارداد سه جانبه، مجوز برداشت خودکار از کیف پول دیجی‌پی کاربر را با تأیید وی و به منظور پرداخت دوره‌ای خدمات مختلف دریافت می‌کند.</p>
                        <a href="#"><button>درگاه پرداخت هوشمند</button></a>
                    </div>
                    <img src={FirstImage.src} alt="آسان شدن فرآیند تمدید سرویس‌های اشتراکی"/>
                </div>
            </div>
        );
    }
}