import React, {useState } from "react";

function Nav({ navLinks }) {
  const [currentProject, setCurrentProject] = useState(projectSelection[0]);
  const [projectSelection] = useState([
    {
      name: "Beyond the Peak",
      description: "Random drink generator"
    },
    {
      name: "Just Tech It",
      description: "Simple tech blog"
    },
    {
      name: "Memeify",
      description: "Meme generator"
    },
    {
      name: "Biz Notes",
      description: "Note taker in readme format"
    },
    {
      name: "EZ Reader",
      description: "Readme generator for coding projects"
    },
    {
      name: "Make A Date Planner",
      description: "Daily planner used for organization"
    }
  ])

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
