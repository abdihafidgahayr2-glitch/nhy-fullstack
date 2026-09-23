import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_HOST } from '../config/global_constants';

const fallbackServices = [
    {
        id: 'health-safety',
        title: 'Health & Safety Services',
        items: ['Health & Safety Consultancy', 'Risk Assessments', 'Safety Audits', 'Safety Statements', 'Site Inspections', 'Toolbox Talks', 'Workplace Compliance']
    },
    {
        id: 'environmental',
        title: 'Environmental Services',
        items: ['Environmental Consultancy', 'Environmental Audits', 'Waste Management Advice', 'Climate Change Awareness', 'Sustainability Consultancy', 'Environmental Compliance', 'Community Environmental Projects & Clean-up Campaigns', 'Litter Collection Programmes']
    },
    {
        id: 'facility',
        title: 'Facility Services',
        items: ['Commercial Cleaning', 'Office Cleaning', 'End of Tenancy Cleaning', 'Facilities Support Services', 'Maintenance Coordination', 'Property Condition Reports']
    },
    {
        id: 'property',
        title: 'Property Services',
        items: ['Property Inspections', 'Compliance Audits', 'Report Writing', 'Regulatory Compliance', 'Declarations & Certificates']
    }
];

const servicePhotos = {
    'health-safety': { className: 'nh_photoSafety', icon: <svg viewBox="0 0 64 64" fill="none"><path d="M32 6 52 13v15c0 15-9 23-20 30C21 51 12 43 12 28V13z" stroke="#fff" strokeWidth="2.5" /><path d="M24 32l6 6 12-13" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg> },
    'environmental': { className: 'nh_photoEnvironment', icon: <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="15" stroke="#fff" strokeWidth="2" /><path d="M32 20c4 6 4 18 0 24M23 24c5 4 13 4 18 0M23 40c5-4 13-4 18 0" stroke="#fff" strokeWidth="1.6" /></svg> },
    'facility': { className: 'nh_photoFacility', icon: <svg viewBox="0 0 64 64" fill="none"><rect x="14" y="10" width="10" height="44" rx="1.5" stroke="#fff" strokeWidth="2" /><rect x="26" y="20" width="10" height="34" rx="1.5" stroke="#fff" strokeWidth="2" /><rect x="38" y="26" width="10" height="28" rx="1.5" stroke="#fff" strokeWidth="2" /></svg> },
    'property': { className: 'nh_photoProperty', icon: <svg viewBox="0 0 64 64" fill="none"><path d="M12 30 32 14l20 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 27v22h30V27" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" /><rect x="27" y="37" width="10" height="12" stroke="#fff" strokeWidth="2" /></svg> }
};

const serviceIcons = {
    'health-safety': <svg viewBox="0 0 40 40" fill="none"><path d="M20 5 35 11v11c0 11-6.5 17-15 21C11.5 39 5 33 5 22V11z" stroke="#0c2340" strokeWidth="2" /><path d="M14 20l4.5 4.5L27 15" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'environmental': <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="12" stroke="#4f8a2b" strokeWidth="2" /><path d="M20 8c3 4 3 20 0 24M12 12c4 3 12 3 16 0M12 28c4-3 12-3 16 0" stroke="#4f8a2b" strokeWidth="1.6" /></svg>,
    'facility': <svg viewBox="0 0 40 40" fill="none"><rect x="9" y="6" width="8" height="28" rx="1" stroke="#0c2340" strokeWidth="2" /><rect x="17" y="14" width="8" height="20" rx="1" stroke="#0c2340" strokeWidth="2" /><rect x="25" y="18" width="6" height="16" rx="1" stroke="#0c2340" strokeWidth="2" /></svg>,
    'property': <svg viewBox="0 0 40 40" fill="none"><path d="M6 18 20 7l14 11" stroke="#0c2340" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 16v17h22V16" stroke="#0c2340" strokeWidth="2" strokeLinejoin="round" /></svg>
};

const Services = () => {
    const [services, setServices] = useState(fallbackServices);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get(`${SERVER_HOST}/services`);
                setServices(res.data);
            } catch (err) {
                setServices(fallbackServices);
            }
        };
        fetchServices();
    }, []);

    return (
        <section className="nh_services" id="services">
            <div className="nh_container">
                <h2 className="nh_sectionTitle"><span>Our Services</span></h2>

                <div className="nh_serviceGrid">
                    {services.map(service => (
                        <article className="nh_serviceCard" key={service.id}>
                            <div className={`nh_servicePhoto ${servicePhotos[service.id]?.className || ''}`} aria-hidden="true">
                                {servicePhotos[service.id]?.icon}
                            </div>
                            <div className="nh_serviceIcon">
                                {serviceIcons[service.id]}
                            </div>
                            <h3>{service.title}</h3>
                            <ul>
                                {service.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
