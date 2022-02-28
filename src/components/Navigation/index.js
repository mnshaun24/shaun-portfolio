import React from "react";

function Navi({ navLinks, setCurrentPage }) {

  return (
    <container>
        <div>
          {navLinks.map((link) => {
            return (
                <span eventKey={link} onClick={() => setCurrentPage(link)}>{link}</span>
            );
          })}
        </div>
    </container>
  );
}

export default Navi;
