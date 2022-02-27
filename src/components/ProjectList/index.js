import React from "react";
import Card from "react-bootstrap/Card";

function Peak(props) {

    return (
        <Card style={{ width: "25rem" }} className="project-card bg-dark text-white">
            <Card.Img src={require(`../../assets/projects/${props.project.name}`)}
                alt={props.project.name}
                />
            <Card.ImgOverlay>
                <Card.Title>{props.project.name}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
            </Card.ImgOverlay>
        </Card>
        
        // <section>
        //     <div key={props.project.name}>
        //         <img
        //         src={require(`../../assets/projects/${props.project.name}`)}
        //         className="project-bg" alt={props.project.name}
        //         />
        //     </div>
        //     <p>{props.project.description}</p>
        // </section>
    );
}

export default Peak;