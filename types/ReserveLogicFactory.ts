/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ReserveLogic } from "./ReserveLogic";

export class ReserveLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ReserveLogic> {
    return super.deploy(overrides) as Promise<ReserveLogic>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ReserveLogic {
    return super.attach(address) as ReserveLogic;
  }
  connect(signer: Signer): ReserveLogicFactory {
    return super.connect(signer) as ReserveLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveLogic {
    return new Contract(address, _abi, signerOrProvider) as ReserveLogic;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256"
      }
    ],
    name: "ReserveDataUpdated",
    type: "event"
  }
];

const _bytecode =
  "0x610d9d610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c80639ada2ceb14610071578063a0237264146100af578063d9c477cc146100fc578063e1219abf14610119578063f15e3b2114610145578063f77efa6e1461018c575b600080fd5b61009d6004803603604081101561008757600080fd5b50803590602001356001600160a01b03166101af565b60408051918252519081900360200190f35b8180156100bb57600080fd5b506100fa600480360360a08110156100d257600080fd5b508035906001600160a01b036020820135169060408101359060608101359060800135610214565b005b61009d6004803603602081101561011257600080fd5b5035610260565b61009d6004803603604081101561012f57600080fd5b50803590602001356001600160a01b03166102fe565b81801561015157600080fd5b506100fa6004803603608081101561016857600080fd5b508035906001600160a01b0360208201351690604081013590606001351515610338565b61009d600480360360408110156101a257600080fd5b5080359060200135610359565b6000806101bb84610377565b9050806101cc57600091505061020e565b60006101e76001600160a01b0385163063ffffffff61047716565b90506102096101fc828463ffffffff61052116565b839063ffffffff61057b16565b925050505b92915050565b61021d856105bf565b600061023861022b87610377565b859063ffffffff61052116565b905061024b86828563ffffffff61065716565b61025886868560006106b5565b505050505050565b60008160020154600014156102f25781600c0160009054906101000a90046001600160a01b03166001600160a01b03166334762ca56040518163ffffffff1660e01b815260040160206040518083038186803b1580156102bf57600080fd5b505afa1580156102d3573d6000803e3d6000fd5b505050506040513d60208110156102e957600080fd5b505190506102f9565b5060028101545b919050565b600061033161030c84610377565b6103256001600160a01b0385163063ffffffff61047716565b9063ffffffff61052116565b9392505050565b610341846105bf565b806103535761035384846000856106b5565b50505050565b60008260030154600014610371578260030154610331565b50919050565b600061020e82600b0160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103cc57600080fd5b505afa1580156103e0573d6000803e3d6000fd5b505050506040513d60208110156103f657600080fd5b5051600a840154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b15801561043f57600080fd5b505afa158015610453573d6000803e3d6000fd5b505050506040513d602081101561046957600080fd5b50519063ffffffff61052116565b6000610482836109e5565b1561049857506001600160a01b0381163161020e565b826001600160a01b03166370a08231836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156104ee57600080fd5b505afa158015610502573d6000803e3d6000fd5b505050506040513d602081101561051857600080fd5b5051905061020e565b600082820183811015610331576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000600282046105b7836105ab61059e876b033b2e3c9fd0803ce8000000610a1b565b849063ffffffff61052116565b9063ffffffff610a7416565b949350505050565b60006105ca82610377565b90508015610653576001820154600c8301546000916105f691600160a01b900464ffffffffff16610ab6565b835490915061060c90829063ffffffff610b0116565b83556002830154600c84015460009161063291600160a01b900464ffffffffff16610b39565b905061064b846004015482610b0190919063ffffffff16565b600485015550505b5050565b600061067a61066584610b88565b61066e84610b88565b9063ffffffff61057b16565b90506000610696610689610b9e565b839063ffffffff61052116565b85549091506106ac90829063ffffffff610b0116565b90945550505050565b600a8401546040805163487b7e7960e11b815290516000926001600160a01b0316916390f6fcf2916004808301926020929190829003018186803b1580156106fc57600080fd5b505afa158015610710573d6000803e3d6000fd5b505050506040513d602081101561072657600080fd5b5051905060006107456001600160a01b0386163063ffffffff61047716565b9050610759856001600160a01b03166109e5565b156107715761076e813463ffffffff610bae16565b90505b600c860154600090819081906001600160a01b03166357e37af0896107ac896107a0898d63ffffffff61052116565b9063ffffffff610bae16565b8c600a0160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107fc57600080fd5b505afa158015610810573d6000803e3d6000fd5b505050506040513d602081101561082657600080fd5b5051600b8e0154604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b15801561086f57600080fd5b505afa158015610883573d6000803e3d6000fd5b505050506040513d602081101561089957600080fd5b5051604080516001600160e01b031960e088901b1681526001600160a01b039095166004860152602485019390935260448401919091526064830152608482018990525160a4808301926060929190829003018186803b1580156108fc57600080fd5b505afa158015610910573d6000803e3d6000fd5b505050506040513d606081101561092657600080fd5b50805160208083015160409384015160018e0184905560038e0182905560028e01819055600c8e01805464ffffffffff4216600160a01b0264ffffffffff60a01b199091161790558d5460048f015486518681529485018490528487018c905260608501839052608085019190915260a0840152935192965094509192506001600160a01b038a16917f131cf1f61e39fd78f61f07d78533f5b6c13629c80ef6965983e92c72efbaa4a4919081900360c00190a2505050505050505050565b60006001600160a01b038216158061020e5750506001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1490565b600082610a2a5750600061020e565b82820282848281610a3757fe5b04146103315760405162461bcd60e51b8152600401808060200182810382526021815260200180610d476021913960400191505060405180910390fd5b600061033183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610bf0565b600080610ad04264ffffffffff851663ffffffff610bae16565b90506000610ae46106656301e13380610b88565b9050610209610af1610b9e565b610325878463ffffffff610b0116565b60006103316b033b2e3c9fd0803ce80000006105ab610b26868663ffffffff610a1b16565b6b019d971e4fe8401e7400000090610521565b600080610b534264ffffffffff851663ffffffff610bae16565b90506000610b6b856301e1338063ffffffff610a7416565b905061020982610b7c61059e610b9e565b9063ffffffff610c9216565b600061020e82633b9aca0063ffffffff610a1b16565b6b033b2e3c9fd0803ce800000090565b600061033183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610cec565b60008183610c7c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c41578181015183820152602001610c29565b50505050905090810190601f168015610c6e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610c8857fe5b0495945050505050565b600060028206610cae576b033b2e3c9fd0803ce8000000610cb0565b825b90506002820491505b811561020e57610cc98384610b01565b92506002820615610ce157610cde8184610b01565b90505b600282049150610cb9565b60008184841115610d3e5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610c41578181015183820152602001610c29565b50505090039056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212208bcc7f96258c14fc14b8e22b0688a406ee82aa15b5771015acfa0ef33d17253964736f6c63430006080033";
