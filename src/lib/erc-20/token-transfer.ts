import Erc20Abi from "../../../contract-abis/Erc20.json";
import {ethers} from "hardhat";
import {Erc20} from "../../../contract-libs";
import {BigNumber} from "ethers";

export async function tokenTransfer(tokenAddress: string, amount: BigNumber, receiverAddress: string): Promise<string> {
    const token = <Erc20>await ethers.getContractAt(Erc20Abi, tokenAddress)
    return token.interface.encodeFunctionData(
        "transfer",
        [
            receiverAddress,
            amount
        ]
        )
}