import React from 'react';
import Hero from './Hero';
import Services from './Services';
import CommunityAndTextiles from './CommunityAndTextiles';
import PlanetStrip from './PlanetStrip';
import ComingSoon from './ComingSoon';
import WhyUs from './WhyUs';
import ContactForm from './ContactForm';

const Homepage = () => {
    return (
        <main>
            <Hero />
            <Services />
            <CommunityAndTextiles />
            <PlanetStrip />
            <ComingSoon />
            <WhyUs />
            <ContactForm />
        </main>
    );
};

export default Homepage;
