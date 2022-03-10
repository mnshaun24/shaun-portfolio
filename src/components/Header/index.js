import React, { useState } from "react";
import Navi from "../Navigation";
import HamNavi from "../HamburgerNav";

function Header(props) {
    const  [isHamNav, setIsHamNav] = useState(false);
    const { setCurrentPage, pages } = props;

    React.useEffect(() => {
        function handleResize() {
           const pageWidth = window.innerWidth;
           console.log(pageWidth)
            if (pageWidth <= 900) {
               setIsHamNav(true);
            } else {
               setIsHamNav(false);
            }
        
    }
    
        window.addEventListener('resize', handleResize)
      })
    return (
        <header>
            {isHamNav ? <HamNavi navLinks={pages} setCurrentPage={setCurrentPage} /> :  <Navi navLinks={pages} setCurrentPage={setCurrentPage} />}
        </header>
    );
}

export default Header;