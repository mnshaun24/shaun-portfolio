import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section>
            <h1>About Shaun</h1>
            <img src={coverImage} alt="cover" />
        </section>
    );
}

export default About;