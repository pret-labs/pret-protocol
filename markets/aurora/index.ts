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
      USDC: '0xa29548483c45567038F4c2e7bc8840f4257cF41B',
      USDT: '0x74EdCE95969E7D6e22Ad0BE54bE1d5BfC4a10777',
      // WBTC: '0xc6fb9D67eb423D4f016Da723598F182D3bCCfaD3',
      // WETH: '0xD6B7C7811CA83E1034D59964430DacdAd3B4D529',
      LINEAR: '0xa87899185A19071968BcD74b7986a8024BE77eDd',
      WNEAR: '0x6f06dfEAe63C46F5d9f4c25811Bb750f92624EbD',
    },
  },
};

export default AuroraConfig;
