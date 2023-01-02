import axios from 'axios'

export function getBlock(blockHash) {
    return axios.get(process.env.REACT_APP_GET_BLOCK_URL, { params: { hash: blockHash }})
}

export async function getTx(txid) {
    const response = await axios.get(process.env.REACT_APP_GET_TX_URL, { params: { txid: txid }})
    return response.data
}

export async function getAddress(address) {
    const response = await axios.get(process.env.REACT_APP_GET_ADDRESS_URL, { params: { address: address }})
    return response.data
}