import React from "react";
import mainPic from "../../assets/personal/orange-face-small.jpg";
import resumeFile from "../../assets/resume/shaun-resume.pdf";

function Home() {
  return (
    <section className="bg-gray-700 home__page--container">
      <img
        src={mainPic}
        alt="My face"
        className="absolute object-cover md:max-w-[20%] md:ml-[60%] lg:mt-[9%] md:mt-[13%] mt-[8%] ml-[30%] max-w-[40%] rounded-full"
      />
      <div className="flex flex-col md:pt-[10%] pt-[50%] pl-[20%] md:pl-[10%] space-y-3">
        <p className="flex text-5xl text-transparent bg-clip-text bg-gradient-to-b from-secondary to-neutral-200">
          HELLO I'M SHAUN
        </p>
        <p className="flex text-2xl text-neutral-200">
          I'm a full-stack web developer.
        </p>
        <p className="flex max-w-xs text-lg text-transparent bg-clip-text bg-gradient-to-t from-secondary to-neutral-200">
          I'm constantly striving to learn new skills and develop new and more
          refined digital experiences.
        </p>
      </div>
      <div className="flex flex-col max-w-sm md:flex-row pt-[4%] pl-[12%] sm:pl-[20%] md:pl-[10%] md:space-x-6 space-y-4 md:space-y-0">
        <button className="button" onClick={() => window.location = "mailto:shaun.sticka@outlook.com"}>
          <span className="text">Contact Me</span>
        </button>

        <span>
          <a href={resumeFile} download>
            {" "}
            <button id="download-button" className="button">
              <span className="text">Download Resume</span>
            </button>
          </a>
        </span>
      </div>
    </section>
  );
}

export default Home;
