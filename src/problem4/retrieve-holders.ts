import { BigNumberish, ethers } from "ethers";
import * as ABI from "./SWTHABI.json";
const walletAddresses = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

async function main() {
  const provider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
  const contractAddress = "0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468";
  const contract = new ethers.Contract(contractAddress, ABI.result, provider);
  walletAddresses.forEach((addr) => readBalance(contract, addr));
}

async function readBalance(contract: ethers.Contract, address: String) {
  const balance = contract.balanceOf(address).then((bal: BigNumberish) => {
    console.log(address, ethers.formatUnits(bal, 8));
  });
}

main();
