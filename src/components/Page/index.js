import React, { useState } from "react";
import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import Contact from "../Contact";

function Page(props) {
    

    const renderedPage = () => {
        switch(props.currentPage) {
            case "About":
              return <About />
            case "Projects":
              return <Projects />
            case "Resume":
                return <Resume />
            case "Contact":
                return <Contact />
            default:
              return <About />
          }

    }

    return (
        <section>
            {renderedPage()}
        </section>
    );
}

export default Page;