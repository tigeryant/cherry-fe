# Cherry - Frontend
## Overview
This React app serves as the user interface for version one of Cherry, a Bitcoin block explorer. Version 1 represents an intermediate step in the frontend design for Cherry. Cherry provides a search function which allows users to query the Bitcoin blockchain for information about blocks, transactions, addresses, and more.

## What is a block explorer?
A block explorer is an online tool that enables you to search for real-time and historical information about a blockchain, including data related to blocks, transactions, addresses, and more.

## Architectural differences between version 1 and later versions
In the final version of Cherry, the frontend will make HTTP requests to AWS API gateway. These requests will then be passed to various AWS lambda functions (depending on the query). The Lambdas, which will use a Golang runtime, will make HTTP requests to a Bitcoin full node. This node runs on a Raspberry Pi and exposes the Bitcoin JSON-RPC interface. Responses from the node will be passed back to the Lambda, and in turn to the frontend. The Cherry frontend will render these in a clear and presentable manner.

While the backend for Cherry is built, the Cherry frontend will make HTTP calls directly to the Bitcoin node and render these responses to the user.


## Stack
* React
* Tailwind
