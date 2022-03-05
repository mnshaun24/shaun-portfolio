import React from "react";
import ProjectUse from "../ProjectList";

function Projects() {
    const myProjects = [
        {
            image: "../../assets/projects/beyond-the-peak.jpg",
            name: "beyond-the-peak.jpg",
            description: "Random drink generator"
          },
          {
            image: "../../assets/projects/just-tech-it.jpg",
            name: "just-tech-it.jpg",
            description: "Simple tech blog"
          },
          {
            image: "../../assets/projects/weather-for-you.jpg",
            name: "weather-for-you.jpg",
            description: "Weather forecast app"
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
            image: "../../assets/projects/run-buddy.jpg",
            name: "run-buddy.jpg",
            description: "Front-end example"
          }
    ]

      // return (
      //   <div className="container mx-auto grid grid-cols-2 space-y-4 space-x-3">
      //     <img src={require(`../../assets/projects/${myProjects[0].name}`)} alt="testing" key={myProjects[0].name} 
      //       className="rounded w-3/5 space-y-4 space-x-3" />
      //     <img src={require(`../../assets/projects/${myProjects[1].name}`)} alt="testing" key={myProjects[1].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[2].name}`)} alt="testing" key={myProjects[2].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[3].name}`)} alt="testing" key={myProjects[3].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[4].name}`)} alt="testing" key={myProjects[4].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[5].name}`)} alt="testing" key={myProjects[5].name}
      //       className="rounded w-3/5" />
      //     <img src={require(`../../assets/projects/${myProjects[6].name}`)} alt="testing" key={myProjects[6].name}
      //       className="rounded w-3/5" />
      //   </div>
      // )

    return (
                <section className="grid grid-cols-2 w-full rounded space-y-5 space-x-4">
                  {myProjects.map(eachProject => {
                    return <ProjectUse project={eachProject} />
                  })}                 
                </section>
    )
    
}

export default Projects;