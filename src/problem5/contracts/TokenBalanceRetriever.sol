//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceRetriever {
    function getBalances(address wallet, address[] memory tokenAddresses) external view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](tokenAddresses.length);

        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            ERC20 token = ERC20(tokenAddresses[i]);
            balances[i] = token.balanceOf(wallet);
        }

        return balances;
    }
}
