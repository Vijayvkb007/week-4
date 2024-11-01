const {ethers} = require('ethers');
const {env} = require('./env');
const {getProvider} = require('./provider');

function getWallet() {
    return new ethers.Wallet(env("ETH_PRIVATE_KEY"), getProvider());
}

module.exports = {
    getWallet
}