import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getAddress } from "../../../Utils/Api/http";
import address from "../../../Assets/Images/Icons/address.svg";
import back from "../../../Assets/Images/Icons/back.svg";

const Block = () => {
  const [userInput] = useSearchParams({});
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    const address = userInput.get("userInput");
    console.log("user input: ", userInput.get("userInput"));

    getAddress(address).then(function (response) {
      const data = JSON.parse(response);
      console.log('data response: ', data)
      setAddressData(data);
    });
  }, [userInput]);

  return (
    <section className="w-full flex-grow bg-neutral-0 flex justify-center">
      <div className="w-6/12 h-full flex flex-col">
        {addressData && (
          <>
            <header className="flex flex-col">
              <Link to="/">
                <img
                  className="h-[50px] w-[50px] mt-[20px]"
                  src={back}
                  alt="back arrow icon"
                ></img>
              </Link>
              <div className="flex items-center mt-[20px]">
                <img
                  className="h-[125px] w-[125px]"
                  src={address}
                  alt="address icon"
                ></img>
                <div className="flex">
                  <h2>Address</h2>
                </div>
              </div>
              <p className="mt-[10px]">{addressData.address}</p>
            </header>
            <ul className="w-full mt-[50px]">
              <li className="blockdata-list-item">
                <p>Is change</p>
                {addressData &&
                  <p>{addressData.ischange ? "true" : "false"}</p>
                }
              </li>
              <li className="blockdata-list-item">
                <p>Is witness</p>
                {addressData &&
                  <p>{addressData.iswitness ? "true" : "false"}</p>
                }
              </li>
              <li className="blockdata-list-item border-b-[1px]">
                <p>Is script</p>
                {addressData &&
                  <p>{addressData.isscript ? "true" : "false"}</p>
                }
              </li>
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Block;
