import './Skills.css'
import { FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaChartBar } from 'react-icons/fa'
import { SiOctave } from 'react-icons/si' // Using Octave as generic for R/Stats or similar if R not available, but let's check. RProject is 'FaRProject' but might not be in basic set. 
// Actually let's use text for some if icon missing, or generic code icon.

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming & Technical",
            skills: [
                { name: "Python", icon: <FaPython />, level: "Intermediate" },
                { name: "SQL", icon: <FaDatabase />, level: "Intermediate" },
                { name: "HTML & CSS", icon: <FaHtml5 />, level: "Advanced" },
                { name: "JavaScript", icon: <FaJs />, level: "Basic" },
                { name: "C++", icon: "C++", level: "Basic" }, // No icon
                { name: "Data Structures", icon: <FaChartBar />, level: "Basic" },
            ]
        },
        {
            title: "Tools & Technologies",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "R Language", icon: "R" },
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Communication" },
                { name: "Persuasion" },
                { name: "Adaptability" },
                { name: "Confidence" },
            ]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
