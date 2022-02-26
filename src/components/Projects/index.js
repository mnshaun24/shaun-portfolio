import React from "react";
import Peak from "../Peak";

function Projects() {
    const myProjects = [
        {
            image: "../../assets/projects/beyond-the-peak.png",
            name: "Beyond the Peak",
            description: "Random drink generator"
          },
          {
            image: "../../assets/projects/just-tech-it.jpg",
            name: "Just Tech It",
            description: "Simple tech blog"
          },
          {
            image: "../../assets/projects/memeify.png",
            name: "Memeify",
            description: "Meme generator"
          },
          {
            image: "../../assets/projects/biz-notes.jpg",
            name: "Biz Notes",
            description: "Note taker in readme format"
          },
          {
            image: "../../assets/projects/readme.jpg",
            name: "EZ Reader",
            description: "Readme generator for coding projects"
          },
          {
            image: "../../assets/projects/scheduler.jpg",
            name: "Make A Date Planner",
            description: "Daily planner used for organization"
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