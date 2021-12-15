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
      DAI: '0x1d12b3888594Ce50C55A73bE64B1d75Cdda465af',
      USDC: '0x121a53e663c2A7bb1dCDe0C1A6462ED8cc343F4B',
      USDT: '0x5E89E6Cc7B38A49B5B81Fe468DE34e379fcf8875',
      WBTC: '0x74efA4a7720e468fa1B4Fc03208E8A26c6089229',
      USD: '0x26d5E3d4CD105BD00210a3Cdf1F55200A857576C',
      WNEAR: '0x49007e99DD227D5D2639f7456816a8f00fBFe159',
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
    [eAuroraNetwork.aurora]: '0xC41AcA9718C2Fbb342FdacC1E3d15066E36871c4',
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
