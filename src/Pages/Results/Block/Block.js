import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getBlock } from "../../../Utils/Api/http";
import cube from "../../../Assets/Images/Icons/cube.svg";
import back from '../../../Assets/Images/Icons/back.svg'

const Block = () => {
  const [userInput] = useSearchParams({});
  const [blockData, setBlockData] = useState(null);
  const [blockTimeStamp, setBlockTimeStamp] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hash = userInput.get("userInput");

    getBlock(hash).then(function (response) {
        const data = response
        setBlockData(data);
        const unixTime = data.time * 1000;
        let timestamp = new Date(unixTime);
        timestamp = timestamp.toLocaleString();
        setBlockTimeStamp(timestamp);
        setIsLoading(false)
    })
  }, [userInput, isLoading]);

  return (
    <section className="w-full flex-grow bg-neutral-0 flex justify-center">
      <div className="w-6/12 h-full flex flex-col">
        {isLoading && 
        <p>Loading...</p>
        }
        {blockData && blockTimeStamp && (
          <>
            <header className="flex flex-col">
              <Link to="/">
                <img className="h-[50px] w-[50px] mt-[20px]" src={back} alt="back arrow icon"></img> 
              </Link> 
              <div className="flex items-center mt-[20px]">
                <img
                  className="h-[125px] w-[125px]"
                  src={cube}
                  alt="block icon"
                ></img>
                <div className="flex">
                  <h2>Block {blockData.height}</h2>
                </div>
              </div>
              <p className="mt-[10px]">{blockData.hash}</p>
            </header>
            <ul className="w-full mt-[50px]">
              <li className="blockdata-list-item">
                <p>Height</p>
                <p>{blockData.height}</p>
              </li>
              <li className="blockdata-list-item">
                <p>Confirmations</p>
                <p>{blockData.confirmations}</p>
              </li>
              <li className="blockdata-list-item border-b-[1px]">
                <p>Timestamp</p>
                <p>{blockTimeStamp} GMT</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Block;
