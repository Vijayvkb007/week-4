const { task } = require("hardhat/config");
require("dotenv").config();

task("deploy-contract", "Deploy NFT contract")
  .setAction(async (taskArgs, hre) => {
    try {
      const ContractFactory = await hre.ethers.getContractFactory("MyNFT");
      console.log("Deploying contract...");
      console.log(ContractFactory);
      const contractInstance = await ContractFactory.deploy();
      console.log("Contract deployed to:", contractInstance.address);
      console.log("Waiting for deployment confirmation...");
    //   await contractInstance.deployTransaction.wait(); // Wait for deployment confirmation
      
      console.log("Contract deployed to:", contractInstance.address);
      return contractInstance.address;
    } catch (error) {
      console.error("Error deploying contract:", error);
      process.exit(1);
    }
});

task("mint-nft", "Mint an NFT")
  .addParam("tokenuri", "Your ERC721 Token URI")
  .setAction(async (taskArgs, hre) => {
    try {
      const { tokenuri } = taskArgs;
      const contractAddress = process.env.NFT_CONTRACT_ADDRESS;

      if (!contractAddress) {
        throw new Error("NFT_CONTRACT_ADDRESS is not defined in .env file");
      }

      if (!process.env.ETH_PUBLIC_KEY) {
        throw new Error("ETH_PUBLIC_KEY is not defined in .env file");
      }

      console.log("Getting contract instance...");
      const nftContract = await hre.ethers.getContractAt("MyNFT", contractAddress);

      console.log("Minting NFT...");
      const tx = await nftContract.mintNFT(process.env.ETH_PUBLIC_KEY, tokenuri);
      
      console.log("Waiting for transaction confirmation...");
      await tx.wait(); // Wait for transaction confirmation
      
      console.log("NFT minted successfully!");
      console.log("Transaction hash:", tx.hash);
      console.log("Token URI:", tokenuri);
    } catch (error) {
      console.error("Error minting NFT:", error);
      process.exit(1);
    }
});

module.exports = {};