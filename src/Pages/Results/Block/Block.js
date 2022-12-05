import React, { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
import { getBlock } from '../../../Utils/Api/http'

const Block = () => {
  // const [userInput] = useSearchParams({})
  const hash = "00000000000000000003b5a5d4ca8b03fbae35d81df062b818b8116e4525cb23"
  
  useEffect(() => {
    // console.log('userInput: ', userInput.get("userInput"))

    getBlock(hash).then(
      result => console.log('result', result)
    )
  }, [])
  // }, [userInput]);
  
  return (
    <>
      <div>Block</div>
      {/* <div>{userInput}</div> */}
    </>
  )
}

export default Block