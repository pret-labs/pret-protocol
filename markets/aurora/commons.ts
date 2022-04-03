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
    // [ePolyAaveCollector deployed: 0xd83C5e9a0D6D521a9E23D25Df1862A23134e1803gonNetwork.matic]: '0xA39599424642D9fD35e475EF802EddF798dc555B',
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
      DAI: '0xE96C20C1Afd211e444D16D7C19756f5C385c3423',
      USDC: '0x5F42C4824B144e6E7601FEcE0823cEE326bd7F4C',
      USDT: '0x233674c8396FeDb225c649231019B53Bca4865C2',
      WBTC: '0xD95C1596170d0cCF8Cf6BE81aB38FD9f3A74ac50',
      USD: '0x190F924B4eF203597C93ad37bDE6b4e5b2671Df0',
      WNEAR: '0xB5c05D6260B0C43c28dD149C1e4f8a932Ee62eBD',
      WETH: '0x74435e491AB22c473Da94a7c9C076b24C921b741',
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
    [eAuroraNetwork.aurora]: '0x38A2b3157d529c521814E88621fE938Be421A203',
    // [ePolygonNetwork.matic]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
  // TODO aurora
  WrappedNativeToken: {
    [eAuroraNetwork.aurora]: '0x38A2b3157d529c521814E88621fE938Be421A203',
  },
  // TODO aurora
  ReserveFactorTreasuryAddress: {
    [eAuroraNetwork.aurora]: '0xFD1d488029ca690eFd2B78680E82B6A4c6d76D20',
  },
  // TODO aurora
  IncentivesController: {
    [eAuroraNetwork.aurora]: '0x58dd09D110feCb028aDfD666217D335F39B607a4',
  },
};
