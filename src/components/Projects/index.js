import React from "react";

function Projects() {
    const myProjects = [
        {
            name: "Beyond the Peak",
            description: "Random drink generator"
          },
          {
            name: "Just Tech It",
            description: "Simple tech blog"
          },
          {
            name: "Memeify",
            description: "Meme generator"
          },
          {
            name: "Biz Notes",
            description: "Note taker in readme format"
          },
          {
            name: "EZ Reader",
            description: "Readme generator for coding projects"
          },
          {
            name: "Make A Date Planner",
            description: "Daily planner used for organization"
          }
    ]

    return ( 
        <section id="projects">
            <h1>{myProjects.name}</h1>
            <p>{myProjects.description}</p>
        </section>
    );
}

export default Projects;