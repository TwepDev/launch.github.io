const hh = require("hardhat");
var fs = require('fs')
var replace = require("replace");
const util = require('util');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.clear();
  console.log(hh.network.name)
  console.log('\n\nScript started...');
  let bbtAddress;
  let btAddress;
  let ctAddress;
  let lgtAddress;
  let stAddress;

  async function _deploy(file) {
      const contractFile = await hh.ethers.getContractFactory(file);
      const contractDeploy = await contractFile.deploy({gasPrice:  10000000000});
      await contractDeploy.deployed()
      await contractDeploy.setTokenFF(FactoryAddress)
      console.log(`${file} deployed`);
      return contractDeploy.address;

  }

  console.log('Deploying Contract');
  const tokenFactory = await hh.ethers.getContractFactory("TokenFactoryFactory");
  const FactoryDeploy = await tokenFactory.deploy({gasPrice:  10000000000});
  await FactoryDeploy.deployed();
  const FactoryAddress = FactoryDeploy.address
  console.log(`\nFactory deployed on : ${FactoryAddress}`);

    console.log("\n");
    bbtAddress = await _deploy('TokenFactoryBBT')
    btAddress = await _deploy('TokenFactoryBT')
    ctAddress = await _deploy('TokenFactoryCT')
    lgtAddress = await _deploy('TokenFactoryLGT')
    stAddress = await _deploy('TokenFactoryST')

    console.log('\nDeploy Success...\n');
  
    console.log('\n\nTokenFactory = ',FactoryAddress)
    console.log('BuyBack Token = ',btAddress);
    console.log('BabyBuyBack Token = ',bbtAddress);
    console.log('Standard Token = ',stAddress);
    console.log('Custom Token = ',ctAddress);
    console.log('Liquidity Generator Token = ',lgtAddress);
  
    const x = [stAddress,lgtAddress,btAddress,bbtAddress]
    for(let i = 0; i < 4; i ++) {
      await FactoryDeploy.setTokF(i, x[i], 0)
      console.log(`${i} = ${x[i]}`);
    }
    return
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
