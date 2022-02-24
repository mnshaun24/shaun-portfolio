import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
    return (
        <section className="shaun-1">
            <h1 id="about">About Shaun</h1>
            <img src={coverImage} style={{ width: "100%"  }} alt="cover" />
        </section>
    );
}

export default About;