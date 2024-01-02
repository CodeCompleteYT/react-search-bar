import React from 'react';
import hero5 from './img/hero5.jpg'
import hero6 from './img/hero6.jpg'
import hero7 from './img/hero7.jpg'
export default function Marketing() {
    return (
        <section id='marketing' className="h-screen px-32 py-12 bg-white">
            <div className='text-center mb-8'>
                <h2 className='text-[33.55px] font-semibold'>Caring is the new marketing</h2>
                <p className='w-[50%] mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='relative'>
                    <img src={hero5} alt="..." width={300} height={300} className=' h-full w-auto object-cover rounded-lg' />
                    <div className='absolute w-[80%] left-[50%] -translate-x-[50%] -bottom-[3rem] p-4 bg-slate-100 rounded-lg '>
                        <p className="text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="#" className='text-Primary text-xl font-semibold justify-center flex items-center gap-8'>
                            <span>Meet all customers</span>
                            <span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={hero6} alt="..." width={300} height={300} className=' w-full h-auto rounded-lg' />
                    <div className='absolute w-[80%] left-[50%] -translate-x-[50%] -bottom-[3rem] p-4 bg-slate-100 rounded-lg '>
                        <p className="text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="#" className='text-Primary text-xl font-semibold justify-center flex items-center gap-8'>
                            <span>Meet all customers</span>
                            <span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className='relative'>
                    <img src={hero7} alt="..." width={300} height={300} className=' w-full h-auto rounded-lg' />
                    <div className='absolute w-[80%] left-[50%] -translate-x-[50%] -bottom-[3rem] p-4 bg-slate-100 rounded-lg '>
                        <p className="text-center">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="#" className='text-Primary text-xl font-semibold justify-center flex items-center gap-8'>
                            <span>Meet all customers</span>
                            <span>
                                <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}