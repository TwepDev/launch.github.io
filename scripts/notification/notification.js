const nodeHtmlToImage = require('node-html-to-image')
var telegram = require('telegram-bot-api');
const fs = require('fs')
const Web3 = require('web3')
const args = require('args')
args
    .option('chain', 'What chain you want to deploy')
const flags = args.parse(process.argv)
const presaleAdmin = [{
    "inputs": [
        {
            "internalType": "address",
            "name": "adr",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "idx",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "n",
            "type": "uint256"
        }
    ],
    "name": "getPresales",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}]

const presaleView = [{
    "inputs": [
        {
            "internalType": "address",
            "name": "pAdr",
            "type": "address"
        }
    ],
    "name": "getPresaleFactory",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "pOwner",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20",
                    "name": "bAdr",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20",
                    "name": "tAdr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "refAdr",
                    "type": "address"
                },
                {
                    "internalType": "contract IPcsR",
                    "name": "routerAdr",
                    "type": "address"
                }
            ],
            "internalType": "struct IPreF.AdrP",
            "name": "",
            "type": "tuple"
        },
        {
            "components": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "preRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "listMulti",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minSpend",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxSpend",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "sc",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hc",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "sTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "eTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lockDur",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "mode",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "wlTime",
                    "type": "uint256"
                }
            ],
            "internalType": "struct IPreF.UintP",
            "name": "",
            "type": "tuple"
        },
        {
            "components": [
                {
                    "internalType": "uint256",
                    "name": "liqRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "ownerRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liqInsurRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "ownerInsurRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "SC",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "AMOUNT",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liqAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cancelReason",
                    "type": "uint256"
                }
            ],
            "internalType": "struct IPreF.UUintP",
            "name": "",
            "type": "tuple"
        },
        {
            "components": [
                {
                    "internalType": "bool",
                    "name": "insured",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "returnLeft",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "canceled",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "finished",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isEth",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "isRef",
                    "type": "bool"
                }
            ],
            "internalType": "struct IPreF.BoolP",
            "name": "",
            "type": "tuple"
        },
        {
            "components": [
                {
                    "internalType": "uint256",
                    "name": "bDepoTot",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bWithTot",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tAllocTot",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bResTot",
                    "type": "uint256"
                }
            ],
            "internalType": "struct IPreF.PreS",
            "name": "",
            "type": "tuple"
        },
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "pAdr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "iAmountTot",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "bAmount_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "status",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reportTime",
                    "type": "uint256"
                }
            ],
            "internalType": "struct IPreU.PreI",
            "name": "",
            "type": "tuple"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}]

