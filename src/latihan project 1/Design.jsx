import React from 'react';
import hero3 from './img/hero3.png';
export default function Design() {
    return (
        <section id='design' className="h-screen flex items-center justify-between px-32">
            <img src={hero3} alt="hero 2" width={300} height={300} className='w-[310.16px] h-auto' />
            <div className='w-[60%]'>
                <h2 className="text-[44.55px] font-semibold">How to design your site footer like we did</h2>
                <p className='text-[11.14px text-Gray] mb-12'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button type="button" class="text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>

            </div>
        </section>
    )
}