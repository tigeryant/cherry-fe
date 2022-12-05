import axios from 'axios'

export async function getBlock(blockHash) {
  const response = await axios.get(process.env.REACT_APP_GET_BLOCK_URL, { params: { hash: blockHash }})
  return response.data
}

// export async function getBlockCount() {
//   const response = await axios.post(process.env.REACT_APP_GET_BLOCK_COUNT_URL)
//   return response.data
// }