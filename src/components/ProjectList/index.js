import React from "react";

function ProjectUse(props) {

    return (
        <div key={props.project.name} className="project__image--container">
            <a href="https://www.google.com" className="project__image--overlay">
                <h5>
                    We are awesome
                </h5>
                </a>

                <img
                src={require(`../../assets/projects/${props.project.name}`)}
                alt={props.project.name} className="project__image"
                />
            </div>
    )}





//     // return (        
//     //     <section className="container mx-auto flex justify-around flex-wrap space-y-3">
//     //         <div key={props.project.name} className="md:max-w-md md:max-h-50 rounded overflow-hidden
//     //             ">
//     //             <img
//     //             src={require(`../../assets/projects/${props.project.name}`)}
//     //             alt={props.project.name} className="w-full"
//     //             />
//     //         </div>
//     //         <p>{props.project.description}</p>
//     //     </section>
//     // );
// }

export default ProjectUse;
