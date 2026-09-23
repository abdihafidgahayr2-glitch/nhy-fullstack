import React from 'react';

const comingSoonItems = [
    {
        title: 'Safe Pass Training',
        text: 'Workplace safety training programmes',
        icon: <svg viewBox="0 0 40 40" fill="none"><path d="M20 5 33 10v10c0 9.5-5.5 15-13 18-7.5-3-13-8.5-13-18V10z" stroke="#fff" strokeWidth="2" /><path d="M14 20l4 4 8-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    },
    {
        title: 'BER Assessments',
        text: 'Building Energy Rating assessments',
        icon: <svg viewBox="0 0 40 40" fill="none"><path d="M6 18 20 7l14 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 16v17h22V16" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><path d="M17 20a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" stroke="#fff" strokeWidth="2" /></svg>
    },
    {
        title: 'CPTED Services',
        text: 'Crime Prevention Through Environmental Design',
        icon: <svg viewBox="0 0 40 40" fill="none"><rect x="11" y="18" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2" /><path d="M15 18v-4a5 5 0 0 1 10 0v4" stroke="#fff" strokeWidth="2" /></svg>
    },
    {
        title: 'Specialised Training',
        text: 'Environmental & Safety training for teams',
        icon: <svg viewBox="0 0 40 40" fill="none"><rect x="6" y="9" width="28" height="18" rx="1.5" stroke="#fff" strokeWidth="2" /><path d="M16 33h8M20 27v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><path d="M11 22l4-5 4 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    }
];

const ComingSoon = () => {
    return (
        <section className="nh_comingSoon" id="coming-soon">
            <div className="nh_container">
                <h2 className="nh_comingSoonTitle">Coming Soon</h2>
                <div className="nh_comingSoonGrid">
                    {comingSoonItems.map(item => (
                        <div className="nh_csItem" key={item.title}>
                            {item.icon}
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
