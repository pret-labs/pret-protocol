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
      DAI: '0x87d1C3Ea88c6f69B072cc07C5CC216D7949C1B73',
      USDC: '0xD4024d478D509e3F4506144C179d4208d1e2f5f5',
      USDT: '0x903681C982D1F689676fAB717464a1c1ebFC3937',
      WBTC: '0xf21Fdd2aEA21502527f7cA67aDd49b6afeB77171',
      WETH: '0xAcbc062a7dd2403a5D54f25ea132F6E7a2E5d449',
      WNEAR: '0xCB4EC416f8E257Fe933180CD34dDF4E7fd1925C0',
    },
  },
};

export default AuroraConfig;
