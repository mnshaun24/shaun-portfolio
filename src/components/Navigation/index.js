import React from "react";

function Navi({ navLinks, setCurrentPage }) {

  return (
        <div className="text-secondary bg-primary md:pr-5 md:text-4xl md:space-x-4 h-12 md:h-20 md:flex md:flex-wrap md:shrink-0 md:justify-end
          md:font-normal md:content-center flex justify-between">
          {navLinks.map((link) => {
            return (
                <span className="md:hover:font-semibold pr-5 cursor-pointer" key={link} onClick={() => setCurrentPage(link)}>{link}</span>
            );
          })}
        </div>
  );
}

export default Navi;
