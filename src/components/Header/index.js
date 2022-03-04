import React from "react";
import Navi from "../Navigation";

function Header(props) {
    const { setCurrentPage, pages } = props;

    return (
        <header className="text-secondary bg-primary justify-end h-20">
            <Navi navLinks={pages} setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;