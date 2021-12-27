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
  OracleQuoteCurrency: 'USD',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x0000000000000000000000000000000000000000',
    // UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
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
      DAI: '0x799535946DCbCd79aB1A1158187caF3df8ddCE68',
      USDC: '0x5Eef22483c3409C90fC2f2EF826649D973F6377C',
      USDT: '0xD0eDB4cbB71c858f843aB5600627a3dA86435f74',
      WBTC: '0x6C2a55097217C43122CDD804653F695585e496E0',
      USD: '0xFaDb884d04CA7822e82aAafFDF88C2F45da2BE18',
      WNEAR: '0xcAF6Aa6Bf773D84A5bd2A27592f64e6f1432e23b',
      WETH: '0x766AC7B4bab7dc25418272f978314fC093CdD1d1',
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
    [eAuroraNetwork.aurora]: '0x766AC7B4bab7dc25418272f978314fC093CdD1d1',
    // [ePolygonNetwork.matic]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  // TODO aurora
  WrappedNativeToken: {
    [eAuroraNetwork.aurora]: '0x766AC7B4bab7dc25418272f978314fC093CdD1d1',
  },
  // TODO aurora
  ReserveFactorTreasuryAddress: {
    [eAuroraNetwork.aurora]: '0x347DD8d29F40baeC08664a0f234233669E37c167',
  },
  // TODO aurora
  IncentivesController: {
    [eAuroraNetwork.aurora]: '0x7e2Da120e759FCF0D35Aed5E79aaBa545d970F3d',
  },
};
