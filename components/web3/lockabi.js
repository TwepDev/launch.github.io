module.exports = {
    lockAbi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "previousAdmin",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "newAdmin",
            type: "address",
          },
        ],
        name: "AdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "beacon",
            type: "address",
          },
        ],
        name: "BeaconUpgraded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "unlockDate",
            type: "uint256",
          },
        ],
        name: "LockAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "unlockedAt",
            type: "uint256",
          },
        ],
        name: "LockRemoved",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newAmount",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "newUnlockDate",
            type: "uint256",
          },
        ],
        name: "LockUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "implementation",
            type: "address",
          },
        ],
        name: "Upgraded",
        type: "event",
      },
      {
        inputs: [],
        name: "allLocks",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "allLpTokenLockedCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "allNormalTokenLockedCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "cumulativeLockInfo",
        outputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "factory",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "lockId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newUnlockDate",
            type: "uint256",
          },
        ],
        name: "editLock",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "fee",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        name: "getCumulativeLpTokenLockInfo",
        outputs: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "factory",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.CumulativeLockInfo[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "getCumulativeLpTokenLockInfoAt",
        outputs: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "factory",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.CumulativeLockInfo",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        name: "getCumulativeNormalTokenLockInfo",
        outputs: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "factory",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.CumulativeLockInfo[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "getCumulativeNormalTokenLockInfoAt",
        outputs: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "factory",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.CumulativeLockInfo",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "getLock",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        name: "getLocksForToken",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getTotalLockCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_poolManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_fee",
            type: "uint256",
          },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isLpToken",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unlockDate",
            type: "uint256",
          },
        ],
        name: "lock",
        outputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "lpLockCountForUser",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "lpLockForUserAtIndex",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "lpLocksForUser",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "normalLockCountForUser",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "normalLockForUserAtIndex",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "normalLocksForUser",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "id",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lockDate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unlockDate",
                type: "uint256",
              },
            ],
            internalType: "struct ILock.Lock[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "poolManager",
        outputs: [
          {
            internalType: "contract OManager",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "proxiableUUID",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "newFee",
            type: "uint256",
          },
        ],
        name: "setFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_poolManager",
            type: "address",
          },
        ],
        name: "setPoolManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
        ],
        name: "totalLockCountForToken",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
        ],
        name: "totalLockCountForUser",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalTokenLockedCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "lockId",
            type: "uint256",
          },
        ],
        name: "unlock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newImplementation",
            type: "address",
          },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newImplementation",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "withdrawFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  };
  