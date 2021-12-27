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
      DAI: '0x5a82DE604212a2ac0E756Dba8da3d2A10c8D7D99',
      USDC: '0x52D742F35e03719627C0187eC10521D234965542',
      USDT: '0xAAaC924F5012A6cBA52af0951541AEcd20595ad9',
      WBTC: '0x090A49a6546bcb3180214A554F2d694dce732D4D',
      WETH: '0xA2A66Ffb7fc3b39C9ca1D42fA75EFFAf52144380',
      WNEAR: '0x9E0F0Ab5fCA7D0E5D3FC7b8C06220fD22aA1C6Aa',
    },
  },
};

export default AuroraConfig;
