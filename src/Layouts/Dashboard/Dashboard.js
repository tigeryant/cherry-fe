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
      <div className="w-6/12 h-fit flex justify-between items-center">
        <img className="h-[250px] w-[250px]" src={logo} alt="cherry-logo"></img>
        <h1 className="text-[190px] text-primary-3">Cherry</h1>
      </div>
      <div className="h-[48px] border border-neutral-6 w-6/12 flex items-center rounded-full mt-[16px]">
        <Form 
          className="flex items-center justify-between px-[16px] w-full h-[80%]"
          method="get"
          action={`/${selected}`}
          >
          <select className="bg-transparent w-[160px] text-[16px] rounded-md border-[1px] border-black p-[2px]" name="searchType" id="searchType" value={selected} onChange={handleChange}>
            <option defaultValue disabled value="">Select...</option>
            <option value="block">Block hash</option>
            <option value="transaction">Transaction id</option>
            <option value="address">Address</option>
          </select>
          <input
            className="bg-transparent flex-grow focus:outline-none h-full ml-[16px] text-[16px]"
            type="text"
            // placeholder="Search for block height, hash, transaction or address..."
            placeholder="Search..."
            name='userInput'
          ></input>
          <button className="h-full" type="submit">
            <img
              className="h-full my-auto"
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
