const {ethers} = require("hardhat");
const {expect} = require("chai");
const hre = require("hardhat");

// Make changes with the address here!
describe("MyNFT-TASK", () => {
    it("Should deploy the contract", async () => {
        const contract = await ethers.getContractFactory("MyNFT");
        const instance = await contract.deploy();
        console.log("Contract deployed to:", instance.address);
        expect(instance.target).to.not.be.undefined;
        expect(instance.target).to.equal("0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82");
    });

    it("Should mint an NFT", async () => {
        const contract = await ethers.getContractFactory("MyNFT");
        const instance = await contract.deploy();
        const [owner] = await hre.ethers.getSigners();
        const tx = await instance.mintNFT(owner, "https://my-nft");
        console.log(`TX hash:${tx.hash}`);
        await tx.wait();
        expect(tx.hash).to.equal("0xce6fb1e24d8ea7abb1db54f8e1382ebbbcc074d7a9d936962469b8ed0ffa3695");
    })
});