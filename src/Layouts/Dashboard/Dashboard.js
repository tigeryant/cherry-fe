import React, { useState } from "react";
import search from "../../Assets/Images/Icons/search.svg";
import logo from "../../Assets/Images/Icons/logo.png";
import { Form } from 'react-router-dom'

const Dashboard = () => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    setSelected(event.target.value);
  }

  return (
    <section className="bg-neutral-0 mb-0 flex-grow flex flex-col justify-center items-center">
      <div className="w-10/12 sm:w-10/12 lg:w-6/12 h-fit flex justify-center lg:justify-between items-center">
        <img className="w-[90px] h-[90px] lg:h-[250px] lg:w-[250px] object-contain" src={logo} alt="cherry-logo"></img>
        <h1 className="text-[71px] lg:text-[190px] text-primary-3 object-contain">Cherry</h1>
      </div>
      <div className="h-[48px] border-neutral-6 border-[1px] lg:border-[2px] w-10/12 sm:w-10/12 lg:w-6/12 flex items-center rounded-full mt-[16px]">
        <Form 
          className="flex items-center justify-between px-[16px] w-full h-[80%]"
          method="get"
          action={`/${selected}`}
          >
          <select className="bg-transparent w-[110px] lg:w-[160px] text-[12px] lg:text-[16px] rounded-lg border-[1px] border-black p-[2px]" name="searchType" id="searchType" value={selected} onChange={handleChange}>
            <option defaultValue disabled value="">Select...</option>
            <option value="block">Block hash</option>
            <option value="transaction">Transaction id</option>
            <option value="address">Address</option>
          </select>
          <input
            className="bg-transparent w-[110px] sm:flex-grow focus:outline-none h-full sm:ml-[16px] text-[12px] lg:text-[16px]"
            type="text"
            // placeholder="Search for block height, hash, transaction or address..."
            placeholder="Search..."
            name='userInput'
          ></input>
          <button className="h-full" type="submit">
            <img
              className="w-[22px] h-[33px] lg:w-full lg:h-full my-auto"
              src={search}
              alt="search icon"
            ></img>
          </button>
        </ Form>
      </div>
    </section>
  );
};

export default Dashboard;
