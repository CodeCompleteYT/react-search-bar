import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import "./FlashSale.css";
import Marquee from "react-fast-marquee";
import logo_makkode from '../../utils/img/Logo Makkode 2.png'
import react from '../../utils/img/react.jpg'
export default function FlashSale() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <div>
            <div className='relative'>
                <Carousel responsive={responsive} infinite={true} autoPlay={true} showDots={true} rtl={false} autoPlaySpeed={1000} containerClass='carousel-container' itemClass="carousel-items" renderDotsOutside={true} dotListClass='react-multi-carousel-dot-list' centerMode={false} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <div>
                        <div className='flex items-center justify-center w-full h-[10rem] bg-cyan-400 rounded-lg'>Items 1</div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center w-full h-[10rem] bg-cyan-400 rounded-lg'>Items 2</div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center w-full h-[10rem] bg-cyan-400 rounded-lg'>Items 3</div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center w-full h-[10rem] bg-cyan-400 rounded-lg'>Items 4</div>
                    </div>
                </Carousel >
            </div>


            <Marquee speed={90} delay={3} pauseOnHover={true} gradient={true} direction='right' className='border-2'>
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
                <p>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div >
    )
}