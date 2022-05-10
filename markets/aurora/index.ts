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
      DAI: '0xAF65ff571f2D7193d4FeCfFEFA9AaF78ea993400',
      USDC: '0x108C732f2E87C50fc591687Fa12b0f996f1f6F8B',
      USDT: '0xB7f348F0913FBc871B7E44C82aBB2d662F4c751a',
      WBTC: '0x7D99EdfE81833e371d007c57Cc9BF86bD719d60c',
      WETH: '0xB8AD40DCfc163694F981D2e12704C0a7af9387DF',
      LINEAR: '0xB8AD40DCfc163694F981D2e12704C0a7af9387DF',
      WNEAR: '0x729dfF256Ba68502a17C1443B6F49c6B5300E95d',
    },
  },
};

export default AuroraConfig;
