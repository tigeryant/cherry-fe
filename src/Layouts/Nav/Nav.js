import React from "react";
import logoSmall from "../../Assets/Images/Icons/logo-small.png";

const Nav = () => {
  return (
    <nav className="h-[64px] w-full border-b-[3px] border-primary-3 flex justify-around align-center bg-neutral-0">
      <div className="w-6/12 h-full flex justify-between">
        <div className="border-2 border-black flex items-center">
          <img className="h-[80%]" src={logoSmall} alt="cherry logo"></img>
          <p>Cherry</p>
        </div>
        <button className="border-2 border-black">About</button>
      </div>
    </nav>
  );
};

export default Nav;
