import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getBlock } from "../../../Utils/Api/http";
import Error from '../../Error/Error'
import { SpinnerCircularFixed } from 'spinners-react'
import cube from "../../../Assets/Images/Icons/cube.svg";
import back from '../../../Assets/Images/Icons/back.svg'

const Block = () => {
  const [userInput] = useSearchParams({});
  const [blockData, setBlockData] = useState(null);
  const [blockTimeStamp, setBlockTimeStamp] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

useEffect(() => {
    const hash = userInput.get("userInput");

    const getData = async () => {
        try {
            const response = await getBlock(hash)
            const data = response.data
            setBlockData(data);
            const unixTime = data.time * 1000;
            let timestamp = new Date(unixTime);
            timestamp = timestamp.toLocaleString();
            setBlockTimeStamp(timestamp);
        } catch (error) {
            setIsError(true)
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                }
        } finally {
            setIsLoading(false)
        }
    }
    getData()
  }, [userInput])

  return (
    <section className="w-full flex-grow bg-neutral-0 flex justify-center">
      <div className="results-container">
        {isLoading && 
            <div className="m-auto">
                <SpinnerCircularFixed color={'#C8042B'} secondaryColor={'#FFFFFF00'} size={100} />
            </div>
        }
        {isError &&
            <Error />
        }
        {blockData && blockTimeStamp && (
          <>
            <header className="flex flex-col">
              <Link to="/">
                <img className="back-icon" src={back} alt="back arrow icon"></img> 
              </Link> 
              <div className="flex items-center mt-[20px]">
                <img
                  className="result-icon"
                  src={cube}
                  alt="block icon"
                ></img>
                <div className="flex">
                  <h2>Block {blockData.height}</h2>
                </div>
              </div>
              <p className="break-all mt-[10px]">{blockData.hash}</p>
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
