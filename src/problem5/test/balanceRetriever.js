const { expect } = require("chai");

describe("TokenBalanceRetriever", function () {
  let tokenBalanceRetriever;
  let walletAddress;
  let tokenAddresses;

  before(async function () {
    const TokenBalanceRetriever = await ethers.getContractFactory("TokenBalanceRetriever");
    tokenBalanceRetriever = await TokenBalanceRetriever.deploy();
    await tokenBalanceRetriever.deployed();

    walletAddress = "0x...";
    tokenAddresses = ["0x...", "0x...", "0x..."];
  });

  it("should retrieve the correct token balances", async function () {
    const balances = await tokenBalanceRetriever.getBalances(walletAddress, tokenAddresses);

    // Add your assertions here
    // For example, you can check if the balances match the expected values
    expect(balances[0]).to.equal(expectedBalance1);
    expect(balances[1]).to.equal(expectedBalance2);
    expect(balances[2]).to.equal(expectedBalance3);
  });
});
