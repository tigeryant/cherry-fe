import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getBlock } from '../../../Utils/Api/http'

const Block = () => {
  const [userInput] = useSearchParams({})
  
  useEffect(() => {
    console.log('userInput: ', userInput.get("userInput"))
    const hash = userInput.get("userInput")

    getBlock(hash).then(
      result => console.log('result', result)
    )
  }, [userInput]);
  
  return (
    <>
      <div>Block</div>
      {/* <div>{userInput}</div> */}
    </>
  )
}

export default Block