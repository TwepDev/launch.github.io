const hh = require("hardhat");

async function main() {
  console.log(hh.network.name)
  console.clear();
  console.log('\n\nScript started...');
  let factoryAddress;
  let lockerAddress;
  let adminAddress;
  let userAddress;
  let presaleView;
  let tools;


  async function _deploy(file) {

      const contractFile = await hh.ethers.getContractFactory(file);
      const contractDeploy = await contractFile.deploy({gasPrice:  10000000000});
      await contractDeploy.deployed()
      await contractDeploy.setPresaleSettings(settingAddress)
      setTimeout(() => {}, 5000);  
      console.log(`${file} deployed on : ${contractDeploy.address}`);
      return contractDeploy.address;

  }

  console.log('Deploying Contract');
  const presaleSetting = await hh.ethers.getContractFactory("PresaleSettings");
  const SettingDeploy = await presaleSetting.deploy({gasPrice:  10000000000});
  await SettingDeploy.deployed();
  const settingAddress = SettingDeploy.address
  console.log(`\nPresaleSetting deployed on : ${settingAddress}`);


    console.log("\n");
    factoryAddress = await _deploy('PresaleFactory')
    lockerAddress = await _deploy('PresaleLocker')
    adminAddress = await _deploy('PresaleAdmin')
    userAddress = await _deploy('PresaleUser')
    presaleView = await _deploy('PresaleView')
    tools = await _deploy('Tools')

    console.log('\nDeploy Success...\n');
  
    console.log('Change AdrParams');
    console.log(["0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", factoryAddress, lockerAddress, adminAddress, userAddress, presaleView, tools, "0xEFF4ec6B9287AF91b99Ce028Aba79cF12285C01C", "0x0b648590f7eD35693868A49404FE067EAAC6CECd", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"], [100, 0, 1000, 10000, 100, 1000, 3600, 3600, 3600, 3600000, 0, 0]);
    // await SettingDeploy.setGenerals(["0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", factoryAddress, lockerAddress, adminAddress, userAddress, presaleView, tools, "0xEFF4ec6B9287AF91b99Ce028Aba79cF12285C01C", "0x0b648590f7eD35693868A49404FE067EAAC6CECd", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"], [100, 0, 1000, 10000, 100, 1000, 3600, 3600, 3600, 3600000, 0, 0]);
  
    console.log('\nChange Params Success...');
    console.log('\n\nPresaleSetting = ',settingAddress)
    console.log('PresaleFactory = ',factoryAddress);
    console.log('PresaleLocker = ',lockerAddress);
    console.log('PresaleAdmin = ',adminAddress);
    console.log('PresaleUser = ',userAddress);
    console.log('PresaleView = ',presaleView);
    console.log('Tools = ',tools);

    console.log("==== Template ===");
    console.log(`cPresale: "${settingAddress}", // Presale Setting
    chPresale: "${factoryAddress}", // Presale Factory
    ctPresale: "${adminAddress}", // Presale Admin
    cDeposit: "${userAddress}", // Presale User
    presaleLocker: "${lockerAddress}", // Presale Locker
    cData: "${presaleView}", // Presale View
    antibot: "0xaD8Ea768A8Dbeb2dca90C2017ca4e34353074796", // Antibot
    tools: "${tools}", // tools`);
    return
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
