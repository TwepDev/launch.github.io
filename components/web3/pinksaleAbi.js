module.exports = {
    pinksaleAbi1: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Cancelled",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "volume",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalVolume",
                    "type": "uint256"
                }
            ],
            "name": "Claimed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "volume",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalVolume",
                    "type": "uint256"
                }
            ],
            "name": "Contributed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalRaised",
                    "type": "uint256"
                }
            ],
            "name": "EmergencyWithdrawContribution",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Finalized",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "kycDetails",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "KycUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "LiquidityWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "PoolUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "VestingTokenWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "WithdrawnContribution",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "_contribute",
            "outputs": [

            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "cancel",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "claim",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "claimedOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "contribute",
            "outputs": [

            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "contributeCustomCurrency",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "contributionOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "contributorVestingSettings",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "tgeReleasePct",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cycleReleasePct",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cycle",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountInWei",
                    "type": "uint256"
                }
            ],
            "name": "convert",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "distributePurchasedTokens",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "distributeRefund",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "distributedType",
                    "type": "uint8"
                }
            ],
            "name": "distributionCompleted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token_",
                    "type": "address"
                }
            ],
            "name": "emergencyWithdraw",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount_",
                    "type": "uint256"
                }
            ],
            "name": "emergencyWithdraw",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "emergencyWithdrawContribution",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "factory",
            "outputs": [
                {
                    "internalType": "contract IPoolFactory",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "finalize",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user_",
                    "type": "address"
                }
            ],
            "name": "getContributionAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "getContributionSettings",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "min",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "max",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "getContributorCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "getContributors",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "getFeeSettings",
            "outputs": [
                {
                    "internalType": "uint128",
                    "name": "currency",
                    "type": "uint128"
                },
                {
                    "internalType": "uint128",
                    "name": "token",
                    "type": "uint128"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "getNumberOfWhitelistedUsers",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "distributedType",
                    "type": "uint8"
                }
            ],
            "name": "getUndistributedIndexes",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "startIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endIndex",
                    "type": "uint256"
                }
            ],
            "name": "getWhitelistedUsers",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "currency",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "rate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256[2]",
                            "name": "contributionSetting",
                            "type": "uint256[2]"
                        },
                        {
                            "internalType": "uint256",
                            "name": "softCap",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "hardCap",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "liquidityListingRate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "liquidityLockDays",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint128",
                            "name": "liquidityPercent",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128",
                            "name": "refundType",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128[2]",
                            "name": "feePercent",
                            "type": "uint128[2]"
                        }
                    ],
                    "internalType": "struct LaunchPadStorage.PoolSettings",
                    "name": "_poolSettings",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_publicSaleStartTime",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_poolDetails",
                    "type": "string"
                }
            ],
            "name": "initialize",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "tgeReleasePct",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cycleReleasePct",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cycle",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LaunchPadStorage.ContributorVestingSettings",
                    "name": "_contributorVestingSettings",
                    "type": "tuple"
                }
            ],
            "name": "initializeContributorVesting",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "totalVestingTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tgeLockDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cycle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tgeReleasePct",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cycleReleasePct",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LaunchPadStorage.OwnerVestingSettings",
                    "name": "_ownerVestingSettings",
                    "type": "tuple"
                }
            ],
            "name": "initializeOwnerVesting",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "isGovernor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "isUserWhitelisted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "ownerVestingSettings",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalVestingTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tgeLockDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cycle",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tgeReleasePct",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cycleReleasePct",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "poolSettings",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "softCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "hardCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityListingRate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityLockDays",
                    "type": "uint256"
                },
                {
                    "internalType": "uint128",
                    "name": "liquidityPercent",
                    "type": "uint128"
                },
                {
                    "internalType": "uint128",
                    "name": "refundType",
                    "type": "uint128"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "poolStates",
            "outputs": [
                {
                    "internalType": "enum LaunchPadStorage.State",
                    "name": "state",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "finishTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalRaised",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalVolumePurchased",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "publicSaleStartTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityUnlockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalVestedTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "lockId",
                    "type": "int256"
                },
                {
                    "internalType": "string",
                    "name": "poolDetails",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "kycDetails",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "purchasedOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount_",
                    "type": "uint256"
                }
            ],
            "name": "recover",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "refundedOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "renounceOwnership",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract IUniswapV2Router02",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_publicSaleStartTime",
                    "type": "uint256"
                }
            ],
            "name": "setPublicSaleStartTime",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "users",
                    "type": "address[]"
                },
                {
                    "internalType": "bool",
                    "name": "add",
                    "type": "bool"
                }
            ],
            "name": "setWhitelistedUsers",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_minAmount",
                    "type": "uint256"
                }
            ],
            "name": "setupHoldToken",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "tgeTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "tokenHoldSettings",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "kycDetails_",
                    "type": "string"
                }
            ],
            "name": "updateKycDetails",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "details_",
                    "type": "string"
                }
            ],
            "name": "updatePoolDetails",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "version",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "withdrawCancelledTokens",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "withdrawContribution",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "withdrawVestingToken",
            "outputs": [

            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "withdrawableContributorVestingTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [

            ],
            "name": "withdrawableTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
    ],

    pinksaleAbi2: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Cancelled",
            "type": "event"
        },
        
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "volume",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalVolume",
                    "type": "uint256"
                }
            ],
            "name": "Claimed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalRaised",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Contributed",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalRaised",
                    "type": "uint256"
                }
            ],
            "name": "EmergencyWithdrawContribution",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "pair",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "Finalized",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "kycDetails",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "KycUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "LiquidityWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "PoolUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "VestingTokenWithdrawn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "WithdrawnContribution",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "amountTilRebalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cancel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "claimedOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contribute",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "contributeCustomCurrency",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "contributionOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "distributePurchasedTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "distributeRefund",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "distributedType",
                    "type": "uint8"
                }
            ],
            "name": "distributionCompleted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "token_",
                    "type": "address"
                }
            ],
            "name": "emergencyWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount_",
                    "type": "uint256"
                }
            ],
            "name": "emergencyWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "emergencyWithdrawContribution",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "factory",
            "outputs": [
                {
                    "internalType": "contract ILaunchPadFactory",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "finalize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getContributorCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "start",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "end",
                    "type": "uint256"
                }
            ],
            "name": "getContributors",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getFeeSettings",
            "outputs": [
                {
                    "internalType": "uint128",
                    "name": "currency",
                    "type": "uint128"
                },
                {
                    "internalType": "uint128",
                    "name": "token",
                    "type": "uint128"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "distributedType",
                    "type": "uint8"
                }
            ],
            "name": "getUndistributedIndexes",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "currency",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "softCap",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxOwnerReceive",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalSellingTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "liquidityLockDays",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint128",
                            "name": "liquidityPercent",
                            "type": "uint128"
                        },
                        {
                            "internalType": "uint128[2]",
                            "name": "feePercent",
                            "type": "uint128[2]"
                        }
                    ],
                    "internalType": "struct LaunchPadStorage.FairLaunchSettings",
                    "name": "_poolSettings",
                    "type": "tuple"
                },
                {
                    "internalType": "address",
                    "name": "_router",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_poolDetails",
                    "type": "string"
                }
            ],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "totalVestingTokens",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tgeLockDuration",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cycle",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "tgeReleasePct",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "cycleReleasePct",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct LaunchPadStorage.OwnerVestingSettings",
                    "name": "_ownerVestingSettings",
                    "type": "tuple"
                }
            ],
            "name": "initializeOwnerVesting",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "isGovernor",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ownerVestingSettings",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "totalVestingTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tgeLockDuration",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cycle",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tgeReleasePct",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "cycleReleasePct",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "poolSettings",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "currency",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "softCap",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxOwnerReceive",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSellingTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityLockDays",
                    "type": "uint256"
                },
                {
                    "internalType": "uint128",
                    "name": "liquidityPercent",
                    "type": "uint128"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "poolStates",
            "outputs": [
                {
                    "internalType": "enum LaunchPadStorage.State",
                    "name": "state",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "finishTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalRaised",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidityUnlockTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalVestedTokens",
                    "type": "uint256"
                },
                {
                    "internalType": "int256",
                    "name": "lockId",
                    "type": "int256"
                },
                {
                    "internalType": "string",
                    "name": "poolDetails",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "kycDetails",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "purchasedVolumeOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount_",
                    "type": "uint256"
                }
            ],
            "name": "recover",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "refundedOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "router",
            "outputs": [
                {
                    "internalType": "contract IUniswapV2Router02",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tgeTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "kycDetails_",
                    "type": "string"
                }
            ],
            "name": "updateKycDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "details_",
                    "type": "string"
                }
            ],
            "name": "updatePoolDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "version",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawCancelledTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawContribution",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawVestingToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawableTokens",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    pinksaleAbi3 : [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Cancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"volume","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalVolume","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"currency","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"volume","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalVolume","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Contributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"currency","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRaised","type":"uint256"}],"name":"EmergencyWithdrawContribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Finalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalRaised","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"FinalizedAndWithdrawFund","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"kycDetails","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"KycUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"PoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"currency","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawnContribution","type":"event"},{"inputs":[],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"contributeCustomCurrency","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributionOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contributorVestingSettings","outputs":[{"internalType":"uint256","name":"tgeReleasePct","type":"uint256"},{"internalType":"uint256","name":"cycleReleasePct","type":"uint256"},{"internalType":"uint256","name":"cycle","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountInWei","type":"uint256"}],"name":"convert","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"distributePurchasedTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"distributeRefund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"distributedType","type":"uint8"}],"name":"distributionCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"address","name":"token_","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract ILaunchPadFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finalize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user_","type":"address"}],"name":"getContributionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContributionSettings","outputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContributorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getContributors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeSettings","outputs":[{"internalType":"uint128","name":"currency","type":"uint128"},{"internalType":"uint128","name":"token","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfWhitelistedUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"distributedType","type":"uint8"}],"name":"getUndistributedIndexes","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getWhitelistedUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256[2]","name":"contributionSetting","type":"uint256[2]"},{"internalType":"uint256","name":"softCap","type":"uint256"},{"internalType":"uint256","name":"hardCap","type":"uint256"},{"internalType":"uint128","name":"liquidityPercent","type":"uint128"},{"internalType":"uint128","name":"refundType","type":"uint128"},{"internalType":"uint128[2]","name":"feePercent","type":"uint128[2]"}],"internalType":"struct LaunchPadStorage.UnlistPoolSettings","name":"_poolSettings","type":"tuple"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_publicSaleStartTime","type":"uint256"},{"internalType":"string","name":"_poolDetails","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"tgeReleasePct","type":"uint256"},{"internalType":"uint256","name":"cycleReleasePct","type":"uint256"},{"internalType":"uint256","name":"cycle","type":"uint256"}],"internalType":"struct LaunchPadStorage.ContributorVestingSettings","name":"_contributorVestingSettings","type":"tuple"}],"name":"initializeContributorVesting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isUserWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolSettings","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"currency","type":"address"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"softCap","type":"uint256"},{"internalType":"uint256","name":"hardCap","type":"uint256"},{"internalType":"uint128","name":"liquidityPercent","type":"uint128"},{"internalType":"uint128","name":"refundType","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStates","outputs":[{"internalType":"enum LaunchPadStorage.State","name":"state","type":"uint8"},{"internalType":"uint256","name":"finishTime","type":"uint256"},{"internalType":"uint256","name":"claimTime","type":"uint256"},{"internalType":"uint256","name":"totalRaised","type":"uint256"},{"internalType":"uint256","name":"totalVolumePurchased","type":"uint256"},{"internalType":"uint256","name":"publicSaleStartTime","type":"uint256"},{"internalType":"string","name":"poolDetails","type":"string"},{"internalType":"string","name":"kycDetails","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"purchasedOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"recover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"refundedOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"claimTime","type":"uint256"}],"name":"setClaimTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setEnableClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_publicSaleStartTime","type":"uint256"}],"name":"setPublicSaleStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"bool","name":"add","type":"bool"}],"name":"setWhitelistedUsers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"setupHoldToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenHoldSettings","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"kycDetails_","type":"string"}],"name":"updateKycDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"details_","type":"string"}],"name":"updatePoolDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawCancelledTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"withdrawableContributorVestingTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}] 
}