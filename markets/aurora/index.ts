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
      DAI: '0xcD9fbc0a60b4d3b81C421Cb8dBC672Fc9ed05D9f',
      USDC: '0x5CAe380B9EC05556d5B0D90DcF39c4724DCEB670',
      USDT: '0x9E5Eb0572384e9f8FBa6C8364234E8AfF276DCA5',
      WBTC: '0x601E60c6C7876f049B1cF13B4511CAE823416fd3',
      WETH: '0x38A2b3157d529c521814E88621fE938Be421A203',
      WNEAR: '0x9af8043BF8611a749030312b080cA019E7BA9BbD',
    },
  },
};

export default AuroraConfig;
