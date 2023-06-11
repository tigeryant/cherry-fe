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
  
## Challenges
### Dynamic IP
One challenge I faced while building this application concerns the dynamic nature of the IP used by the Bitcoin node (Raspberry Pi). The Lambda functions reference the IP of the Bitcoin node in order to communicate over SSH. This IP parameter is stored in the SSM parameter store (previously it was an environment variable). Every time the router to which the node is connected is restarted, the network (and thus the node) is assigned a new public IP. This causes the IP parameter which is referenced by the Lambdas to become invalid. In this scenario, each time the Lambda attempts to establish a connection to the node over SSH, it fails, and a 502 response is sent to the client.
  
In order to resolve this, I wrote a bash script that overwrites the IP parameter in SSM with the new IP value. This script is run every time the relevant network interface on the Raspberry Pi undergoes a state change. It uses the AWS CLI, and an IAM user that I created for this purpose.



## Stack
### Frontend
* React
* Tailwind

### Backend (serverless)
* AWS Lambda (Python runtime)
* AWS API Gateway
* AWS S3

### Backend (other)
* Bitcoin Core
* Raspberry Pi

### CI/CD
* Serverless Framework
* GitHub Actions

### Languages
* Python 3.7
* JavaScript

### Network protocols
* SSH
* HTTP

