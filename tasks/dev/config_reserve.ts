import { task } from 'hardhat/config';
import { getFirstSigner, getLendingPoolConfiguratorProxy } from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

task('dev:config-reserve', 'Config reserve')
  .addParam('configurator')
  .addParam('asset')
  .addParam('ltv')
  .addParam('threshold')
  .addParam('bonus')
  .setAction(async (params, localBRE) => {
    await localBRE.run('set-DRE');
    const { configurator, asset, ltv, threshold, bonus } = params;

    const poolConfigurator = await getLendingPoolConfiguratorProxy(configurator);
    const signer = await getFirstSigner();

    await waitForTx(
      await poolConfigurator
        .connect(signer)
        .configureReserveAsCollateral(asset, ltv, threshold, bonus)
    );

    console.log('done');
  });
