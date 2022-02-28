import React from "react";

function ProjectUse(props) {

    return (        
        <section>
            <div key={props.project.name}>
                <img
                src={require(`../../assets/projects/${props.project.name}`)}
                alt={props.project.name}
                />
            </div>
            <p>{props.project.description}</p>
        </section>
    );
}

export default ProjectUse;