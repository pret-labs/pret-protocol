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
      DAI: '0xD2E8d9173584D4DaA5C8354a79eF75ceC2dfa228',
      USDC: '0x56F7DC1Cc938d6d6575B68d70d381F9C28C8C7b7',
      USDT: '0x0b9825D065745D3D9E0C1917280249C485496bC7',
      WBTC: '0x8b5F2C6C7ef486e5Ea15d2404342F36Ca8910a21',
      WETH: '0xB5AE3e2883934457cb593793f034b401867e1372',
      WNEAR: '0x668eD30aAcC7C7c206aAF1327d733226416233E2',
    },
  },
};

export default AuroraConfig;
