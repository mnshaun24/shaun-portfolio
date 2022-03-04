import React from "react";
import Navi from "../Navigation";

function Header(props) {
    const { setCurrentPage, pages } = props;

    return (
        <header>
            <Navi navLinks={pages} setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;