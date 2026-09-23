import React from 'react';
import { HashLink } from './HashLink';

const Hero = () => {
    return (
        <section className="nh_hero">
            <div className="nh_container nh_heroTop">
                <p className="nh_eyebrow">NHY Safety, Environmental &amp; Facilities Services</p>
                <h1>Protecting people, property, construction sites <span>&amp; the environment</span></h1>

                <ul className="nh_pillars">
                    <li>
                        <span className="nh_pillarIcon">
                            <svg viewBox="0 0 40 40" fill="none"><circle cx="15" cy="14" r="5" stroke="#0c2340" strokeWidth="2" /><circle cx="27" cy="16" r="4" stroke="#0c2340" strokeWidth="2" /><path d="M6 32c0-5.5 4-9 9-9s9 3.5 9 9" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" /><path d="M23 24c4 .3 7 3.3 7 8" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" /></svg>
                        </span>
                        <strong>People</strong>
                        <span>Safe workplaces, healthy communities</span>
                    </li>
                    <li>
                        <span className="nh_pillarIcon">
                            <svg viewBox="0 0 40 40" fill="none"><path d="M8 19 20 9l12 10" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 17v13h18V17" stroke="#0c2340" strokeWidth="2" strokeLinejoin="round" /><path d="M17 30v-7h6v7" stroke="#0c2340" strokeWidth="2" strokeLinejoin="round" /></svg>
                        </span>
                        <strong>Property</strong>
                        <span>Well maintained, safe &amp; compliant</span>
                    </li>
                    <li>
                        <span className="nh_pillarIcon">
                            <svg viewBox="0 0 40 40" fill="none"><path d="M9 32V13" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" /><path d="M9 13l19 6" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" /><path d="M20.5 17.5 26 32" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" /><path d="M9 10v0a2.5 2.5 0 0 1 5 0v3H9v-3z" stroke="#0c2340" strokeWidth="2" /><path d="M23 32h9" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" /></svg>
                        </span>
                        <strong>Construction Sites</strong>
                        <span>Safe, compliant &amp; efficient</span>
                    </li>
                    <li>
                        <span className="nh_pillarIcon" style={{ '--nh-ring': '#4f8a2b' }}>
                            <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="12" stroke="#4f8a2b" strokeWidth="2" /><path d="M20 8c3 4 3 20 0 24M12 12c4 3 12 3 16 0M12 28c4-3 12-3 16 0" stroke="#4f8a2b" strokeWidth="1.6" /></svg>
                        </span>
                        <strong>Environment</strong>
                        <span>Sustainable solutions for a better future</span>
                    </li>
                </ul>
            </div>

            <div className="nh_heroBanner">
                <div className="nh_heroBannerMedia" role="img" aria-label="Wind turbines on green hills beside a construction site under a crane">
                    <div className="nh_mediaTurbines"></div>
                    <div className="nh_mediaConstruction"></div>
                </div>
                <div className="nh_heroBannerPanel">
                    <p className="nh_eyebrow nh_eyebrowLight">Professional solutions for</p>
                    <h2>A safer, cleaner &amp; more sustainable future</h2>
                    <p>NHY Safety, Environmental &amp; Facilities Services provides expert consultancy and practical solutions for businesses, communities and the environment.</p>
                    <HashLink to="#contact" className="nh_btn nh_btnOutlineLight">Talk to our team</HashLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;
