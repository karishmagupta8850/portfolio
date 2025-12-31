import { useState, useRef } from 'react'
import './Contact.css'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const validateForm = () => {
        const newErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address"
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // EmailJS Configuration
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Prepare the template parameters object
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            // Prepend email to message so it always shows up, even if template is default
            message: `From: ${formData.email}\n\n${formData.message}`,
            to_name: "Karishma",
            reply_to: formData.email,
            // Also send 'name' because some default templates use {{name}} instead of {{from_name}}
            name: formData.name
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    I'm currently looking for internship opportunities and would love to connect.
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:kashugupta2004@gmail.com">kashugupta2004@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaLinkedin className="info-icon" />
                            <div>
                                <h3>LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/karishma-gupta-b192a4366/" target="_blank" rel="noopener noreferrer">linkedin.com/in/karishma-gupta</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h3>Location</h3>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </div>

                    {submitStatus === 'success' ? (
                        <div className="success-message">
                            <FaCheckCircle style={{ fontSize: '3rem', marginBottom: '1rem' }} />
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            <button
                                className="btn btn-primary"
                                style={{ marginTop: '1.5rem', backgroundColor: 'white', color: '#10b981' }}
                                onClick={() => setSubmitStatus(null)}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form
                            ref={form}
                            className="contact-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="form-group">
                                <label htmlFor="name">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Sneha Sharma"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="error-text">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="sneha@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-text">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-text">{errors.message}</span>}
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact
