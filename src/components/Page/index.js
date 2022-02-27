import React from "react";
import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import Contact from "../Contact";
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
            case "Resume":
                return <Resume />
            case "Contact":
                return <Contact />
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