import React from "react";
import logoSmall from "../../Assets/Images/Icons/logo-small.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="h-[64px] w-full border-b-[3px] border-primary-3 flex justify-around align-center bg-neutral-0">
      <div className="w-6/12 h-full flex justify-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/" className="h-[80%]">
            <img className="h-full" src={logoSmall} alt="cherry logo"></img>
          </ Link>
          <p className="text-primary-3 text-[22px] ml-[5px]">Cherry</p>
        </div>
        {/* <button className="text-primary-3 border-2 border-black text-[22px]">About</button> */}
      </div>
    </nav>
  );
};

export default Nav;
