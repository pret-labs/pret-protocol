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
    [eAuroraNetwork.aurora]: {
      DAI: '0x9D3f23d5552b8E5365eB9e7412809A108d7b7760',
      USDC: '0x53810e4c71BC89d39Df76754c069680B26b20c3d',
      USDT: '0x0DC2aBf690cD4038c09864ef21d2b18623e96Ea6',
      WBTC: '0x763908b214743025BF637ABF919132C3FBa8232f',
      USD: '0x934654853Bd7DaE1D3491E38F9Bf909a17F03eD4',
      WNEAR: '0xBf1Ab70f941Dde0d0e03C8fc5A0b3854149CE39E',
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
    [eAuroraNetwork.aurora]: '0x543B666128Dc017EA2a4260b24d5014F218b1d10',
  },
  // TODO aurora
  ReserveFactorTreasuryAddress: {
    [eAuroraNetwork.aurora]: '0x0fdf186ac2cdB035783dA1E3a84BB38bE4BCb166',
  },
  // TODO aurora
  IncentivesController: {
    [eAuroraNetwork.aurora]: '0x7492b42685E1c1d3FdD6a2e2DA4675dAfe9CEbeA',
    // [ePolygonNetwork.mumbai]: '0xd41aE58e803Edf4304334acCE4DC4Ec34a63C644',
    // [ePolygonNetwork.matic]: '0x357D51124f59836DeD84c8a1730D72B749d8BC23',
  },
};
