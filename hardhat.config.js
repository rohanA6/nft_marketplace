require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
require("hardhat-deploy");

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    polygonMumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      blockConfirmations: 3,
    },
    
    mainnet: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId:137,
      blockConfirmations: 3,
    },
  },
  solidity: "0.8.9",

  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
};