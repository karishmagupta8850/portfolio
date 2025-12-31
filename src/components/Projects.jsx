import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: "Practice Project - Python",
            description: "A Python-based project demonstrating core programming concepts and logic building. (Coming Soon)",
            tags: ["Python", "Logic"],
            status: "In Progress"
        },
        {
            title: "SQL Analysis Exercises",
            description: "A collection of SQL queries and database schemas designed to solve sample business problems.",
            tags: ["SQL", "Database"],
            status: "Learning Phase"
        },
        {
            title: "Portfolio Website",
            description: "This personal portfolio website built with React to showcase my journey and skills.",
            tags: ["React", "CSS", "Web"],
            status: "Completed"
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Practice Projects</h2>
                <p className="section-subtitle">
                    Exploring concepts and building skills through practical application.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-status">{project.status}</span>
                                </div>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
