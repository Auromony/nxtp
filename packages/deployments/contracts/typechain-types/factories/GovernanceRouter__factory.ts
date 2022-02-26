/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceRouter,
  GovernanceRouterInterface,
} from "../GovernanceRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_recoveryTimelock",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchHash",
        type: "bytes32",
      },
    ],
    name: "BatchExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchHash",
        type: "bytes32",
      },
    ],
    name: "BatchReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recoveryManager",
        type: "address",
      },
    ],
    name: "ExitRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recoveryManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "recoveryActiveAt",
        type: "uint256",
      },
    ],
    name: "InitiateRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previousRouter",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRouter",
        type: "bytes32",
      },
    ],
    name: "SetRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousGovernorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGovernorDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "TransferGovernor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousRecoveryManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecoveryManager",
        type: "address",
      },
    ],
    name: "TransferRecoveryManager",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "executeCallBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_localCalls",
        type: "tuple[]",
      },
      {
        internalType: "uint32[]",
        name: "_domains",
        type: "uint32[]",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[][]",
        name: "_remoteCalls",
        type: "tuple[][]",
      },
    ],
    name: "executeGovernanceActions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exitRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "governorDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inRecovery",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "inboundCallBatches",
    outputs: [
      {
        internalType: "enum GovernanceRouter.BatchStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recoveryManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initiateRecoveryTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryActiveAt",
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
    name: "recoveryManager",
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
    name: "recoveryTimelock",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "routers",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterGlobal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newRecoveryManager",
        type: "address",
      },
    ],
    name: "transferRecoveryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200300b3803806200300b833981016040819052620000349162000048565b63ffffffff90911660805260a05262000081565b600080604083850312156200005c57600080fd5b825163ffffffff811681146200007157600080fd5b6020939093015192949293505050565b60805160a051612f3a620000d16000396000818161029501526105230152600081816102e2015281816106d50152818161072101528181610e0901528181610f19015261186f0152612f3a6000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806366cf8fab116100c3578063db2021ae1161007c578063db2021ae14610317578063de314b191461032a578063e54292981461033d578063e6b3d94914610346578063f05151df14610359578063ffa1ad741461037157600080fd5b806366cf8fab1461027d578063670a43c41461029057806381dccd56146102b757806383a60386146102ca5780638d3638f4146102dd578063ab2dc3f51461030457600080fd5b8063316c92b611610115578063316c92b6146102085780633339df961461021057806341bdc8b514610223578063485cc955146102365780635585416c1461024957806363706be31461027557600080fd5b80630c340a24146101525780630ce219951461018257806313555d89146101975780632ead72f6146101c75780633046819d146101f5575b600080fd5b600354610165906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610195610190366004612622565b61038b565b005b6101ba6101a536600461264e565b60076020526000908152604090205460ff1681565b604051610179919061269b565b6101e76101d53660046126ae565b60056020526000908152604090205481565b604051908152602001610179565b610195610203366004612622565b61041b565b61019561047e565b600454610165906001600160a01b031681565b6101956102313660046126e0565b61058e565b6101956102443660046126fd565b610629565b60035461026090600160a01b900463ffffffff1681565b60405163ffffffff9091168152602001610179565b610195610829565b61026061028b36600461264e565b6108e2565b6101e77f000000000000000000000000000000000000000000000000000000000000000081565b6101956102c5366004612782565b61091c565b6101956102d836600461281c565b610b21565b6102607f000000000000000000000000000000000000000000000000000000000000000081565b610195610312366004612915565b610c15565b610195610325366004612981565b610dae565b600254610165906001600160a01b031681565b6101e760015481565b6101956103543660046126e0565b610e70565b610361610ef6565b6040519015158152602001610179565b610379600081565b60405160ff9091168152602001610179565b610393610ef6565b6103d9576003546001600160a01b03163314806103af57503330145b6103d45760405162461bcd60e51b81526004016103cb9061299f565b60405180910390fd5b61040d565b6002546001600160a01b03163314806103f157503330145b61040d5760405162461bcd60e51b81526004016103cb906129cd565b6104178282610f17565b5050565b6003546001600160a01b031633148061043357503330145b61044f5760405162461bcd60e51b81526004016103cb9061299f565b610457610ef6565b156104745760405162461bcd60e51b81526004016103cb90612a04565b6104178282611088565b610486610ef6565b156104a35760405162461bcd60e51b81526004016103cb90612a04565b6002546001600160a01b031633146104cd5760405162461bcd60e51b81526004016103cb906129cd565b6001541561051d5760405162461bcd60e51b815260206004820152601a60248201527f7265636f7665727920616c726561647920696e6974696174656400000000000060448201526064016103cb565b610547427f00000000000000000000000000000000000000000000000000000000000000006112c2565b60018190556002546040519182526001600160a01b0316907f4c75781638d2c3a22c08e1295107f831b97683d017a1145733b743479a2ae2259060200160405180910390a2565b610596610ef6565b6105d3576003546001600160a01b03163314806105b257503330145b6105ce5760405162461bcd60e51b81526004016103cb9061299f565b610607565b6002546001600160a01b03163314806105eb57503330145b6106075760405162461bcd60e51b81526004016103cb906129cd565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff166106445760005460ff1615610648565b303b155b6106ab5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016103cb565b600054610100900460ff161580156106cd576000805461ffff19166101011790555b3360016106fb7f000000000000000000000000000000000000000000000000000000000000000083836112d5565b600280546001600160a01b0319166001600160a01b03861617905561071f8561058e565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16600460009054906101000a90046001600160a01b03166001600160a01b0316638d3638f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015610799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bd9190612a29565b63ffffffff16146108105760405162461bcd60e51b815260206004820181905260248201527f58417070436f6e6e656374696f6e4d616e616765722062616420646f6d61696e60448201526064016103cb565b50508015610824576000805461ff00191690555b505050565b6002546001600160a01b031633146108535760405162461bcd60e51b81526004016103cb906129cd565b60015461089b5760405162461bcd60e51b81526020600482015260166024820152751c9958dbdd995c9e481b9bdd081a5b9a5d1a585d195960521b60448201526064016103cb565b60006001556002546040516001600160a01b0390911681527f5397c02652a688dd1cac8544f233b3daaf96d7a9f974af80b70ab1538359e2619060200160405180910390a1565b600681815481106108f257600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b610924610ef6565b610961576003546001600160a01b031633148061094057503330145b61095c5760405162461bcd60e51b81526004016103cb9061299f565b610995565b6002546001600160a01b031633148061097957503330145b6109955760405162461bcd60e51b81526004016103cb906129cd565b8281146109f05760405162461bcd60e51b8152602060048201526024808201527f21646f6d61696e73206c656e677468206d6174636865732063616c6c73206c656044820152630dccee8d60e31b60648201526084016103cb565b801580610a025750610a00610ef6565b155b610a4e5760405162461bcd60e51b815260206004820152601e60248201527f2172656d6f74652063616c6c7320696e207265636f76657279206d6f6465000060448201526064016103cb565b60005b85811015610aa157610a8e878783818110610a6e57610a6e612a46565b9050602002810190610a809190612a5c565b610a8990612aeb565b611392565b5080610a9981612b0d565b915050610a51565b5060005b81811015610b18576000858583818110610ac157610ac1612a46565b9050602002016020810190610ad691906126ae565b9050610b0581858585818110610aee57610aee612a46565b9050602002810190610b009190612b28565b61143e565b5080610b1081612b0d565b915050610aa5565b50505050505050565b6000610b35610b308385612b72565b611599565b9050600160008281526007602052604090205460ff166002811115610b5c57610b5c612667565b14610b9a5760405162461bcd60e51b815260206004820152600e60248201526d2162617463682070656e64696e6760901b60448201526064016103cb565b6000818152600760205260408120805460ff191660021790555b82811015610be457610bd1848483818110610a6e57610a6e612a46565b5080610bdc81612b0d565b915050610bb4565b5060405181907ffd25380fa53b9867466f740cc7f96b7f5ab3483d4e786b1a59d02b20ad944d3090600090a2505050565b60048054604051635190bc5360e01b815233928101929092526001600160a01b031690635190bc5390602401602060405180830381865afa158015610c5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c829190612bf6565b610cb95760405162461bcd60e51b8152602060048201526008602482015267217265706c69636160c01b60448201526064016103cb565b8382610cc582826116e0565b610d035760405162461bcd60e51b815260206004820152600f60248201526e10b3b7bb32b93737b92937baba32b960891b60448201526064016103cb565b6000610d0f848261171c565b90506000610d2262ffffff198316611740565b905062ffffff1980821614610d4157610d3a8161177a565b5050610da6565b610d5062ffffff19831661181a565b905062ffffff1980821614610d6857610d3a81611834565b60405162461bcd60e51b81526020600482015260136024820152722176616c6964206d657373616765207479706560681b60448201526064016103cb565b505050505050565b6003546001600160a01b0316331480610dc657503330145b610de25760405162461bcd60e51b81526004016103cb9061299f565b610dea610ef6565b15610e075760405162461bcd60e51b81526004016103cb90612a04565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811690831614610e3f8383836112d5565b8015610e4a57505050565b6000610e5f846001600160a01b0385166118a5565b9050610e6a816118d2565b50505050565b6002546001600160a01b03163314610e9a5760405162461bcd60e51b81526004016103cb906129cd565b6002546040516001600160a01b038084169216907f3b3f758030fa296b85e15008f79cd22af8ffd2a7dd360d8963dcaf8e9fa2b5ff90600090a3600280546001600160a01b0319166001600160a01b0392909216919091179055565b600154600090801580159042831115908290610f0f5750805b935050505090565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff9081169083161415610f8a5760405162461bcd60e51b815260206004820152601660248201527531b0b713ba1039b2ba103637b1b0b6103937baba32b960511b60448201526064016103cb565b63ffffffff821660009081526005602052604090205481610fc957610fae83611a98565b63ffffffff8316600090815260056020526040812055611042565b8061102957600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f6008820401805460079092166004026101000a63ffffffff81810219909316928616029190911790555b63ffffffff831660009081526005602052604090208290555b604080518281526020810184905263ffffffff8516917fe1cc453e5e6d48a5e3dd7dc6c72117211d2bea20fbb91fd980ebc3e7f73fe546910160405180910390a2505050565b6000600460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111019190612c18565b60408051600180825281830190925291925060009190816020015b60408051808201909152600081526060602082015281526020019060019003908161111c5790505060405163ffffffff861660248201526044810185905290915060640160408051601f198184030181529190526020810180516001600160e01b0316630ce2199560e01b1790528151829060009061119d5761119d612a46565b60200260200101516020018190525060005b6006548110156112b7576000600682815481106111ce576111ce612a46565b6000918252602090912060088204015460079091166004026101000a900463ffffffff16905080156112a45763ffffffff811660009081526005602052604081205484519091829186919061122557611225612a46565b602090810291909101015152600061123c85611b3a565b60405163fa31de0160e01b81529091506001600160a01b0387169063fa31de019061126f90869086908690600401612c8d565b600060405180830381600087803b15801561128957600080fd5b505af115801561129d573d6000803e3d6000fd5b5050505050505b50806112af81612b0d565b9150506111af565b50610e6a8484610f17565b60006112ce8284612cb2565b9392505050565b806112e5576112e383611b6e565b505b6000816112f35760006112f5565b825b6003546040805163ffffffff600160a01b840481168252881660208201529293506001600160a01b03808516939216917f4daaa39e87dee84708195369c30e97baa0665dc8562ac10535a0f3a9329943aa910160405180910390a3600380546001600160c01b031916600160a01b63ffffffff96909616959095026001600160a01b031916949094176001600160a01b0391909116179092555050565b80516060906000816001600160a01b031684602001516040516113b59190612cca565b6000604051808303816000865af19150503d80600081146113f2576040519150601f19603f3d011682016040523d82523d6000602084013e6113f7565b606091505b5093509050806114375760405162461bcd60e51b815260206004820152600b60248201526a18d85b1b0819985a5b195960aa1b60448201526064016103cb565b5050919050565b6003546001600160a01b031633148061145657503330145b6114725760405162461bcd60e51b81526004016103cb9061299f565b61147a610ef6565b156114975760405162461bcd60e51b81526004016103cb90612a04565b60006114a284611b6e565b905060006114b86114b38486612b72565b611b3a565b9050600460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561150d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115319190612c18565b6001600160a01b031663fa31de018684846040518463ffffffff1660e01b815260040161156093929190612c8d565b600060405180830381600087803b15801561157a57600080fd5b505af115801561158e573d6000803e3d6000fd5b505050505050505050565b600080600183516115aa9190612cb2565b67ffffffffffffffff8111156115c2576115c261285e565b6040519080825280602002602001820160405280156115eb578160200160208202803683370190505b50905061162e60008451604051602001611618919060f89190911b6001600160f81b031916815260010190565b60408051601f198184030181529190529061171c565b8160008151811061164157611641612a46565b62ffffff199092166020928302919091019091015260005b83518110156116c75761168484828151811061167757611677612a46565b6020026020010151611bc0565b82611690600184612cb2565b815181106116a0576116a0612a46565b62ffffff1990921660209283029190910190910152806116bf81612b0d565b915050611659565b506116d181611be4565b80519060200120915050919050565b60035460009063ffffffff848116600160a01b909204161480156112ce57505063ffffffff919091166000908152600560205260409020541490565b81516000906020840161173764ffffffffff85168284611c40565b95945050505050565b600061174b82611c84565b156117705761176a60015b60d81b6301000000600160d81b0384161790565b92915050565b62ffffff1961176a565b80600161178f815b62ffffff19841690611cbd565b5060006117a162ffffff198516611d96565b9050600160008281526007602052604090205460ff1660028111156117c8576117c8612667565b14156117d45750505050565b600081815260076020526040808220805460ff191660011790555182917f357dd0036128fbb39edbaa45e047e2504db3824b0fa37389a29a2df577b6318a91a250505050565b600061182582611dab565b156117705761176a6002611756565b80600261184081611782565b50600061185262ffffff198516611dd8565b9050600061186b61186862ffffff198716611ded565b90565b90507f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811690831614610da68383836112d5565b60606112ce6118cd6118c860006002878760405160200161161893929190612cdc565b611e02565b611e1b565b6000600460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611927573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194b9190612c18565b905060005b60065481101561082457600063ffffffff166006828154811061197557611975612a46565b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614611a8657816001600160a01b031663fa31de01600683815481106119c0576119c0612a46565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff1660056000600686815481106119fd576119fd612a46565b6000918252602080832060088304015463ffffffff6004600790941684026101000a909104168452830193909352604091820190205490516001600160e01b031960e086901b168152611a539392899101612c8d565b600060405180830381600087803b158015611a6d57600080fd5b505af1158015611a81573d6000803e3d6000fd5b505050505b80611a9081612b0d565b915050611950565b60005b600654811015610417578163ffffffff1660068281548110611abf57611abf612a46565b6000918252602090912060088204015460079091166004026101000a900463ffffffff161415611b285760068181548110611afc57611afc612a46565b90600052602060002090600891828204019190066004026101000a81549063ffffffff02191690555050565b80611b3281612b0d565b915050611a9b565b60606001611b4783611599565b604051602001611b58929190612d0d565b6040516020818303038152906040529050919050565b63ffffffff811660009081526005602052604090205480611bbb5760405162461bcd60e51b815260206004820152600760248201526610b937baba32b960c91b60448201526064016103cb565b919050565b8051602080830151805160405160009461176a948694611618949293909101612d29565b6040516060906000611c0084611bfb846020612cb2565b611e6b565b90506000611c178260181c6001600160601b031690565b6001600160601b031690506000611c2d83611f0a565b9184525082016020016040525092915050565b600080611c4d84846112c2565b9050604051811115611c5d575060005b80611c6f5762ffffff199150506112ce565b5050606092831b9190911790911b1760181b90565b60006001611c9183611f20565b60ff1614801561176a575060216001600160601b03601884901c165b6001600160601b03161492915050565b6000611cc98383611f34565b611d8f576000611ce8611cdc8560d81c90565b64ffffffffff16611f57565b9150506000611cfd8464ffffffffff16611f57565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b81526004016103cb9190612d62565b5090919050565b600061176a62ffffff19831660016020612017565b60006002611db883611f20565b60ff1614801561176a575060256001600160601b03601884901c16611cad565b600061176a62ffffff19831660016004612170565b600061176a62ffffff19831660056020612017565b600061176a611e108361181a565b62ffffff19166121a0565b6060600080611e338460181c6001600160601b031690565b60405193508392506001600160601b03169050611e5a84611e55846020612cb2565b6121fb565b508181016020016040529052919050565b600060405182811115611e7e5760206060fd5b506000805b8451811015611ef7576000858281518110611ea057611ea0612a46565b60200260200101519050611eba818487611e559190612cb2565b50611ece8160181c6001600160601b031690565b611ee1906001600160601b031684612cb2565b9250508080611eef90612b0d565b915050611e83565b50606083901b811760181b949350505050565b6000611f158261235d565b61176a906020612d75565b600061176a62ffffff198316826001612170565b60008164ffffffffff16611f488460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff161115611fb5576000611f76826008612d94565b60ff1685901c9050611f8781612392565b61ffff16841793508160ff16601014611fa257601084901b93505b50611fae600182612dbd565b9050611f5d565b50600f5b60ff8160ff161015612011576000611fd2826008612d94565b60ff1685901c9050611fe381612392565b61ffff16831792508160ff16600014611ffe57601083901b92505b5061200a600182612dbd565b9050611fb9565b50915091565b600060ff8216612029575060006112ce565b61203c8460181c6001600160601b031690565b6001600160601b03166120528460ff85166112c2565b11156120b65761209d61206e8560781c6001600160601b031690565b6001600160601b031661208a8660181c6001600160601b031690565b6001600160601b0316858560ff166123c4565b60405162461bcd60e51b81526004016103cb9190612d62565b60208260ff1611156121305760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e20333220627974657300000000000060648201526084016103cb565b6008820260006121498660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600061217d826020612dbd565b612188906008612d94565b60ff16612196858585612017565b901c949350505050565b60006121ab82612432565b6121f75760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c65640000000000000060448201526064016103cb565b5090565b600062ffffff1980841614156122645760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b60648201526084016103cb565b61226d83612432565b6122cd5760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b60648201526084016103cb565b60006122e28460181c6001600160601b031690565b6001600160601b0316905060006123028560781c6001600160601b031690565b6001600160601b0316905060006040519050848111156123225760206060fd5b8285848460045afa506123536123388760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b9695505050505050565b6000602061238860206123798560181c6001600160601b031690565b6001600160601b0316906112c2565b61176a9190612de0565b60006123a460048360ff16901c612470565b60ff1661ffff919091161760081b6123bb82612470565b60ff1617919050565b606060006123d186611f57565b91505060006123df86611f57565b91505060006123ed86611f57565b91505060006123fb86611f57565b915050838383836040516020016124159493929190612e02565b604051602081830303815290604052945050505050949350505050565b600061243e8260d81c90565b64ffffffffff1664ffffffffff141561245957506000919050565b6000612464836125cc565b60405110199392505050565b600060f08083179060ff8216141561248b5750603092915050565b8060ff1660f114156124a05750603192915050565b8060ff1660f214156124b55750603292915050565b8060ff1660f314156124ca5750603392915050565b8060ff1660f414156124df5750603492915050565b8060ff1660f514156124f45750603592915050565b8060ff1660f614156125095750603692915050565b8060ff1660f7141561251e5750603792915050565b8060ff1660f814156125335750603892915050565b8060ff1660f914156125485750603992915050565b8060ff1660fa141561255d5750606192915050565b8060ff1660fb14156125725750606292915050565b8060ff1660fc14156125875750606392915050565b8060ff1660fd141561259c5750606492915050565b8060ff1660fe14156125b15750606592915050565b8060ff1660ff14156125c65750606692915050565b50919050565b60006125e18260181c6001600160601b031690565b6125f48360781c6001600160601b031690565b6125fe9190612ed9565b6001600160601b031692915050565b63ffffffff8116811461261f57600080fd5b50565b6000806040838503121561263557600080fd5b82356126408161260d565b946020939093013593505050565b60006020828403121561266057600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6003811061261f57634e487b7160e01b600052602160045260246000fd5b602081016126a88361267d565b91905290565b6000602082840312156126c057600080fd5b81356112ce8161260d565b6001600160a01b038116811461261f57600080fd5b6000602082840312156126f257600080fd5b81356112ce816126cb565b6000806040838503121561271057600080fd5b823561271b816126cb565b9150602083013561272b816126cb565b809150509250929050565b60008083601f84011261274857600080fd5b50813567ffffffffffffffff81111561276057600080fd5b6020830191508360208260051b850101111561277b57600080fd5b9250929050565b6000806000806000806060878903121561279b57600080fd5b863567ffffffffffffffff808211156127b357600080fd5b6127bf8a838b01612736565b909850965060208901359150808211156127d857600080fd5b6127e48a838b01612736565b909650945060408901359150808211156127fd57600080fd5b5061280a89828a01612736565b979a9699509497509295939492505050565b6000806020838503121561282f57600080fd5b823567ffffffffffffffff81111561284657600080fd5b61285285828601612736565b90969095509350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561289d5761289d61285e565b604052919050565b600082601f8301126128b657600080fd5b813567ffffffffffffffff8111156128d0576128d061285e565b6128e3601f8201601f1916602001612874565b8181528460208386010111156128f857600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561292b57600080fd5b84356129368161260d565b935060208501356129468161260d565b925060408501359150606085013567ffffffffffffffff81111561296957600080fd5b612975878288016128a5565b91505092959194509250565b6000806040838503121561299457600080fd5b823561271b8161260d565b602080825260149082015273109031b0b63632b210313c9033b7bb32b93737b960611b604082015260600190565b6020808252601c908201527f212063616c6c6564206279207265636f76657279206d616e6167657200000000604082015260600190565b6020808252600b908201526a696e207265636f7665727960a81b604082015260600190565b600060208284031215612a3b57600080fd5b81516112ce8161260d565b634e487b7160e01b600052603260045260246000fd5b60008235603e19833603018112612a7257600080fd5b9190910192915050565b600060408284031215612a8e57600080fd5b6040516040810167ffffffffffffffff8282108183111715612ab257612ab261285e565b81604052829350843583526020850135915080821115612ad157600080fd5b50612ade858286016128a5565b6020830152505092915050565b600061176a3683612a7c565b634e487b7160e01b600052601160045260246000fd5b6000600019821415612b2157612b21612af7565b5060010190565b6000808335601e19843603018112612b3f57600080fd5b83018035915067ffffffffffffffff821115612b5a57600080fd5b6020019150600581901b360382131561277b57600080fd5b600067ffffffffffffffff80841115612b8d57612b8d61285e565b8360051b6020612b9e818301612874565b868152918501918181019036841115612bb657600080fd5b865b84811015612bea57803586811115612bd05760008081fd5b612bdc36828b01612a7c565b845250918301918301612bb8565b50979650505050505050565b600060208284031215612c0857600080fd5b815180151581146112ce57600080fd5b600060208284031215612c2a57600080fd5b81516112ce816126cb565b60005b83811015612c50578181015183820152602001612c38565b83811115610e6a5750506000910152565b60008151808452612c79816020860160208601612c35565b601f01601f19169290920160200192915050565b63ffffffff841681528260208201526060604082015260006117376060830184612c61565b60008219821115612cc557612cc5612af7565b500190565b60008251612a72818460208701612c35565b612ce58461267d565b60f89390931b835260e09190911b6001600160e01b0319166001830152600582015260250190565b612d168361267d565b60f89290921b8252600182015260210190565b83815263ffffffff60e01b8360e01b16602082015260008251612d53816024850160208701612c35565b91909101602401949350505050565b6020815260006112ce6020830184612c61565b6000816000190483118215151615612d8f57612d8f612af7565b500290565b600060ff821660ff84168160ff0481118215151615612db557612db5612af7565b029392505050565b600060ff821660ff841680821015612dd757612dd7612af7565b90039392505050565b600082612dfd57634e487b7160e01b600052601260045260246000fd5b500490565b7f54797065644d656d566965772f696e646578202d204f76657272616e20746865815274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b60208201526001600160d01b031960d086811b821660358401526e040eed2e8d040d8cadccee8d04060f608b1b603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f666673657420306050850152600f60fb1b607085015285821b83166071850152607784015283901b166086820152601760f91b608c8201526000608d8201612353565b60006001600160601b03808316818516808303821115612efb57612efb612af7565b0194935050505056fea26469706673582212209f128942a13695ad1ed2b6258a435939727ef1e9103960e87dd267ce2ffb298164736f6c634300080b0033";

type GovernanceRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernanceRouter__factory extends ContractFactory {
  constructor(...args: GovernanceRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GovernanceRouter";
  }

  deploy(
    _localDomain: BigNumberish,
    _recoveryTimelock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceRouter> {
    return super.deploy(
      _localDomain,
      _recoveryTimelock,
      overrides || {}
    ) as Promise<GovernanceRouter>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _recoveryTimelock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _recoveryTimelock,
      overrides || {}
    );
  }
  attach(address: string): GovernanceRouter {
    return super.attach(address) as GovernanceRouter;
  }
  connect(signer: Signer): GovernanceRouter__factory {
    return super.connect(signer) as GovernanceRouter__factory;
  }
  static readonly contractName: "GovernanceRouter";
  public readonly contractName: "GovernanceRouter";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceRouterInterface {
    return new utils.Interface(_abi) as GovernanceRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceRouter {
    return new Contract(address, _abi, signerOrProvider) as GovernanceRouter;
  }
}