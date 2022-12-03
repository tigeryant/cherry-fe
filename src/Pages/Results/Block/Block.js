import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Block = () => {
  const [userInput] = useSearchParams({})
  // make an api call (getblockinfo), passing the search input as a parameter. redirect to the block results page, passing the response

  useEffect(() => {
     console.log('userInput: ', userInput.get("userInput"))
  }, [userInput]);
  
  return (
    <>
      <div>Block</div>
      {/* <div>{userInput}</div> */}
    </>
  )
}

export default Block