import axios from 'axios'

export async function getBlock(blockHash) {
  console.log('env var: ', process.env.REACT_APP_GET_BLOCK_URL)
  const response = await axios.get(process.env.REACT_APP_GET_BLOCK_URL, { params: { hash: blockHash }})
  return response.data
}

// export async function getBlockCount() {
//   const response = await axios.post(process.env.REACT_APP_GET_BLOCK_COUNT_URL)
//   return response.data
// }

export async function getTx(myTxid) {
  const response = await axios.get(process.env.REACT_APP_GET_TX_URL, { params: { txid: myTxid }})
  return response.data
}