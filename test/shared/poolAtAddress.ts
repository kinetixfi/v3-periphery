import { abi as POOL_ABI } from '@kinetix/v3-core-smart-contracts/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IUniswapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IUniswapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IUniswapV3Pool
}
