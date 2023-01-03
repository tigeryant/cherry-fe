import axios from 'axios'

export function getBlock(blockHash) {
    return axios.get(process.env.REACT_APP_GET_BLOCK_URL, { params: { hash: blockHash }})
}

export function getTx(txid) {
    return axios.get(process.env.REACT_APP_GET_TX_URL, { params: { txid: txid }})
}

export function getAddress(address) {
    return axios.get(process.env.REACT_APP_GET_ADDRESS_URL, { params: { address: address }})
}