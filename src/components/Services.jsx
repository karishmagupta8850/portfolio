import './Services.css'
import { FaChartLine, FaLightbulb, FaCode } from 'react-icons/fa'

const Services = () => {
    const services = [
        {
            title: "Data Analysis Support",
            description: "Processing and analyzing data to uncover trends and patterns.",
            icon: <FaChartLine />
        },
        {
            title: "Business Insights",
            description: "Helping businesses understand data to support decision-making.",
            icon: <FaLightbulb />
        },
        {
            title: "Web Solutions",
            description: "Creating modern, responsive websites and tools.",
            icon: <FaCode />
        }
    ]

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Future Services</h2>
                <p className="section-subtitle">What I am working towards offering as I grow.</p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