const presaleFactory = [{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "SP",
    "outputs": [
        {
            "internalType": "string",
            "name": "website",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "telegram",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "twitter",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "discord",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "medium",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "reddit",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "logo",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "banner",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "detail",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "kyc",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "color",
            "type": "string"
        },
        {
            "internalType": "string",
            "name": "premiumBanner",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}]

const IERC20 = [
    {
        "constant": true,
        "inputs": [

        ],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
const axios = require('axios')
const api = new telegram({
    token: '5429101016:AAFmwpcpkIUPt8xKZCXwt4knY7fZGSAMPJQ',
    updates: {
        enabled: true,
        get_interval: 1000
    }
});



async function BSC_TESTNET() {
    const web3 = new Web3("https://data-seed-prebsc-1-s3.binance.org:8545")
    const presaleViewContract = "0x96FF09728236EDd7D8d3AcDaE61B62108425D8dd"
    const presaleFactoryContract = "0x80687BFE8E7df30D890eAc9be3cb779062b43841"
    const presaleAdminContract = "0xBb06C786ef1567b05463EA9c6318240cd5B5aEB3"
    const pAdmin = new web3.eth.Contract(presaleAdmin, presaleAdminContract);
    const pools = (await pAdmin.methods.getPresales("0x0000000000000000000000000000000000000000", 0, 0).call())[3];
    const getData = await axios.request({ method: 'POST', url: 'https://welaunch.app/api/short', data: { req: "checkPresale", data: { presale: pools }, chain: 'BSC-tsnt', key: "q00Szz12300q@@@'?.,,,/1qq" } })
    const pool = getData.data.data
    pool.map(async (id) => {
        const pView = new web3.eth.Contract(presaleView, presaleViewContract);
        const pData = new web3.eth.Contract(presaleFactory, presaleFactoryContract);

        const [string, x] = await Promise.all([
            await pData.methods.SP(id).call(),
            await pView.methods.getPresaleFactory(id).call(),
        ]);
        const uint = x[1]
        const tokenAddress = x[0].tAdr

        const mode = uint.mode
        const startTime = uint.sTime


        const TG = string.telegram
        const logo = string.logo
        const Website = string.website
        const Medium = string.medium
        const Discord = string.discord
        const Reddit = string.reddit
        const Twitter = string.twitter

        const pToken = new web3.eth.Contract(IERC20, tokenAddress);
        const Name = await pToken.methods.name().call()
        const Symbol = await pToken.methods.symbol().call()

        const softCap = uint.sc / 10 ** 18
        const hardCap = uint.hc / 10 ** 18
        let presaleRate = 0
        if (mode == 0) {
            presaleRate = uint.preRate / 10000 / 10 ** 18;
        } else if (mode == 1) {
            presaleRate = "N/A"
        }
        const listingRate = uint.listMulti / 10000;

        const getData = await axios.request({ method: 'POST', url: 'https://welaunch.app/api/short', data: { req: "shortlink", address: id, name: Name, chain: "BSC-tsnt", key: "q00Szz12300q@@@'?.,,,/1qq" } })
        const links = getData.data.data
        let target = new Date(startTime * 1000);
        target = new Date(
            target.getUTCFullYear(),
            target.getUTCMonth(),
            target.getUTCDate(),
            target.getUTCHours(),
            target.getUTCMinutes(),
            target.getUTCSeconds()
        );
        const UTCtime = target.toString()

        let schc = `*Soft/Hard Cap* : ${softCap} BNB / ${hardCap} BNB`
        let modes = "Presale"
        if (mode == 1) modes = "Fair Launch"
        if (mode == 1) schc = `*Soft Cap* : ${softCap} BNB`

        try {
            nodeHtmlToImage({
                output: `imagg/${id}.png`,
                html: `<html><head>    <style>        .container {            position: relative;            text-align: center;            color: white;        }        body {            width: 1800;            height: 600px;            margin: unset;            font-family: "Poppins", monospace;        }        .bottom-left {            position: absolute;            bottom: 8px;            left: 16px;        }        .center-top {            position: absolute;            top: 29%;            left: 17.9%;            transform: translate(-50%, -50%);            font-size: 43px;            font-weight: bold;        }        .Welaunch {            position: absolute;            top: 50%;            left: 20%;            transform: translate(-50%, -50%);        }        .center {            position: absolute;            top: 50%;            left: 50%;            transform: translate(-50%, -50%);        }        .Token {            position: absolute;            width: 146px;            top: 46.6%;            right: 15.36%;            transform: translate(-50%, -50%);            max-width: 146px;            border-radius: 50%;        }        .cr {            font-size: 100px;            opacity: 0.2;        }        .collab {            position: relative;            text-align: left;            font-size: 148px;            top: 47%;            left: 56.9%;            transform: translate(-50%, -50%);            font-weight: bold;        }        .info {            font-size: 30px;        }        .time {            font-weight: bold;            font-size: 28px;            top: 87%;            left: 17.3%;        }        .skck {            position: relative;            top: 32%;            text-align: left;            font-size: 43px;            left: 56.9%;            transform: translate(-50%, -50%);            font-weight: bold;        }        .k {            top: 29%;            font-weight: normal;            font-size: 30px;            left: 57%;        }        .x {            position: absolute;            width: 86px;            top: 14.6%;            left: 30.20%;            transform: translate(-50%, -50%);            max-width: 86px;            border-radius: 50%;        }    </style>   <link rel="preconnect" href="https://fonts.googleapis.com">   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>   <link href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,800;0,900;1,100;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet"></head><body>    <div class="container" style="background-image: url(https://development-app.welaunch.app/api/rock.jpg);height: 100%;">        <div class="center-top">Upcoming Project</div>        <img class="x" src="        ${logo}        " />        <img class="Token" src="         ${logo}         " />        <div class="collab"><div>${Name}</div></div>        <div class="skck">Soft Cap ${softCap} | Hard Cap ${hardCap} BNB</div>        <div class="skck k">Listing Rate ${listingRate} ${Symbol} | Presale Rate ${presaleRate} ${Symbol}</div>        <div class="center time">            ${UTCtime.split(" ")[1]}, ${UTCtime.split(" ")[2]} ${UTCtime.split(" ")[3]} - ${(UTCtime.split(" ")[4]).split(":")[0]}:${(UTCtime.split(" ")[4]).split(":")[1]} UTC        </div>    </div></body></html>`,
            })
                .then(() => {
                    api.sendPhoto({
                        chat_id: '-1001618984356',
                        caption: `*${Name} (${Symbol}) ${modes}*\n\n*Token Address* : [BSCScan](https://bscscan.com/token/${tokenAddress}})\n${schc}\n*Presale Rate* : ${presaleRate} ${Symbol}\n*Listing Rate* : ${listingRate} ${Symbol}\n[🚀 Pool](http://www.welaunch.app/pool/${links}) | [🌐 Website](${Website}) ${TG ? ` | [💌 Telegram](${TG})` : ``} ${Medium ? ` | [📎 Medium](${Medium})` : ``} ${Reddit ? ` | [🤖 Reddit](${Reddit})` : ``} ${Discord ? ` | [🗿 Website](${Discord})` : ``} ${Twitter ? ` | [🐦 Twitter](${Twitter})` : ``}`,
                        photo: fs.createReadStream(`imagg/${id}.png`),
                        'parse_mode': 'markdown'
                    })
                })
        } catch (_) { }
    })

}

async function BSC_MAINNET() {
    const web3 = new Web3("https://data-seed-prebsc-1-s3.binance.org:8545")
    const presaleViewContract = "0x20734027DB1D2BcAD13C823ec3Ee33d6F4C802D2"
    const presaleFactoryContract = "0x2A0A2Ea3f1E3813aCfcC6dD36a41579869e3e4BC"
    const presaleAdminContract = "0xc1837c51F9B35C4be7FcB4307a00C3Ea7BA716E9"
    const pAdmin = new web3.eth.Contract(presaleAdmin, presaleAdminContract);
    const pools = (await pAdmin.methods.getPresales("0x0000000000000000000000000000000000000000", 0, 0).call())[3];
    const getData = await axios.request({ method: 'POST', url: 'https://welaunch.app/api/short', data: { req: "checkPresale", data: { presale: pools }, chain: 'BSC', key: "q00Szz12300q@@@'?.,,,/1qq" } })
    const pool = getData.data.data
    pool.map(async (id) => {
        const pView = new web3.eth.Contract(presaleView, presaleViewContract);
        const pData = new web3.eth.Contract(presaleFactory, presaleFactoryContract);

        const [string, x] = await Promise.all([
            await pData.methods.SP(id).call(),
            await pView.methods.getPresaleFactory(id).call(),
        ]);
        const uint = x[1]
        const tokenAddress = x[0].tAdr

        const mode = uint.mode
        const startTime = uint.sTime


        const TG = string.telegram
        const logo = string.logo
        const Website = string.website
        const Medium = string.medium
        const Discord = string.discord
        const Reddit = string.reddit
        const Twitter = string.twitter

        const pToken = new web3.eth.Contract(IERC20, tokenAddress);
        const Name = await pToken.methods.name().call()
        const Symbol = await pToken.methods.symbol().call()

        const softCap = uint.sc / 10 ** 18
        const hardCap = uint.hc / 10 ** 18
        let presaleRate = 0
        if (mode == 0) {
            presaleRate = uint.preRate / 10000 / 10 ** 18;
        } else if (mode == 1) {
            presaleRate = "N/A"
        }
        const listingRate = uint.listMulti / 10000;

        const getData = await axios.request({ method: 'POST', url: 'https://welaunch.app/api/short', data: { req: "shortlink", address: id, name: Name, chain: "BSC-tsnt", key: "q00Szz12300q@@@'?.,,,/1qq"} })
        const links = getData.data.data
        let target = new Date(startTime * 1000);
        target = new Date(
            target.getUTCFullYear(),
            target.getUTCMonth(),
            target.getUTCDate(),
            target.getUTCHours(),
            target.getUTCMinutes(),
            target.getUTCSeconds()
        );
        const UTCtime = target.toString()

        let schc = `*Soft/Hard Cap* : ${softCap} BNB / ${hardCap} BNB`
        let modes = "Presale"
        if (mode == 1) modes = "Fair Launch"
        if (mode == 1) schc = `*Soft Cap* : ${softCap} BNB`

        try {
            nodeHtmlToImage({
                output: `imagg/${id}.png`,
                html: `<html><head>    <style>        .container {            position: relative;            text-align: center;            color: white;        }        body {            width: 1800;            height: 600px;            margin: unset;            font-family: "Poppins", monospace;        }        .bottom-left {            position: absolute;            bottom: 8px;            left: 16px;        }        .center-top {            position: absolute;            top: 29%;            left: 17.9%;            transform: translate(-50%, -50%);            font-size: 43px;            font-weight: bold;        }        .Welaunch {            position: absolute;            top: 50%;            left: 20%;            transform: translate(-50%, -50%);        }        .center {            position: absolute;            top: 50%;            left: 50%;            transform: translate(-50%, -50%);        }        .Token {            position: absolute;            width: 146px;            top: 46.6%;            right: 15.36%;            transform: translate(-50%, -50%);            max-width: 146px;            border-radius: 50%;        }        .cr {            font-size: 100px;            opacity: 0.2;        }        .collab {            position: relative;            text-align: left;            font-size: 148px;            top: 47%;            left: 56.9%;            transform: translate(-50%, -50%);            font-weight: bold;        }        .info {            font-size: 30px;        }        .time {            font-weight: bold;            font-size: 28px;            top: 87%;            left: 17.3%;        }        .skck {            position: relative;            top: 32%;            text-align: left;            font-size: 43px;            left: 56.9%;            transform: translate(-50%, -50%);            font-weight: bold;        }        .k {            top: 29%;            font-weight: normal;            font-size: 30px;            left: 57%;        }        .x {            position: absolute;            width: 86px;            top: 14.6%;            left: 30.20%;            transform: translate(-50%, -50%);            max-width: 86px;            border-radius: 50%;        }    </style>   <link rel="preconnect" href="https://fonts.googleapis.com">   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>   <link href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,800;0,900;1,100;1,500;1,700;1,800;1,900&display=swap" rel="stylesheet"></head><body>    <div class="container" style="background-image: url(https://development-app.welaunch.app/api/rock.jpg);height: 100%;">        <div class="center-top">Upcoming Project</div>        <img class="x" src="        ${logo}        " />        <img class="Token" src="         ${logo}         " />        <div class="collab"><div>${Name}</div></div>        <div class="skck">Soft Cap ${softCap} | Hard Cap ${hardCap} BNB</div>        <div class="skck k">Listing Rate ${listingRate} ${Symbol} | Presale Rate ${presaleRate} ${Symbol}</div>        <div class="center time">            ${UTCtime.split(" ")[1]}, ${UTCtime.split(" ")[2]} ${UTCtime.split(" ")[3]} - ${(UTCtime.split(" ")[4]).split(":")[0]}:${(UTCtime.split(" ")[4]).split(":")[1]} UTC        </div>    </div></body></html>`,
            })
                .then(() => {
                    api.sendPhoto({
                        chat_id: '-1001618984356',
                        caption: `*${Name} (${Symbol}) ${modes}*\n\n*Token Address* : [BSCScan](https://bscscan.com/token/${tokenAddress}})\n${schc}\n*Presale Rate* : ${presaleRate} ${Symbol}\n*Listing Rate* : ${listingRate} ${Symbol}\n[🚀 Pool](http://www.welaunch.app/pool/${links}) | [🌐 Website](${Website}) ${TG ? ` | [💌 Telegram](${TG})` : ``} ${Medium ? ` | [📎 Medium](${Medium})` : ``} ${Reddit ? ` | [🤖 Reddit](${Reddit})` : ``} ${Discord ? ` | [🗿 Website](${Discord})` : ``} ${Twitter ? ` | [🐦 Twitter](${Twitter})` : ``}`,
                        photo: fs.createReadStream(`imagg/${id}.png`),
                        'parse_mode': 'markdown'
                    })
                })
        } catch (_) { }
    })

}

(async () => {
    let yes = true
    if (flags.chain) {
        if (flags.chain == 'bsc-tsnt') {
            setInterval(async () => {
                if(yes) {
                    yes = false
                    await BSC_TESTNET()
                    yes = true
                }
            }, 1000 )
        }else if (flags.chain == 'bsc') {
            await BSC_MAINNET()
        }
    } else {
        console.log('no info');
        return
    }
})()