import React from "react";

function ProjectUse(props) {

<<<<<<< HEAD
    return (        
        <section>
            <div key={props.project.name}>
                <img
                src={require(`../../assets/projects/${props.project.name}`)}
                className="project-bg" alt={props.project.name}
                />
            </div>
            <p>{props.project.description}</p>
        </section>
    );
}

export default Peak;
=======
    return (
        <div key={props.project.name}>
                <img
                src={require(`../../assets/projects/${props.project.name}`)}
                alt={props.project.name}
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
>>>>>>> framework/tailwind
