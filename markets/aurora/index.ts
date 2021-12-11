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
  // TODO aurora
  ReserveAssets: {
    [eAuroraNetwork.aurora]: {
      DAI: '0x69c8DFE7E03A7B600f6708B57C11FdBDfc475561',
      USDC: '0x267Bbe6b340788367fc183E12F469991C25E03aD',
      USDT: '0x99090Ec7413523B1a3bDD8787E808B7e5e6b3307',
      WBTC: '0xb85eF37F8C6F2B785237533522924079a187CA47',
      WETH: '0xC41AcA9718C2Fbb342FdacC1E3d15066E36871c4',
      WNEAR: '0xFF8CE9eFEd7675828A6E0A819B7732C32A92f3Fb',
      AURORA: '0x22d7f6390F723741bf5a315d7302b01992678902',
    },
  },
};

export default AuroraConfig;
