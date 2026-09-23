import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_HOST } from '../config/global_constants';

const initialForm = { name: '', email: '', service: 'Health & Safety', message: '' };

const ContactForm = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ text: '', type: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const nextErrors = {};
        if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Please enter a valid email address.';
        if (!form.message.trim()) nextErrors.message = 'Let us know a little about what you need.';
        return nextErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            setStatus({ text: 'Please fix the fields highlighted above.', type: '' });
            return;
        }

        setSubmitting(true);
        try {
            await axios.post(`${SERVER_HOST}/contact`, form);
            setStatus({ text: `Thanks, ${form.name.split(' ')[0]}! We'll be in touch shortly.`, type: 'nh_success' });
            setForm(initialForm);
        } catch (err) {
            setStatus({ text: 'Something went wrong sending your message. Please call us instead.', type: 'nh_fail' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="nh_contact" id="contact">
            <div className="nh_container nh_contactGrid">
                <div className="nh_contactInfo">
                    <p className="nh_eyebrow nh_eyebrowLight">Get in touch</p>
                    <h2>Let's protect what matters to you</h2>
                    <p>Tell us about your site, property or programme and we'll get back to you with next steps.</p>
                    <ul className="nh_contactList">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1.1L6.6 10.8z" fill="#fff" /></svg>
                            <a href="tel:0892753540">089 275 3540</a>
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="1.8" /><path d="M4 7l8 6 8-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <a href="mailto:info@nhyservices.ie">info@nhyservices.ie</a>
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" stroke="#fff" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.4" stroke="#fff" strokeWidth="1.8" /></svg>
                            <span>County Louth, Ireland</span>
                        </li>
                    </ul>
                </div>

                <form className="nh_contactForm" onSubmit={handleSubmit} noValidate>
                    <div className={`nh_formRow ${errors.name ? 'nh_hasError' : ''}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
                        <span className="nh_formError">{errors.name}</span>
                    </div>
                    <div className={`nh_formRow ${errors.email ? 'nh_hasError' : ''}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
                        <span className="nh_formError">{errors.email}</span>
                    </div>
                    <div className="nh_formRow">
                        <label htmlFor="service">Service you need</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange}>
                            <option value="Health & Safety">Health &amp; Safety Services</option>
                            <option value="Environmental">Environmental Services</option>
                            <option value="Facility">Facility Services</option>
                            <option value="Property">Property Services</option>
                            <option value="Textile Collection">Textile Collection</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={`nh_formRow ${errors.message ? 'nh_hasError' : ''}`}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange}></textarea>
                        <span className="nh_formError">{errors.message}</span>
                    </div>
                    <button type="submit" className="nh_btn nh_btnPrimary nh_btnBlock" disabled={submitting}>
                        {submitting ? 'Sending...' : 'Send message'}
                    </button>
                    <p className={`nh_formStatus ${status.type}`} role="status" aria-live="polite">{status.text}</p>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;