require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      /*
      accounts: {
        mnemonic: "SOME MNEMONIC TEXT HERE"
      },*/
    },
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
        accounts: [`0x${PRIVATE_KEY}`]
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
};
