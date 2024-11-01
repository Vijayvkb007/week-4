const {ethers} = require("ethers");
require("@nomicfoundation/hardhat-toolbox");
const {env} = require("./env");
const {getProvider} = require("./provider");

async function getContract(name, hre) {
    const WALLET = new ethers.Wallet(env("ETH_PRIVATE_KEY"), getProvider());

    // Use hre.ethers.getContractAt here:
    return await hre.ethers.getContractAt(name, env("NFT_CONTRACT_ADDRESS"), WALLET);
}

module.exports = {
    getContract
};