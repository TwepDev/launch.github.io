    const fs = require('fs');
    const Web3 = require('web3')
    const presaleView = getAbi("presaleViewAbi")
    const presaleFactory = getAbi("presaleFactoryAbi")
    const presaleAdmin = getAbi("presaleAdminAbi")
    const pinksaleAbi1 = getAbi("PinksaleABI1")
    const pinksaleAbi2 = getAbi("PinksaleABI2")
    const IERC20 = getAbi("IERC20")
    const axios = require('axios')

    function getAbi(x) {
        const rawdata = fs.readFileSync(`${x}.json`);
        const Data = JSON.parse(rawdata);
        return Data
    }



    const presaleViewContract = "0xe6FA63b025b9FB97cc1c2b42390696181536d345"
    const presaleAdminContract = "0x98Df47dC5366F12C0e797f56d7b32be2455b80b4"
    const presaleFactoryContract = "0x885dd7DC88A9824509dE05131bB34951Db62E91c"


    const getStringAbi = [{"inputs":[],"name":"poolStates","outputs":[{"internalType":"enum LaunchPadStorage.State","name":"state","type":"uint8"},{"internalType":"uint256","name":"finishTime","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"totalRaised","type":"uint256"},{"internalType":"uint256","name":"liquidityUnlockTime","type":"uint256"},{"internalType":"uint256","name":"totalVestedTokens","type":"uint256"},{"internalType":"int256","name":"lockId","type":"int256"},{"internalType":"string","name":"poolDetails","type":"string"},{"internalType":"string","name":"kycDetails","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalNumberOfPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"version","type":"uint8"}],"name":"getTotalNumberOfPools","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPoolAt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPoolAt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

    let totalPinksalePool = []
    async function Pinksale(web3, c) {
        try{
            const checkContract = new web3.eth.Contract(pinksaleAbi1, c);
            const version = await checkContract.methods.version().call();
            if(version >= 27) {
                const checkContract = new web3.eth.Contract(pinksaleAbi2, c);
                const stringDetail = await checkContract.methods.poolStates().call();
                const uintDetail = await checkContract.methods.poolSettings().call();
                const curr = uintDetail.currency
                if(curr == "0x0000000000000000000000000000000000000000") {
                    const presaleAddress = c;
                    const filled = +stringDetail.totalRaised;
                    const token = uintDetail.token
                    const pToken = new web3.eth.Contract(IERC20, token);
                    const symbol = await pToken.methods.symbol().call()
                    const hourLeft = +uintDetail.endTime * 86400
                    const points = filled / hourLeft
                    if(points > 0) {
                        totalPinksalePool.push({
                            address : presaleAddress,
                            points,
                            symbol
                        })
                    }

                }
            }else {
                const checkContract = new web3.eth.Contract(pinksaleAbi1, c);
                const stringDetail = await checkContract.methods.poolStates().call();
                const uintDetail = await checkContract.methods.poolSettings().call();
                const curr = uintDetail.currency
                if(curr == "0x0000000000000000000000000000000000000000") {
                    const filled = +stringDetail.totalRaised;
                    const hourLeft = +uintDetail.endTime * 86400
                    const points = filled / hourLeft
                    if(points > 0) {
                        totalPinksalePool.push({
                            address : presaleAddress,
                            points
                        })
                    }
                }
            }
        }catch(_){}
    }
    async function getPinksale() {
        const web3 = new Web3("https://bsc-dataseed1.binance.org");
        const pinksaleContract = new web3.eth.Contract(getStringAbi, "0x3338CCa60f829Fa7139656bB910c63D44aFD270A");
        const totalPool = Number(await pinksaleContract.methods.getTotalNumberOfPools().call()) - 6
        const now = totalPool - 80
        for(let i = now; i < totalPool ; i++) {
            const contract = await pinksaleContract.methods.getPoolAt(i).call();
            await Pinksale(web3, contract)
        }
    }

    async function setPresaleDatas() {
        await getPinksale();
    }

    async function getDxsale() {
      const WEB_JS = "https://cdnjs.cloudflare.com/ajax/libs/web3/1.8.1/web3.min.js";
      var script = document.createElement('script');
      script.src = WEB_JS;
      document.head.appendChild(script);

      async function getDxsale() {
        let DEPLOYER_ABI_STR = '[{\"inputs\":[],\"name\":\"getNumberOfPresaleOwners\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"presaleOwners\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"presales\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"exists\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"createdOn\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"presaleInfoAddr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"presaleAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"governor\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"startTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"govPercentage\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"uniswapDep\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"uniswapPercentage\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"uniswapRate\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lp_locked\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]';
        DEPLOYER_ABI_STR = JSON.parse(DEPLOYER_ABI_STR);
        let INFO_ABI_STR = '[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"infoManager","outputs":[{"name":"","type":"uint"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint[]"},{"name":"","type":"string"},{"name":"","type":"uint[]"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint"}],"payable":false,"stateMutability":"view","type":"function"}]';
        INFO_ABI_STR = JSON.parse(INFO_ABI_STR);

        const web3 = new Web3("https://bsc-dataseed1.binance.org");
        const dAdr = '0x7100c01f668a5B407dB6A77821DDB035561F25B8'; // "0xc5fE280422117461af9b953Da413e9627E3b9a40"
        const dC = new web3.eth.Contract(DEPLOYER_ABI_STR, dAdr);
        const n = await dC['methods']['getNumberOfPresaleOwners']().call()

        for (let i = 1; i < 2; i++) {
          let pOwner = await dC['methods']['presaleOwners'](n - i).call();
          let info = await dC['methods']['presales'](pOwner).call();
          let pAdr = info['presaleAddress'];
          let piAdr = info['presaleInfoAddr'];
          let pC = new web3.eth.Contract(INFO_ABI_STR, piAdr);
          let result = await pC['methods']['infoManager'](pOwner).call();
        }
      }

      //(async function () {
      //  await getDxsale();
      //})();

    }
    
    async function getTrending() {
        const web3 = new Web3("https://bsc-dataseed1.binance.org");
        const checkContract = new web3.eth.Contract(pinksaleAbi1,"0x1b511715a22a99299882439944a2b8e09071dff3");
            const version = await checkContract.methods.contributionOf("0xC1293d2A92a2ddCC3A38d5B061DD3aCa35F4d715").call()
            console.log(version);
        const options = {
            method: 'GET',
            url: 'https://pinksale-trending.s3.amazonaws.com/trending.json',
            headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Language': 'en,id-ID;q=0.9,id;q=0.8,en-US;q=0.7',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            'If-Modified-Since': 'Wed, 28 Dec 2022 13:52:12 GMT',
            'If-None-Match': '"02a7a08b021ac38b25af131193d45280"',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Content-Encoding': 'gzip'
            }
        };
        
        const dataX = await axios.request(options)
        const f = dataX.data.data
        const z = []
        for(let i =0; i< f.length;i++) {
            z.push({
                address : f[i].address,
                symbol : f[i].token
            })
        }
        fs.writeFile('BSC-trend.json', JSON.stringify(z), function(){

            totalPinksalePool = []
        })
        
    }

    async function start() {
        const web3 = new Web3("https://data-seed-prebsc-1-s3.binance.org:8545")
        const pAdmin = new web3.eth.Contract(presaleAdmin, presaleAdminContract);
        const pools = (await pAdmin.methods.getPresales("0x0000000000000000000000000000000000000000", 0, 0).call())[3];
        const totalTrending = []
        pools.map(async (id) => {
            const pView = new web3.eth.Contract(presaleView, presaleViewContract);
            const status = (await pView.methods.getPresaleStatus(id).call())[3]
                if(status != 0 || status == 1) {
                    const pviewData = await pView.methods.getPresaleFactory(id).call()
                const pFactory = new web3.eth.Contract(presaleFactory, presaleFactoryContract);
                const stringData = await pFactory.methods.SP(id).call()
                if(!stringData.kyc) {
                    const uint2 = pviewData[2]
                    let points = 0
                    let liq = uint2.liqRate / 100
                    if(uint2.liqInsurRate) {
                        points += 100
                        liq = liq = liq
                    }
                    if(liq >= 50 && liq <= 60 ) {
                        points += 20
                    }else if(liq >= 60 && liq <= 80 ) {
                        points += 40
                    }else if(liq >= 80 && liq <= 100 ) {
                        points += 50
                    }
                    const tokenAddress = pviewData[0].tAdr
                    const pToken = new web3.eth.Contract(IERC20, tokenAddress);
                    const symbol = await pToken.methods.symbol().call()
                    totalTrending.push({
                        address : id,
                        points,
                        symbol
                    })
                }
                }
            })
    }

    (async () => {
        let yes = true
    setInterval(async () => {
        if(yes) {
            yes = false
            await getTrending()
            yes = true
        }
    }, 1000 )
    })()