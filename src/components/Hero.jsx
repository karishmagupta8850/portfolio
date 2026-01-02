import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import './Hero.css'

import profileImage from '../assets/karishma_profile_v2.png'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Karishma Gupta</h1>
                    <h2 className="hero-role">Aspiring Business Analyst</h2>
                    <p className="hero-description">
                        A curious and motivated BSc IT student exploring how data helps businesses make better decisions.
                        Actively building projects with Python and SQL.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Portfolio <BsArrowRight className="icon-right" />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/karishma-gupta-b192a4366/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/karishmagupta8850" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="mailto:kashugupta2004@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-placeholder">
                        <img src={profileImage} alt="Karishma Gupta" className="profile-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
