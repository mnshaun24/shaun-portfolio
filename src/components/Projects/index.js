import React from "react";
import Peak from "../ProjectList";

function Projects() {
    const myProjects = [
        {
            image: "../../assets/projects/beyond-the-peak.png",
            name: "beyond-the-peak.png",
            description: "Random drink generator"
          },
          {
            image: "../../assets/projects/just-tech-it.jpg",
            name: "just-tech-it.jpg",
            description: "Simple tech blog"
          },
          {
            image: "../../assets/projects/memeify.png",
            name: "memeify.png",
            description: "Meme generator"
          },
          {
            image: "../../assets/projects/biz-notes.jpg",
            name: "biz-notes.jpg",
            description: "Note taker in readme format"
          },
          {
            image: "../../assets/projects/readme.jpg",
            name: "readme.jpg",
            description: "Readme generator for coding projects"
          },
          {
            image: "../../assets/projects/scheduler.jpg",
            name: "scheduler.jpg",
            description: "Daily planner used for organization"
          },
          {
            image: "../../assets/projects/run-buddy.png",
            name: "run-buddy.png",
            description: "Front-end example"
          }
    ]

    return (
        myProjects.map(eachProject => {
            return (
                <section>
                    <Peak project={eachProject}/>
                </section>
            )
        })
    )
    
}

export default Projects;