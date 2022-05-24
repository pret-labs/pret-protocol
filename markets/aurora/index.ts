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
      DAI: '0xe3520349f477a5f6eb06107066048508498a291b',
      USDC: '0xb12bfca5a55806aaf64e99521918a4bf0fc40802',
      USDT: '0x4988a896b1227218e4a686fde5eabdcabd91571f',
      WBTC: '0xf4eb217ba2454613b15dbdea6e5f22276410e89e',
      WETH: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      LINEAR: '0x918dbe087040a41b786f0da83190c293dae24749',
      WNEAR: '0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d',
    },
  },
};

export default AuroraConfig;
