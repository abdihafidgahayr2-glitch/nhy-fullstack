import React from 'react';

export const HashLink = ({ to, children, className, onNavigate }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const targetId = to.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        if (onNavigate) {
            onNavigate();
        }
    };

    return (
        <a href={to} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};
