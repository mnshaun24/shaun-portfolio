import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";

function HamNavi({ navLinks, setCurrentPage }) {
  return (
    <div id="outer-container" className="bg-primary h-32">
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container"}>
      <div id="page-wrap">
      
        {navLinks.map((link) => {
          return (
            <div
              key={link}
              onClick={() => setCurrentPage(link)}
            >
              {link}
            </div>
          );
        })}
      </div>
    </Menu>
    </div>
  );
}

export default HamNavi;
