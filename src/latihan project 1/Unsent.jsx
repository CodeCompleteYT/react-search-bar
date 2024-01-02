import React from 'react';
import hero2 from './img/hero2.png';
export default function Unsent() {
    return (
        <section id='unsent' className="h-screen flex items-center justify-between px-32">
            <img src={hero2} alt="hero 2" width={300} height={300} className='w-[310.16px] h-auto' />
            <div className='w-[60%]'>
                <h2 className="text-[44.55px] font-semibold">The unseen of spending three years at Pixelgrade</h2>
                <p className='text-[11.14px text-Gray] mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button type="button" class="text-white bg-Primary hover:bg-Primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>

            </div>
        </section>
    )
}