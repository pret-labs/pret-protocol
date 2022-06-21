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
      DAI: '0xd32F3601Dc0981f01365633453c009D2975DDC81',
      USDC: '0x584fAFAE307FA6DbA99CC8F3320ffba8De065a38',
      USDT: '0xC85a70f04eA9aB19Fb9E46705494e2877e168f49',
      WBTC: '0x3592D3CAdd001B44949Fb9D6845E7D6b97b70Dcb',
      WETH: '0x88aABF01C7fAAB947D1570cd993bEd8aCEbf54b2',
      LINEAR: '0xa4904872b5B17D3101857C649A8e7e7a3Ed5b1ac',
      WNEAR: '0x1A55e008e86Ac4c170499e8E8af5D60565e4e453',
    },
  },
};

export default AuroraConfig;
