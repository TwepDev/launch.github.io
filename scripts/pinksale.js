const Web3 = require('web3');

// const web3 = new Web3("https://bsc-dataseed.binance.org/");
const web3 = new Web3("https://data-seed-prebsc-2-s3.binance.org:8545");
const fs = require('fs');
const presaleAbi = getAbi("pinksaleABI1")
const dxAbi = getAbi("DXABI")
const fairLaunchAbi = getAbi("pinksaleABI2")


function getAbi(x) {
    const rawdata = fs.readFileSync(`${x}.json`);
    const Data = JSON.parse(rawdata);
    return Data
}

// fairlaunch >= 27
// presale < 27
// auction >= 101
// subs >= 131 132 133
// unlistpool >= 81

async function Pinksale(contractAddress) {
    const final = []
    const live = ["0xD0Eb19449559404f0d921E7E076cE73D705b2Fa4"]
    const upcoming = ["0xCb83520942b30201167ddD4d5028Bd63E610Eb07"]
    const ended = ["0xB2da55B39640553C19e9Eeb9d151313289fac54e"]
    const canceled = ["0xE07561B49d65b4f845cd08Beee641024896A9588"]
    const checkContract = new web3.eth.Contract(presaleAbi, "0x98f3207F37FdeAF5B5bE714A172a063cab888b45");
    // const t = await web3.eth.call({
    //     to: "0x98f3207F37FdeAF5B5bE714A172a063cab888b45",
    //     from: "0x98f3207F37FdeAF5B5bE714A172a063cab888b45",
    //     data: web3.utils.sha3("totalSellingAmount()")
    //   })
    //   const n = await web3.eth.abi.decodeParameters(
    //     [
    //       "uint",
    //     ],
    //     t
    //   )
    
    const version = await checkContract.methods.poolSettings().call({from:"0x7897f487907cc9bdaadab5483216b762c8ff2bec"});

    console.log(version);
    // if(version >= 27) {
    //     const checkContract = new web3.eth.Contract(fairLaunchAbi, contractAddress);
    //     const stringDetail = await checkContract.methods.poolStates().call();
    //     const uintDetail = await checkContract.methods.poolSettings().call();
    //     final.uint = uintDetail
    //     final.string = stringDetail
    // }else {
    //     const checkContract = new web3.eth.Contract(presaleAbi, contractAddress);
    //     const stringDetail = await checkContract.methods.poolStates().call();
    //     const uintDetail = await checkContract.methods.poolSettings().call();
    //     final.uint = uintDetail
    //     final.string = stringDetail
    // }
    return final;
}


async function DxSale(contractAddress) {
    // 0xF179d786eaAA59E19aeC373B4cA3fD4B93eC7087
    const checkContract = new web3.eth.Contract(dxAbi, "0x614563c5Bb18594bf4Ea1860031828e403e8475C");
    // const numberOfPresaleOwners = await checkContract.methods.getNumberOfPresaleOwners().call();
    // console.log(`There are ${numberOfPresaleOwners.toString()} presales in DxLaunch.\n`);
    var presaleOwnerAddress = await checkContract.methods.getAddlist().call();
    // var presaleInfo = await checkContract.methods.ROUTER_ADDRESS().call();
    console.log(presaleOwnerAddress);
}
async function start() {
    const myArgs = process.argv.slice(2);
   const res = await Pinksale(myArgs[0]) // change with any presale contract address
}
(async () => {

    await start()
})()