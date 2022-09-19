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
      USDC: '0xBf1Ab70f941Dde0d0e03C8fc5A0b3854149CE39E',
      USDT: '0x763908b214743025BF637ABF919132C3FBa8232f',
      // WBTC: '0xc6fb9D67eb423D4f016Da723598F182D3bCCfaD3',
      // WETH: '0xD6B7C7811CA83E1034D59964430DacdAd3B4D529',
      LINEAR: '0x0DC2aBf690cD4038c09864ef21d2b18623e96Ea6',
      WNEAR: '0x6FaF3062A457fFE8D9E2F1017974905802E21C01',
    },
  },
};

export default AuroraConfig;
