/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWrapped,
  IWrappedInterface,
} from "../../../contracts/interfaces/IWrapped";

const _abi = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IWrapped__factory {
  static readonly abi = _abi;
  static createInterface(): IWrappedInterface {
    return new utils.Interface(_abi) as IWrappedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWrapped {
    return new Contract(address, _abi, signerOrProvider) as IWrapped;
  }
}