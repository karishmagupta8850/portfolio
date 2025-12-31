import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-card">
                        <h3>Education</h3>
                        <div className="education-item">
                            <span className="year">2021 - Present</span>
                            <h4>BSc in Information Technology</h4>
                            <p className="institution">Ghanshyam Das Saraf College</p>
                            <p className="status">Currently in Third Year</p>
                        </div>
                    </div>

                    <div className="about-text">
                        <p>
                            I am a curious and analytical motivated student with a strong interest in understanding how businesses use data to drive decisions.
                            While my background is in Information Technology, I am passionate about bridging the gap between technical data analysis and strategic business application.
                        </p>
                        <p>
                            My journey has been defined by a learning mindset and a willingness to grow.
                            I am eager to apply my technical skills to real-world challenges and am actively looking for internships and entry-level opportunities
                            where I can contribute and learn from experienced professionals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
