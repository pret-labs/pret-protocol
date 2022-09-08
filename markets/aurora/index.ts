import { IAuroraConfiguration, eAuroraNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyWBTC,
  strategyWETH,
  strategyAURORA,
  strategyWNEAR,
  strategyLINEAR,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AuroraConfig: IAuroraConfiguration = {
  ...CommonsConfig,
  MarketId: 'Aurora Market',
  ProviderId: 3,
  ReservesConfig: {
    DAI: strategyDAI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    WNEAR: strategyWNEAR,
    LINEAR: strategyLINEAR,
    // AURORA: strategyAURORA,
  },
  // TODO aurora
  ReserveAssets: {
    [eAuroraNetwork.aurora]: {
      // DAI: '0x6123611E23a5e465fD50C31AB6aE0bB6B2ECd220',
      USDC: '0x97f432214b8e35fa772E4eFBA1440b73c033c496',
      USDT: '0x52B84B816e9dEB424434b0E28E2575FAff09f179',
      // WBTC: '0xc6fb9D67eb423D4f016Da723598F182D3bCCfaD3',
      // WETH: '0xD6B7C7811CA83E1034D59964430DacdAd3B4D529',
      LINEAR: '0x859fBC7C426D1bB71044EbcAeFB7F278C93aA122',
      WNEAR: '0x00072384939Ef04922F5f2f813Fcf333C712Ee58',
    },
  },
};

export default AuroraConfig;
