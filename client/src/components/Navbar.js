import React, { useState } from 'react';
import { HashLink } from './HashLink';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const closeNav = () => setOpen(false);

    return (
        <header className="nh_header" id="top">
            <div className="nh_container nh_headerInner">
                <a href="#top" className="nh_brand">
                    <span className="nh_brandMark" aria-hidden="true">
                        <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 2 L44 10 V26 C44 40 35 49 24 54 C13 49 4 40 4 26 V10 Z" fill="#0c2340" />
                            <path d="M24 6 L40 12.5 V26 C40 38 32.5 45.5 24 50 C15.5 45.5 8 38 8 26 V12.5 Z" fill="#ffffff" />
                            <path d="M24 12c-6 3-6 10-6 10s7 1 10-3c2.6-3.3 1.6-8.6 1.6-8.6S27 9.6 24 12z" fill="#4f8a2b" />
                            <path d="M20 34 L24 18 L28 34" stroke="#0c2340" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M21.3 28.5h5.4" stroke="#0c2340" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className="nh_brandText">
                        <span className="nh_brandName">NHY</span>
                        <span className="nh_brandTagline">Safety, Environmental &amp; Facilities Services</span>
                    </span>
                </a>

                <nav className={`nh_mainNav ${open ? 'nh_open' : ''}`} aria-label="Primary">
                    <ul>
                        <li><HashLink to="#services" onNavigate={closeNav}>Services</HashLink></li>
                        <li><HashLink to="#community" onNavigate={closeNav}>Community</HashLink></li>
                        <li><HashLink to="#textiles" onNavigate={closeNav}>Textiles</HashLink></li>
                        <li><HashLink to="#coming-soon" onNavigate={closeNav}>Coming Soon</HashLink></li>
                        <li><HashLink to="#contact" onNavigate={closeNav}>Contact</HashLink></li>
                    </ul>
                </nav>

                <div className="nh_headerActions">
                    <a href="tel:0892753540" className="nh_headerPhone">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1.1L6.6 10.8z" fill="#0c2340" /></svg>
                        <span>089 275 3540</span>
                    </a>
                    <HashLink to="#contact" className="nh_btn nh_btnPrimary">Get a Quote</HashLink>
                    <button
                        className={`nh_navToggle ${open ? 'nh_open' : ''}`}
                        aria-expanded={open}
                        aria-controls="nh_mainNav"
                        aria-label="Toggle menu"
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
