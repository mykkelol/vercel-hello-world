import React, { useState, useEffect } from 'react';
let web3 = require('web3');

export default function Home() {
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState(null);
    const [contract, setContract] = useState(null);

    let abi = ['some abi'];
    let contractAddress = 'contractaddress';

    useEffect(() => {
        window.ethereum
            ? ethereum
                  .request({ method: 'eth_requestAccounts' })
                  .then((accounts) => {
                      setAddress(accounts[0]);
                      let w3 = new Web3(ethereum);
                      setWeb3(w3);
                  })
                  .catch((err) => {
                      console.log(err);
                  })
            : console.log('Please install MetaMask');
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <h1 style={{ align: 'center', textAlign: 'center' }}>
                Hi dApp and Web3 - check console
            </h1>
        </div>
    );
}
