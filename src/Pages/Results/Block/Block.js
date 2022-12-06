import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getBlock } from "../../../Utils/Api/http";
import cube from "../../../Assets/Images/Icons/cube.svg";

const Block = () => {
  const [userInput] = useSearchParams({});
  const [blockData, setBlockData] = useState({});
  const [blockTimeStamp, setBlockTimeStamp] = useState(null);

  useEffect(() => {
    const hash = userInput.get("userInput");

    getBlock(hash).then(function (response) {
      const data = JSON.parse(response);
      setBlockData(data);
      const unixTime = data.time * 1000;
      let timestamp = new Date(unixTime);
      timestamp = timestamp.toLocaleString();
      setBlockTimeStamp(timestamp);
    });
  }, [userInput]);

  return (
    <section className="w-full flex-grow bg-neutral-0 flex justify-center">
      <div className="w-6/12 h-full flex flex-col">
        {blockData && blockTimeStamp && (
          <>
            <header className="flex flex-col pt-[50px]">
              {/* back button should go here */}
              <div className="flex items-center">
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
