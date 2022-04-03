import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import { getParamPerNetwork } from '../../helpers/contracts-helpers';
import { getFirstSigner, getPairsTokenAggregator } from '../../helpers/contracts-getters';
import { registerContractInJsonDb } from '../../helpers/contracts-helpers';
import { waitForTx } from '../../helpers/misc-utils';
import { ChainlinkSourcesRegistryFactory } from '../../types';
import { loadPoolConfig } from '../../helpers/configuration';
import { eNetwork, ICommonConfiguration, SymbolMap } from '../../helpers/types';

task('dev:chainlink', 'Deploy and init chainlink source registry').setAction(
  async ({}, localBRE) => {
    await localBRE.run('set-DRE');
    const signer = await getFirstSigner();

    const sourceRegistry = new ChainlinkSourcesRegistryFactory(signer);
    const instance = await sourceRegistry.deploy();
    await waitForTx(instance.deployTransaction);
    await registerContractInJsonDb('ChainlinkSourceRegistry', instance);

    console.log(`ChainlinkSourceRegistry deployed to ${instance.address}`);

    // init
    const network = <eNetwork>localBRE.network.name;
    const poolConfig = loadPoolConfig('Aurora' as any);
    const {
      ProtocolGlobalParams: { UsdAddress },
      ReserveAssets,
      ChainlinkAggregator,
    } = poolConfig as ICommonConfiguration;
    const reserveAssets = await getParamPerNetwork(ReserveAssets, network);
    const chainlinkAggregators = await getParamPerNetwork(ChainlinkAggregator, network);

    const tokensToWatch: SymbolMap<string> = {
      ...reserveAssets,
      USD: UsdAddress,
    };
    const [tokens, aggregators] = getPairsTokenAggregator(
      tokensToWatch,
      chainlinkAggregators,
      poolConfig.OracleQuoteCurrency
    );

    console.log('tokens');
    console.log(tokens);
    console.log('aggregators');
    console.log(aggregators);

    waitForTx(await instance.updateAggregators(tokens, aggregators));

    console.log('done.');
  }
);
