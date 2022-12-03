import React from "react";
import search from "../../Assets/Images/Icons/search.svg";
import logo from "../../Assets/Images/Icons/logo.png";

const Dashboard = () => {
  return (
    <section className="bg-neutral-0 mb-0 flex-grow flex flex-col justify-center items-center">
      <div className="w-6/12 h-fit flex border border-black justify-between items-center">
        <img className="h-[250px] w-[250px]" src={logo} alt="cherry-logo"></img>
        <h1 className="text-[210px] text-primary-3">Cherry</h1>
      </div>
      <div className="h-[48px] border border-neutral-6 w-6/12 flex items-center rounded-full mt-[16px]">
        <form className="flex items-center justify-between px-[16px] w-full h-[80%]">
          <input
            className="bg-transparent flex-grow focus:outline-none h-full"
            type="text"
            placeholder="Search for block height, hash, transaction or address..."
          ></input>
          <button className="h-full" type="submit">
            <img
              className="h-full my-auto"
              src={search}
              alt="search icon"
            ></img>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Dashboard;
