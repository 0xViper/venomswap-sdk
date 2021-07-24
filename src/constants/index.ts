import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  HARMONY = 3
}

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  HARMONY_MAINNET = 1666600000,
  HARMONY_TESTNET = 1666700000
}

export const INIT_CODE_HASHES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.ROPSTEN]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.RINKEBY]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.GÖRLI]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.KOVAN]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.BSC_MAINNET]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.BSC_TESTNET]: '0x2bb3e5195d9a143594fb6ad515c4c134a8c69b8232783ec65e8eca38733fe57e',
  [ChainId.HARMONY_MAINNET]: '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
  [ChainId.HARMONY_TESTNET]: '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc'
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
