require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("./tasks/nft");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    holesky: {
      url: process.env.HOLESKY_RPC_URL,
      accounts: [process.env.ETH_PRIVATE_KEY],
    }
  }
};
