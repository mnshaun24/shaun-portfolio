import React from "react";

function Navi({ navLinks, setCurrentPage }) {

  return (
        <div>
          {navLinks.map((link) => {
            return (
              <div>
                <span eventKey={link} onClick={() => setCurrentPage(link)}>{link}</span>
              </div>
            );
          })}
        </div>
  );
}

export default Navi;
