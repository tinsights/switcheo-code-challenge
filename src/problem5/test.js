const { ethers } = require("ethers");

const ADDR = "0x9187629e90222aB0fd58dB170Fae42E96Df04720"; // your contract address
const ABI = [
  {
    inputs: [
      { internalType: "address", name: "wallet", type: "address" },
      { internalType: "address[]", name: "tokenAddresses", type: "address[]" },
    ],
    name: "getBalances",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
]; // your contract ABI

const ADDRESS = "0xD70506580B5F65e68ed0dbA7B4Ae507641C48197"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x958b482c4E9479a600bFFfDDfe94D974951Ca3c7", // Horse Token
];

const rpcURL = "https://rpc2.sepolia.org/";
const provider = new ethers.JsonRpcProvider(rpcURL);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);
