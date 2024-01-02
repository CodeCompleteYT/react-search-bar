import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import OurClient from './OurClient';
import Unsent from './Unsent';
import Helping from './Helping';
import Design from './Design';
import TeamSmith from './TeamSmith';
import Marketing from './Marketing';
export default function () {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
    })
    return (
        <>
            <Navbar />
            <LandingPage />
            <OurClient />
            <Unsent />
            <Helping />
            <Design />
            <TeamSmith />
            <Marketing />
        </>
    )
}