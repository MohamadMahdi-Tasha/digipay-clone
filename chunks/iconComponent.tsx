// Codes By Mahdi Tasha
// Importing Part
import React from "react";

// Defining Type Of Props
interface typeofProps {
    name: React.ReactNode;
}

// Creating And Exporting Icon Component As Default
export default function IconComponent({name}:typeofProps):React.ReactNode {
    // Conditional Rendering
    if (name === 'person') {
        return (
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.20361 20.5C5.20361 18 7.20361 16.1 9.60361 16.1H14.7036C17.2036 16.1 19.1036 18.1 19.1036 20.5" stroke="#061962" strokeWidth="1.4824" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.2036 5.7C16.9036 7.4 16.9036 10.1 15.2036 11.7C13.5036 13.3 10.8036 13.4 9.2036 11.7C7.6036 10 7.5036 7.3 9.2036 5.7C10.9036 4.1 13.5036 4.1 15.2036 5.7" stroke="#061962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'chevron-down') {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8596 12.2404L14.2163 8.88374C14.2905 8.81014 14.3494 8.72258 14.3896 8.62611C14.4297 8.52964 14.4504 8.42616 14.4504 8.32165C14.4504 8.21714 14.4297 8.11367 14.3896 8.0172C14.3494 7.92072 14.2905 7.83316 14.2163 7.75957C14.0679 7.61212 13.8673 7.52936 13.6581 7.52936C13.449 7.52936 13.2483 7.61212 13.1 7.75957L10.2975 10.5621L7.49502 7.75957C7.34669 7.61212 7.14604 7.52936 6.93689 7.52936C6.72774 7.52936 6.52709 7.61212 6.37877 7.75957C6.30539 7.83354 6.24734 7.92127 6.20795 8.01773C6.16855 8.11418 6.14858 8.21746 6.14918 8.32165C6.14858 8.42584 6.16855 8.52912 6.20795 8.62558C6.24734 8.72203 6.30539 8.80976 6.37877 8.88374L9.73543 12.2404C9.80903 12.3146 9.89659 12.3735 9.99306 12.4137C10.0895 12.4539 10.193 12.4746 10.2975 12.4746C10.402 12.4746 10.5055 12.4539 10.602 12.4137C10.6984 12.3735 10.786 12.3146 10.8596 12.2404Z" fill="#061962"/>
            </svg>
        );
    } else if (name === 'chevron-left') {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8L10 12L14 16" stroke="#061962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'login') {
        return (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16622 11L13.7515 15.5853" stroke="#0040FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.7515 6.41476L9.16622 11" stroke="#0040FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.16637 11L19.2539 11" stroke="#0040FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.16592 19.2534H7.02615C4.66261 19.2534 2.74658 17.3374 2.74658 14.9739V7.33181C2.74658 4.96827 4.66261 3.05225 7.02615 3.05225H9.16592" stroke="#0040FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'left-arrow') {
        return (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.0509 8.06487L13.0441 8.00981" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.07506 12.0341L3.0425 8.07155L7.03115 4.06484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'calender') {
        return (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0628 2.375V4.75" stroke="#AFB9C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.93783 2.375V4.75" stroke="#AFB9C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.0625 12.6667H5.9375" stroke="#AFB9C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.0625 9.49996H5.9375" stroke="#AFB9C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2.375" y="3.5625" width="14.25" height="13.0625" rx="3" stroke="#AFB9C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        );
    } else if (name === 'check') {
        return (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_101_1541" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.80428 0.547592C10.705 0.556707 11.8968 0.857808 12.937 1.41747C13.9773 1.97713 14.7919 2.795 15.3446 3.8348C15.8974 4.8746 16.1886 6.06254 16.1795 7.9527L16.1738 9.12402C16.1646 11.0142 15.8618 12.1993 15.299 13.2337C14.7362 14.2682 13.9138 15.0782 12.8681 15.6279C11.8225 16.1775 10.6279 16.4672 8.72713 16.4581L7.54923 16.4524C5.64847 16.4433 4.45673 16.1422 3.41647 15.5825C2.37621 15.0229 1.56165 14.205 1.0089 13.1652C0.456158 12.1254 0.164874 10.9375 0.174039 9.0473L0.179719 7.87598C0.188884 5.98582 0.491675 4.80073 1.05448 3.76628C1.61728 2.73183 2.43974 1.92181 3.48538 1.37215C4.53101 0.822489 5.72562 0.53283 7.62638 0.541944L8.80428 0.547592Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_101_1541)">
                    <rect width="19.2" height="19.0929" transform="matrix(0.999988 0.00479498 -0.00484895 0.999988 -1.37629 -1.09235)" fill="#F8D748"/>
                </g>
                <path d="M4.46532 7.78608C4.8267 7.42739 5.39507 7.40005 5.788 7.70388L5.88236 7.78673L7.18229 9.0785L10.4714 5.80856C10.8324 5.44954 11.4008 5.42167 11.794 5.72513L11.8884 5.8079C12.2498 6.16658 12.2779 6.73123 11.9724 7.12188L11.8891 7.2157L7.89114 11.1913C7.52987 11.5506 6.96106 11.5782 6.56786 11.2742L6.47344 11.1913L4.46466 9.19388C4.07354 8.80494 4.07384 8.17465 4.46532 7.78608Z" fill="white"/>
            </svg>

        );
    }
}