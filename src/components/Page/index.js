import React from "react";
import About from "../About";
import Projects from "../Projects";
import Skills from "../Skills";
import Home from "../Home";

function Page(props) {
    

    const renderedPage = () => {
        switch(props.currentPage) {
            case "Home":
                return <Home />
            case "About":
              return <About />
            case "Projects":
              return <Projects />
            case "Skills":
                return <Skills />
            default:
              return <Home />
          }

    }

    return (
        <section>
            {renderedPage()}
        </section>
    );
}

export default Page;