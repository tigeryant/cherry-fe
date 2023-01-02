import React from 'react'
import { Link } from "react-router-dom";
import back from '../../Assets/Images/Icons/back.svg'

const Error = () => {
  return (
    <>
        <Link to="/">
            <img className="h-[50px] w-[50px] mt-[20px]" src={back} alt="back arrow icon"></img> 
        </Link> 
        <div className='flex flex-col text-center'>
            <h1 className='text-[100px]'>:-(</h1>
            <h2 className='text-[40px]'>Oops! Something went wrong.</h2>
            <p>Try refreshing the page later.</p>
        </div>
    </>
  )
}

export default Error