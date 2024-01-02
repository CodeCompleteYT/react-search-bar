import React from "react"
import hero_1 from './img/hero1.png';
export default function () {
    return (
        <section id="dashboard" className="h-screen w-screen px-32 flex justify-between items-center">
            <div className="">
                <h2 className="text-5xl font-semibold">Lessons and insights
                    <div className="text-Primary">from 8 years</div>
                </h2>
                <p className="text-[11.14px] text-Gray mb-12">Where to grow your business as a photographer: site or social media?</p>
                <button type="button" className="text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
            <img src={hero_1} alt="..." width={300} height={300} className="w-[310.16px] h-auto" />
        </section>
    )
}