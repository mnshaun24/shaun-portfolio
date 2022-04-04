import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ProjectUse(props) {
  return (
    <div
      key={props.project.name}
      className="project__image--container container my-4 max-w-md lg:ml-10"
    >
      <a
        href={props.project.liveLink}
        target="_blank"
        rel="noreferrer"
        className="project__image--overlay"
      >
        <h1>{props.project.description}</h1>
        <br />
        <h2>{props.project.depth}</h2>
        <br />
        <a href={props.project.gitLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            className="fa-2xl transition linear delay-100 hover:scale-125 hover:animate-spin 1s pl-[5%]"
            icon={faGithub}
          ></FontAwesomeIcon>
        </a>
      </a>

      <img
        src={require(`../../assets/projects/${props.project.name}`)}
        alt={props.project.name}
        className="project__image rounded-lg"
      />
    </div>
  );
}

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
