import React from 'react'
import linkedin from '../../Assets/Images/Icons/linkedin.svg'
import github from '../../Assets/Images/Icons/github.svg'

const Footer = () => {
  return (
    <div className='w-full h-[120px] bg-neutral-2 flex justify-center items-center'>
        <div className='flex text-primary-3 items-center'>
            <a href="https://github.com/tigeryant" target="_blank" rel="noreferrer">
                <img src={github} className='h-[32px] w-[32px]' alt='github icon' />
            </a>
            <a href="https://www.linkedin.com/in/jrfdavies/" target="_blank" rel="noreferrer">
                <img src={linkedin} className='h-[37px] w-[37px] ml-[3px]' alt='linkedin icon' />
            </a>
            <p className='ml-[3px]'>Created by John Davies</p>
        </div>
    </div>
  )
}

export default Footer