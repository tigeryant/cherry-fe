import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getTx } from "../../../Utils/Api/http";
import transaction from "../../../Assets/Images/Icons/transaction.png";
import back from '../../../Assets/Images/Icons/back.svg'

const Block = () => {
  const [userInput] = useSearchParams({});
  const [txData, setTxData] = useState(null);

  useEffect(() => {
    const txid = userInput.get("userInput");

    getTx(txid).then(function (response) {
      const data = response;
      setTxData(data);
    });
  }, [userInput]);

  return (
    <section className="w-full flex-grow bg-neutral-0 flex justify-center">
      <div className="w-6/12 h-full flex flex-col">
        {txData && (
          <>
            <header className="flex flex-col">
              <Link to="/">
                <img className="h-[50px] w-[50px] mt-[20px]" src={back} alt="back arrow icon"></img> 
              </Link> 
              <div className="flex items-center mt-[20px]">
                <img
                  className="h-[125px] w-[125px]"
                  src={transaction}
                  alt="transaction icon"
                ></img>
                <div className="flex">
                  <h2>Transaction</h2>
                  {/* <h2>Block {blockData.height}</h2> */}
                </div>
              </div>
              <p className="mt-[10px]">{txData.hash}</p>
            </header>
            <ul className="w-full mt-[50px]">
              <li className="blockdata-list-item">
                <p>Included in block</p>
                <p>{txData.blockhash}</p>
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
