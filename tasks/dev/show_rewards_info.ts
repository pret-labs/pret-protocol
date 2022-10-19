import { task } from 'hardhat/config';
import {
  getLendingPoolAddressesProvider,
  getUiIncentiveDataProvider,
} from '../../helpers/contracts-getters';

task('dev:rewards')
  .addParam('user')
  .addParam('controller')
  .setAction(async ({ user, controller }, localBRE) => {
    await localBRE.run('set-DRE');
    const uiIncentiveDataProvider = await getUiIncentiveDataProvider();

    const info = await uiIncentiveDataProvider.getProgressiveIncentivesData(
      (
        await getLendingPoolAddressesProvider()
      ).address,
      user,
      controller
    );

    console.log('rewards info');
    console.log('total rewards', info[0].toString());
    console.log('pending rewards', info[1].toString());
    console.log('claimable rewards', info[2].toString());
  });
