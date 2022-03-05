import React from "react";
import background from "../../assets/personal/orange-face.jpg";

function Home() {
  return (
    <section style={{ backgroundImage: `url(${background})` }} className="bgcover">
      <div className="flex flex-col">
        <h1 className="flex justify-end">HELLO I'M SHAUN</h1>
        <h2 className="flex justify-end">I'm a full-stack web developer.</h2>
        <h3 className="flex justify-end">
          I'm constantly striving to learn new skills and develop new and more
          refined digital experiences.
        </h3>
      </div>
      <div className="flex flex-row justify-center">
        <button>Hire Me</button>
        <span>
          <button>Download Resume</button>
        </span>
      </div>
    </section>
  );
}

export default Home;
