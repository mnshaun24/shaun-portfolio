import React from "react";
import photo from "../../assets/projects/beyond-the-peak.png";

function Projects(props) {
    const myProjects = {
        name: "Beyond the Peak",
        description:
            "Full-Stack"
    };
    return ( 
        <section id="projects">
            <h1>{myProjects.name}</h1>
            <p>{myProjects.name}</p>
            <div>
                <img 
                    src={photo} 
                    alt="drink generator project"
                    className="img-display mx-1"
                    />
            </div>
        </section>
    );
}

export default Projects;