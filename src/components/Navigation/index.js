import React from "react";

function Navi({ navLinks, setCurrentPage }) {

  return (
    <container>
        <div className="text-secondary bg-primary md:pr-5 md:text-4xl md:space-x-9 h-12 md:h-20 md:flex md:flex-wrap md:shrink-0 md:justify-end
          md:font-normal md:content-center container flex justify-between px-4 py-8 mx-auto">
          {navLinks.map((link) => {
            return (
                <span className="md:hover:font-semibold" eventKey={link} onClick={() => setCurrentPage(link)}>{link}</span>
            );
          })}
        </div>
    </container>
  );
}

export default Navi;
