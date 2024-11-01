const ethers = require('ethers');
require('dotenv').config(); // Ensure environment variables are loaded

function getProvider() {
    const alchemyApiKey = process.env.ALCHEMY_API_KEY;

    if(!alchemyApiKey) {
        throw new Error("Missing Alchemy API key in environment variables.");
    }

    // Construct the provider with the correct RPC URL
    return new ethers.JsonRpcProvider(`https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}`); 
}

module.exports = {
    getProvider
}