import React, { useState } from "react";

function Peak(props) {

    return (
        <section>
            {props.project.image ? <img alt={props.project.name} src={(props.project.image)}/> : ""}
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
        </section>
    );
}

export default Peak;