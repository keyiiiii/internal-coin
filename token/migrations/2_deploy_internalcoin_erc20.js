const InternalCoin = artifacts.require('./InternalCoin.sol');

module.exports = function(deployer) {
  let initialSupply = 1000000e18;
  let maxSupply = 100000000e18;
  deployer.deploy(InternalCoin, initialSupply, maxSupply, {
    gas: 2000000
  })
};
