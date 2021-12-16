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
      DAI: '0x708F6d63c85B86667F4CA1eC1207ec1FA6ac9CcC',
      USDC: '0xCe1Ce60e6489aF48ec45C332c9FfBbA39e30B0d1',
      USDT: '0xC5bF5DCA3692B75FAA2F3A5d859f51cf6E0ef4A7',
      WBTC: '0xA25104AE42a734B7644DAA2FB0fE4aEC2b77D025',
      WETH: '0x543B666128Dc017EA2a4260b24d5014F218b1d10',
      WNEAR: '0x56cD4dFD7B7079759dEb818f846Be6a68f9A025d',
      // AURORA: '0x22d7f6390F723741bf5a315d7302b01992678902',
    },
  },
};

export default AuroraConfig;
