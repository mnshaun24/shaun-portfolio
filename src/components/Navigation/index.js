import React from "react";
import Nav from 'react-bootstrap/Nav';

function Navi({ navLinks, setCurrentPage }) {

  return (
    <container>
        <div id="header" className="nav justify-content-end">
          {navLinks.map((link) => {
            return (
              <Nav.Item>
                <Nav.Link eventKey={link} onClick={() => setCurrentPage(link)}>{link}</Nav.Link>
              </Nav.Item>
            );
          })}
        </div>
    </container>
  );
}

export default Navi;
