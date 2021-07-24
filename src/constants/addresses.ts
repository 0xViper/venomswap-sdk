import { ChainId } from './index'
import { Token } from '../entities/token' 

const ZERO_ONE_ADDRESS = '0x0000000000000000000000000000000000000001'

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.ROPSTEN]: ZERO_ONE_ADDRESS,
  [ChainId.RINKEBY]: ZERO_ONE_ADDRESS,
  [ChainId.GÖRLI]: ZERO_ONE_ADDRESS,
  [ChainId.KOVAN]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_TESTNET]: '0xD06060d276a6c8C4037f6a8283329967f50ac8DF',
  [ChainId.HARMONY_MAINNET]: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
  [ChainId.HARMONY_TESTNET]: '0xFb1d2c9f60bD2491487c70F79130e53B0C4e4b06'
}

export const ROUTER_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.ROPSTEN]: ZERO_ONE_ADDRESS,
  [ChainId.RINKEBY]: ZERO_ONE_ADDRESS,
  [ChainId.GÖRLI]: ZERO_ONE_ADDRESS,
  [ChainId.KOVAN]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_TESTNET]: '0xd3F2A10611535ce2a3E3b0Ed8aeBA27B7c6178A8',
  [ChainId.HARMONY_MAINNET]: '0xf012702a5f0e54015362cBCA26a26fc90AA832a3',
  [ChainId.HARMONY_TESTNET]: '0xda3DD48726278a7F478eFaE3BEf9a5756ccdb4D0'
}

export const GOVERNANCE_TOKENS: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, ZERO_ONE_ADDRESS, 18, 'VIPER', 'Viper'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, ZERO_ONE_ADDRESS, 18, 'VIPER', 'Viper'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, ZERO_ONE_ADDRESS, 18, 'VIPER', 'Viper'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, ZERO_ONE_ADDRESS, 18, 'VIPER', 'Viper'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, ZERO_ONE_ADDRESS, 18, 'VIPER', 'Viper'),
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, ZERO_ONE_ADDRESS, 18, 'COBRA', 'Cobra'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x7a88305A99D6DFDFB961a01c9A59bf9e8A39c3A4',
    18,
    'COBRA',
    'Cobra'
  ),
  [ChainId.HARMONY_MAINNET]: new Token(
    ChainId.HARMONY_MAINNET,
    '0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79',
    18,
    'VIPER',
    'Viper'
  ),
  [ChainId.HARMONY_TESTNET]: new Token(
    ChainId.HARMONY_TESTNET,
    '0x11F477aE5f42335928fC94601a8A81ec77b27b2b',
    18,
    'VIPER',
    'Viper'
  )
}

export const MASTER_BREEDER_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.RINKEBY]: ZERO_ONE_ADDRESS,
  [ChainId.ROPSTEN]: ZERO_ONE_ADDRESS,
  [ChainId.GÖRLI]: ZERO_ONE_ADDRESS,
  [ChainId.KOVAN]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_TESTNET]: '0xB39103A0039b61694AA54c6CDe943bB15F4f3E7b',
  [ChainId.HARMONY_MAINNET]: '0x7AbC67c8D4b248A38B0dc5756300630108Cb48b4',
  [ChainId.HARMONY_TESTNET]: '0x62bA9Fc504d3C854A0E270Bb5E7A6883658Fb70f'
}

export const PIT_BREEDER_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.RINKEBY]: ZERO_ONE_ADDRESS,
  [ChainId.ROPSTEN]: ZERO_ONE_ADDRESS,
  [ChainId.GÖRLI]: ZERO_ONE_ADDRESS,
  [ChainId.KOVAN]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_MAINNET]: ZERO_ONE_ADDRESS,
  [ChainId.BSC_TESTNET]: '0x2211f7bA6F6F98344a63d4975a927ecB78104C8a',
  [ChainId.HARMONY_MAINNET]: '0x08913d353091e24B361f0E519e2f7aD07a78995d',
  [ChainId.HARMONY_TESTNET]: '0xd9d72F5526E26bB5a0932dFD254aaFB1C2e33EfB'
}

export const PIT_TOKENS: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, ZERO_ONE_ADDRESS, 18, 'xVIPER', 'ViperPit'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, ZERO_ONE_ADDRESS, 18, 'xVIPER', 'ViperPit'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, ZERO_ONE_ADDRESS, 18, 'xVIPER', 'ViperPit'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, ZERO_ONE_ADDRESS, 18, 'xVIPER', 'ViperPit'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, ZERO_ONE_ADDRESS, 18, 'xVIPER', 'ViperPit'),
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, ZERO_ONE_ADDRESS, 18, 'xCOBRA', 'CobraPit'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x341F8c85b99BdCa823358C648Ee79577947a383e',
    18,
    'xCOBRA',
    'CobraPit'
  ),
  [ChainId.HARMONY_MAINNET]: new Token(
    ChainId.HARMONY_MAINNET,
    '0xE064a68994e9380250CfEE3E8C0e2AC5C0924548',
    18,
    'xVIPER',
    'ViperPit'
  ),
  [ChainId.HARMONY_TESTNET]: new Token(
    ChainId.HARMONY_TESTNET,
    '0x98b792BD73E10CF96b9f7b3A34baCdCe06349e3b',
    18,
    'xVIPER',
    'ViperPit'
  )
}
