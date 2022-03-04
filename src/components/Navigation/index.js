import React from "react";

function Navi({ navLinks, setCurrentPage }) {

  return (
    <container>
        <div className="space-x-4">
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
