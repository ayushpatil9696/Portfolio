import React from "react";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          logo
          {/* <a href='/'>
           <img src={logo} alt=''/>

         </a>  */}
          <button className="btn btn-sm">work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
