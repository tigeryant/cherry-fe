import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getTx } from "../../../Utils/Api/http";
import Error from '../../Error/Error'
import { SpinnerCircularFixed } from 'spinners-react'
import transaction from "../../../Assets/Images/Icons/transaction.png";
import back from '../../../Assets/Images/Icons/back.svg'

const Block = () => {
  const [userInput] = useSearchParams({});
  const [txData, setTxData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

useEffect(() => {
    const txid = userInput.get("userInput");

    const getData = async () => {
        try {
            const response = await getTx(txid)
            const data = response.data
            setTxData(data)
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
        {txData && (
          <>
            <header className="flex flex-col">
              <Link to="/">
                <img className="back-icon" src={back} alt="back arrow icon"></img> 
              </Link> 
              <div className="flex items-center mt-[20px]">
                <img
                  className="result-icon"
                  src={transaction}
                  alt="transaction icon"
                ></img>
                <div className="flex">
                  <h2>Transaction</h2>
                  {/* <h2>Block {blockData.height}</h2> */}
                </div>
              </div>
              <p className="break-all mt-[10px]">{txData.hash}</p>
            </header>
            <ul className="w-full mt-[50px]">
              <li className="blockdata-list-item">
                <p>Included in block</p>
                <p className="w-6/12 sm:w-fit break-all">{txData.blockhash}</p>
              </li>
              <li className="blockdata-list-item">
                <p>Confirmations</p>
                <p>{txData.confirmations}</p>
              </li>
              {txData.vout &&
              <li className="blockdata-list-item">
                <p>Number of outputs</p>
                <p>{txData.vout.length}</p>
              </li>
              }
              <li className="blockdata-list-item">
                <p>Size</p>
                <p>{txData.size}B</p>
              </li>
              <li className="blockdata-list-item border-b-[1px]">
                <p>Virtual size</p>
                <p>{txData.vsize}vB</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Block;
