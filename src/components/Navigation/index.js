import React, {useState } from "react";

function Nav({ navLinks }) {

  return (
    <nav>
      <ul className="flex-row">
        {navLinks.map((link) => {
          return (
            <li className="header-words">
              <a href={`#${link.split(" ")[0].toLowerCase()}`}>{link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
