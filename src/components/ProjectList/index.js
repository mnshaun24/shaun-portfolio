import React from "react";

function Peak(props) {

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