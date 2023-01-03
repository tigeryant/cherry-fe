import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getAddress } from "../../../Utils/Api/http";
import Error from '../../Error/Error'
import { SpinnerCircularFixed } from 'spinners-react'
import address from "../../../Assets/Images/Icons/address.svg";
import back from "../../../Assets/Images/Icons/back.svg";

const Block = () => {
  const [userInput] = useSearchParams({});
  const [addressData, setAddressData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

useEffect(() => {
    const address = userInput.get("userInput");

    const getData = async () => {
        try {
            const response = await getAddress(address)
            const data = response.data
            setAddressData(data)
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
      <div className="w-6/12 h-full flex flex-col">
        {isLoading && 
            <div className="m-auto">
                <SpinnerCircularFixed color={'#C8042B'} secondaryColor={'#FFFFFF00'} size={100} />
            </div>
        }
        {isError &&
            <Error />
        }
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
