import React from "react";

function ProjectUse(props) {

    return (        
        <section className="container mx-auto ">
            <div key={props.project.name} className="md:max-w-md md:max-h-50 rounded overflow-hidden
                grid grid-cols-2 gap-4">
                <img
                src={require(`../../assets/projects/${props.project.name}`)}
                alt={props.project.name} className="w-full"
                />
            </div>
            {/* <p>{props.project.description}</p> */}
        </section>
    );
}

export default ProjectUse;