import React from "react";
import mainPic from "../../assets/personal/orange-face-small.jpg";

function Home() {
  return (
    <section className="bg-gray-700 home__page--container">
      <img src={mainPic} alt="My face" className="absolute object-cover max-w-[20%] ml-[60%] lg:mt-[9%] md:mt-[13%] rounded-full" />
      <div className="flex flex-col pt-[10%] pl-[20%] md:pl-[10%] space-y-3">
        <p className="flex text-5xl text-transparent bg-clip-text bg-gradient-to-b from-secondary to-neutral-200">HELLO I'M SHAUN</p>
        <p className="flex text-2xl text-neutral-200">I'm a full-stack web developer.</p>
        <p className="flex max-w-xs text-lg text-transparent bg-clip-text bg-gradient-to-t from-secondary to-neutral-200">
          I'm constantly striving to learn new skills and develop new and more
          refined digital experiences.
        </p>
      </div>
      <div className="flex flex-row pt-[4%] pl-[20%] md:pl-[10%] space-x-6">
      <button className="button"><span class="text">Hire Me</span></button>

        <span>
        <button className="button"><span class="text">Download Resume</span></button>

        </span>
      </div>
    </section>
  );
}

export default Home;

