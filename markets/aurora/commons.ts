import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
} from '../../helpers/constants';
import { ICommonConfiguration, eAuroraNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Pret Aurora Market',
  StableDebtTokenNamePrefix: 'Pret Aurora Market stable debt',
  VariableDebtTokenNamePrefix: 'Pret Aurora Market variable debt',
  SymbolPrefix: 'p',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WNEAR: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(),
    },
    AURORA: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eAuroraNetwork.aurora]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eAuroraNetwork.aurora]: undefined,
  },
  LendingPool: {
    [eAuroraNetwork.aurora]: '',
  },
  LendingPoolConfigurator: {
    [eAuroraNetwork.aurora]: '',
  },
  // TODO aurora
  ProviderRegistry: {
    // [ePolygonNetwork.mumbai]: '0xE6ef11C967898F9525D550014FDEdCFAB63536B5',
    [eAuroraNetwork.aurora]: ''
  },
  // TODO aurora
  ProviderRegistryOwner: {
    // [ePolygonNetwork.mumbai]: '0x943E44157dC0302a5CEb172374d1749018a00994',
    // [ePolygonNetwork.matic]: '0xD7D86236d6c463521920fCC50A9CB56f8C8Bf008',
    [eAuroraNetwork.aurora]: ''
  },
  // TODO aurora
  LendingRateOracle: {
    // [ePolygonNetwork.mumbai]: '0xC661e1445F9a8E5FD3C3dbCa0A0A2e8CBc79725D',
    // [ePolygonNetwork.matic]: '0x17F73aEaD876CC4059089ff815EDA37052960dFB',
    [eAuroraNetwork.aurora]: ''
  },
  // TODO aurora
  LendingPoolCollateralManager: {
    // [ePolygonNetwork.mumbai]: '0x2A7004B21c49253ca8DF923406Fed9a02AA86Ba0',
    // [ePolygonNetwork.matic]: '0xA39599424642D9fD35e475EF802EddF798dc555B',
    [eAuroraNetwork.aurora]: ''
  },
  TokenDistributor: {
    [eAuroraNetwork.aurora]: ''
  },
  WethGateway: {
    [eAuroraNetwork.aurora]: ''
  },
  AaveOracle: {
    [eAuroraNetwork.aurora]: ''
  },
  FallbackOracle: {
    [eAuroraNetwork.aurora]: ZERO_ADDRESS,
  },
  // TODO aurora
  ChainlinkAggregator: {
    // [ePolygonNetwork.matic]: {
    //   AAVE: '0xbE23a3AA13038CfC28aFd0ECe4FdE379fE7fBfc4',
    //   DAI: '0xFC539A559e170f848323e19dfD66007520510085',
    //   USDC: '0xefb7e6be8356cCc6827799B6A7348eE674A80EaE',
    //   USDT: '0xf9d5AAC6E5572AEFa6bd64108ff86a222F69B64d',
    //   WBTC: '0xA338e0492B2F944E9F8C0653D3AD1484f2657a37',
    //   WMATIC: '0x327e23A4855b6F663a28c5161541d69Af8973302',
    //   USD: '0xF9680D99D6C9589e2a93a78A04A279e509205945',
    // },
    // [eAuroraNetwork.aurora]: {
    //   DAI: ZERO_ADDRESS,
    //   USDC: ZERO_ADDRESS,
    //   USDT: ZERO_ADDRESS,
    //   WBTC: ZERO_ADDRESS,
    //   USD: ZERO_ADDRESS,
    //   WNEAR: ZERO_ADDRESS,
    //   // AURORA: ZERO_ADDRESS,
    // },
    [eAuroraNetwork.aurora]: {
      DAI: '0x4Cec45fe8E68a841A94D63e62afe9F4B32D5836A',
      USDC: '0x7A2f8ff226BfebF6E35F4213C3E49f84d65118e4',
      USDT: '0xfCd326C53374520A77886531EB4626868cCEa4d7',
      WBTC: '0xA1f440b2Df4b6a92a4Afb7CA8f24c922F1AAFF01',
      USD: '0x12e1c6B5760E0326CDafb9b2B6fEAE7093490523',
      WNEAR: '0xe71682fd26aEfFe60179c276C2f6B5e8e3ccDFe0',
    },
  },
  ReserveAssets: {
    [eAuroraNetwork.aurora]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eAuroraNetwork.aurora]: '',
  },
  // TODO aurora
  WETH: {
    [eAuroraNetwork.aurora]: ZERO_ADDRESS,
    // [ePolygonNetwork.matic]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  // TODO aurora
  WrappedNativeToken: {
    [eAuroraNetwork.aurora]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  },
  // TODO aurora
  ReserveFactorTreasuryAddress: {
    [eAuroraNetwork.aurora]: ZERO_ADDRESS,
  },
  // TODO aurora
  IncentivesController: {
    [eAuroraNetwork.aurora]: '0x50D75C1BC6a1cE35002C9f92D0AF4B3684aa6B74',
    // [ePolygonNetwork.mumbai]: '0xd41aE58e803Edf4304334acCE4DC4Ec34a63C644',
    // [ePolygonNetwork.matic]: '0x357D51124f59836DeD84c8a1730D72B749d8BC23',
  },
};
