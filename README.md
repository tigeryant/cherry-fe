# Cherry - Frontend
## Overview
This React app serves as the frontend for Cherry, a Bitcoin block explorer. Cherry provides a search function which allows users to query the Bitcoin blockchain for information about blocks, transactions and addresses. The backend repo can be found [here](https://github.com/tigeryant/cherry-lambdas/tree/main).

<p align="center">
  <img src="https://i.imgur.com/barWqhe.png" height="450px"></img>
  <p>

## Deployed site url
The deployed version of this site can be found [here](http://cherry-frontend.s3-website.eu-west-2.amazonaws.com/).

## What is a block explorer?
A block explorer is an online tool that enables you to search for real-time and historical information about a blockchain, including data related to blocks, transactions, addresses, and more.

## Architecture
The React frontend is hosted as a static site with AWS S3. When the user completes a form using the UI to search by block hash, transaction id or address, a corresponding HTTP request is made to AWS API Gateway. Using Lambda integration, API Gateway forwards this request to one of three Lambdas (one for block retrieval, one for address retrieval and one for transaction retrieval). Inside each lambda, an SSH client is implemented using the paramiko Python module. This SSH client connects to a Bitcoin full node (Raspberry Pi) inside a private subnet. From there, a bitcoin-cli command is executed, passing the user input as an argument. The response is returned to the Lambda, which then passes it back to the client. The React client parses the returned JSON and displays the output to the user.

<p align="center">
  <img src="https://i.imgur.com/MWeQExx.png" height="450px"></img>
  <p>


## Stack
### Frontend
* React
* Tailwind

### Backend (serverless)
* AWS Lambda (Python)
* AWS API Gateway
* AWS S3

### Backend (other)
* Bitcoin Core
* Raspberry Pi

### Network protocols
* SSH
* HTTP

