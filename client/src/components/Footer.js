import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="nh_footer">
            <div className="nh_container nh_footerInner">
                <a href="#top" className="nh_brand">
                    <span className="nh_brandMark" aria-hidden="true">
                        <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 2 L44 10 V26 C44 40 35 49 24 54 C13 49 4 40 4 26 V10 Z" fill="#ffffff" />
                            <path d="M24 6 L40 12.5 V26 C40 38 32.5 45.5 24 50 C15.5 45.5 8 38 8 26 V12.5 Z" fill="#0c2340" />
                            <path d="M24 12c-6 3-6 10-6 10s7 1 10-3c2.6-3.3 1.6-8.6 1.6-8.6S27 9.6 24 12z" fill="#6ba83f" />
                        </svg>
                    </span>
                    <span className="nh_brandText">
                        <span className="nh_brandName nh_light">NHY</span>
                        <span className="nh_brandTagline nh_light">Safety, Environmental &amp; Facilities Services</span>
                    </span>
                </a>
                <p className="nh_footerTag">Protecting people, property, construction sites &amp; the environment.</p>
                <nav className="nh_footerNav" aria-label="Footer">
                    <a href="#services">Services</a>
                    <a href="#community">Community</a>
                    <a href="#coming-soon">Coming Soon</a>
                    <a href="#contact">Contact</a>
                </nav>
                <p className="nh_footerCopy">&copy; {year} NHY Safety, Environmental &amp; Facilities Services. County Louth, Ireland.</p>
            </div>
        </footer>
    );
};

export default Footer;
