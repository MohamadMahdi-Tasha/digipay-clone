// Codes By Mahdi Tasha
// Importing Part
import BlogImage1 from "@/public/img/blogs/img-1.webp";
import BlogImage2 from "@/public/img/blogs/img-2.jpg";
import BlogImage3 from "@/public/img/blogs/img-3.jpeg";
import BlogImage4 from "@/public/img/blogs/img-4.webp";
import BlogImage5 from "@/public/img/blogs/img-5.webp";
import BlogImage6 from "@/public/img/blogs/img-6.jpg";
import BlogImage7 from "@/public/img/blogs/img-7.jpg";
import BlogImage8 from "@/public/img/blogs/img-8.jpg";
import BlogImage9 from "@/public/img/blogs/img-9.webp";
import BlogImage10 from "@/public/img/blogs/img-10.jpg";

// Defining Objects Of Blogs
const blogs:{img: string,title: string, type: string, date: string}[] = [
    {
        img: BlogImage1.src,
        title: 'بهترین گوشی های هوشمند از نظر باتری',
        type: 'راهنمای خرید اقساطی',
        date: '8/17/2023'
    },
    {
        img: BlogImage2.src,
        title: 'نحوه واریز پول به شماره حساب با گوشی',
        type: 'زندگی هوشمند',
        date: '8/17/2023'
    },
    {
        img: BlogImage3.src,
        title: 'اینترنت کدام اپراتور بهتر است',
        type: 'زندگی هوشمند',
        date: '8/12/2023'
    },
    {
        img: BlogImage4.src,
        title: 'بهترین موتورسیکلت های سفر و تورینگ',
        type: 'راهنمای خرید اقساطی',
        date: '8/12/2023'
    },
    {
        img: BlogImage5.src,
        title: 'بهترین کارت گرافیک برای بازی',
        type: 'راهنمای خرید اقساطی',
        date: '8/12/2023'
    },
    {
        img: BlogImage6.src,
        title: 'چگونه هدفون بلوتوثی را به ps5 وصل کنیم',
        type: 'راهنمای خرید اقساطی',
        date: '8/5/2023'
    },
    {
        img: BlogImage7.src,
        title: 'بهترین مارک جاروبرقی ایرانی و خارجی',
        type: 'راهنمای خرید اقساطی',
        date: '8/5/2023'
    },
    {
        img: BlogImage8.src,
        title: 'بهترین برند لوازم خانگی ایرانی',
        type: 'راهنمای خرید اقساطی',
        date: '8/5/2023'
    },
    {
        img: BlogImage9.src,
        title: 'بهترین لپ تاپ های سبک بازار',
        type: 'راهنمای خرید اقساطی',
        date: '7/29/2023'
    },
    {
        img: BlogImage10.src,
        title: 'راهنمای خرید کیبورد گیمینگ',
        type: 'راهنمای خرید اقساطی',
        date: '7/29/2023'
    }
]

// Exporting Blogs Objects As Default
export default blogs;