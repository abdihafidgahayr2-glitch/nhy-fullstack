import React from 'react';

const PlanetStrip = () => {
    return (
        <section className="nh_planetStrip">
            <div className="nh_container nh_planetInner">
                <div className="nh_planetIcon" aria-hidden="true">
                    <svg viewBox="0 0 40 40" fill="none"><path d="M20 5c8.3 0 15 6.7 15 15S28.3 35 20 35 5 28.3 5 20 11.7 5 20 5z" stroke="#4f8a2b" strokeWidth="2" /><path d="M9 12l4 3 3-2 3 3-2 4 4 2v4l-4 2-1 4-4-1-2 3-4-2 1-4-3-3 2-4-3-2z" stroke="#4f8a2b" strokeWidth="1.4" strokeLinejoin="round" /></svg>
                </div>
                <div>
                    <h2>Together for a cleaner planet</h2>
                    <p>We are committed to reducing waste, protecting our environment and building a sustainable future for generations to come.</p>
                </div>
            </div>
        </section>
    );
};

export default PlanetStrip;
