import { task } from 'hardhat/config';
import { getLendingPool, getSigner } from '../../helpers/contracts-getters';

task('dev:info', 'Show user and reserve info').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');
  const signer0 = await getSigner(0);
  const pool = await getLendingPool();

  const reservesList = await pool.getReservesList();
  console.log('reservesList', reservesList);

  for (const reserve of reservesList) {
    const reserveData = await pool.getReserveData(reserve);
    console.log(`\nReserve Data: ${reserve}`);
    console.log(reserveData);
  }

  const userAccount = await pool.getUserAccountData(await signer0.getAddress());
  console.log('\nuser account data:');
  console.log(userAccount);

  const paused = await pool.paused();
  console.log('\n paused', paused);
});
