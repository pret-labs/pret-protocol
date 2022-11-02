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
      USDC: '0x873Fd56ECCC6ffC2c4c1104BDEc64c85D7cdAc0E',
      USDT: '0xDFB1220E9a84fFd5E67750c9319a1b0090Ffdc81',
      // WBTC: '0xc6fb9D67eb423D4f016Da723598F182D3bCCfaD3',
      // WETH: '0xD6B7C7811CA83E1034D59964430DacdAd3B4D529',
      LINEAR: '0xaEA7D338BB69c4588cdee7ed7a3bAab3c1a8c8E8',
      WNEAR: '0x2bEcB61A61f37aC7348d10AA7F909c713b829F80',
    },
  },
};

export default AuroraConfig;
