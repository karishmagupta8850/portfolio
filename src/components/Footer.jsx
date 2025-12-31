import './Footer.css'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    &copy; {currentYear} Karishma Gupta. All rights reserved.
                </p>
                <p className="footer-credit">
                    Made with <FaHeart className="heart-icon" /> and React
                </p>
            </div>
        </footer>
    )
}

export default Footer
