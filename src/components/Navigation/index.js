import React, {useState } from "react";

function Nav({ navLinks, setCurrentPage }) {

  return (
    <nav>
      <ul className="flex-row">
        {navLinks.map((link) => {
          return (
            <li className="header-words">
              <span onClick={() => setCurrentPage(link)}>{link}</span>
              {/* <a href={`#${link.split(" ")[0].toLowerCase()}`}>{link}</a> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
