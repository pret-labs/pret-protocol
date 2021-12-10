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
    AURORA: strategyAURORA,
  },
  ReserveAssets: {
    [eAuroraNetwork.aurora]: {
      DAI: '0x53810e4c71BC89d39Df76754c069680B26b20c3d',
      USDC: '0xBf1Ab70f941Dde0d0e03C8fc5A0b3854149CE39E',
      USDT: '0x763908b214743025BF637ABF919132C3FBa8232f',
      WBTC: '0x934654853Bd7DaE1D3491E38F9Bf909a17F03eD4',
      WETH: '0x9D3f23d5552b8E5365eB9e7412809A108d7b7760',
      WNEAR: '0x6FaF3062A457fFE8D9E2F1017974905802E21C01',
      AURORA: '0x0DC2aBf690cD4038c09864ef21d2b18623e96Ea6',
    },
  },
};

export default AuroraConfig;
