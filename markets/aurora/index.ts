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
    // AURORA: strategyAURORA,
  },
  // TODO aurora
  ReserveAssets: {
    [eAuroraNetwork.aurora]: {
      DAI: '0x31AeA2481b47E276869555cf03E8f3374e61029b',
      USDC: '0x9aa4495177361a301BCAE9f14Aa032188f795fdE',
      USDT: '0x4aC3d3e1E45f08957480F38AA903c563eA05B743',
      WBTC: '0xbf8Ed86F62cf9E38B404E17fE397aB032461A698',
      WETH: '0x8F74537e8164E81ff83B965e914Fd9721978FC1b',
      WNEAR: '0x4B611eED2e291DA4958f54a80bf377923Ea4A8D8',
    },
  },
};

export default AuroraConfig;
