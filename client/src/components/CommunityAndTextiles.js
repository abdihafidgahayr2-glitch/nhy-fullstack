import React from 'react';

const CommunityAndTextiles = () => {
    return (
        <section className="nh_splitSection">
            <div className="nh_container nh_splitGrid">

                <article className="nh_featureCard" id="community">
                    <div className="nh_featurePhoto" aria-hidden="true">
                        <svg viewBox="0 0 64 64" fill="none"><circle cx="24" cy="16" r="5" stroke="#fff" strokeWidth="2" /><circle cx="42" cy="18" r="4" stroke="#fff" strokeWidth="2" /><path d="M12 44c0-7 5.5-12 12-12s12 5 12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><path d="M36 32c5 .5 9 4.5 9 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                    <div className="nh_featureBody">
                        <div className="nh_featureIcon">
                            <svg viewBox="0 0 40 40" fill="none"><circle cx="15" cy="14" r="5" stroke="#4f8a2b" strokeWidth="2" /><circle cx="27" cy="16" r="4" stroke="#4f8a2b" strokeWidth="2" /><path d="M6 32c0-5.5 4-9 9-9s9 3.5 9 9" stroke="#4f8a2b" strokeWidth="2" strokeLinecap="round" /><path d="M23 24c4 .3 7 3.3 7 8" stroke="#4f8a2b" strokeWidth="2" strokeLinecap="round" /></svg>
                        </div>
                        <h3>Community &amp; Education</h3>
                        <ul>
                            <li>Environmental Awareness Training</li>
                            <li>School Environmental Education</li>
                            <li>Community Clean-up Events</li>
                            <li>Recycling Awareness Campaigns</li>
                            <li>Sustainability Education</li>
                        </ul>
                    </div>
                </article>

                <article className="nh_featureCard" id="textiles">
                    <div className="nh_featurePhoto nh_photoTextiles" aria-hidden="true">
                        <svg viewBox="0 0 64 64" fill="none"><path d="M22 12l-8 6v6l6-2v26h24V22l6 2v-6l-8-6c0 4-4.5 6-10 6s-10-2-10-6z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></svg>
                    </div>
                    <div className="nh_featureBody">
                        <div className="nh_featureIcon">
                            <svg viewBox="0 0 40 40" fill="none"><path d="M14 7l-5 3.8v4l3.5-1.2V32h15V13.6L31 14.8v-4L26 7c0 2.5-2.7 3.8-6 3.8S14 9.5 14 7z" stroke="#4f8a2b" strokeWidth="2" strokeLinejoin="round" /></svg>
                        </div>
                        <h3>Textile Collection &amp; Reuse Programmes</h3>
                        <p className="nh_featureLead">We collect second-hand clothes to save the environment.</p>
                        <ul>
                            <li>Reuse &amp; Recycle</li>
                            <li>Support Local Charities</li>
                            <li>Donate to Third World Countries</li>
                            <li>Trade through Ethical Cargo Shipments</li>
                        </ul>
                    </div>
                </article>

            </div>
        </section>
    );
};

export default CommunityAndTextiles;
