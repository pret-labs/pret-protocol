import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import {
  getAllMockedTokens,
  getLendingPool,
  getLendingPoolAddressesProvider,
  getSigner,
  getWETHGateway,
} from '../../helpers/contracts-getters';
import { UiIncentiveDataProviderFactory } from '../../types';

task('dev:info', 'Show user and reserve info').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');
  const signer0 = await getSigner(0);
  const signer1 = await getSigner(1);
  const pool = await getLendingPool();

  console.log(`Signer 0 addr: ${await signer0.getAddress()}`);
  console.log(`Signer 1 addr: ${await signer1.getAddress()}`);

  const reservesList = await pool.getReservesList();
  console.log('reservesList', reservesList);

  const mockTokens = await getAllMockedTokens();
  const mockTokenMap = {};
  for (const [key, value] of Object.entries(mockTokens)) {
    mockTokenMap[value.address] = key;
  }
  for (const reserve of reservesList) {
    const reserveData = await pool.getReserveData(reserve);
    console.log(`\nReserve Data: ${mockTokenMap[reserve] || 'WETH'}`);
    console.log(`Reserve address: ${reserve}`);
    console.log(`aToken address: ${reserveData.aTokenAddress}`);
    console.log(`vToken address: ${reserveData.variableDebtTokenAddress}`);
  }

  const userAccount = await pool.getUserAccountData(await signer1.getAddress());
  console.log('\nuser account data OK');
  console.log(userAccount);
  console.log('totalCollateralETH', userAccount.totalCollateralETH.toString());
  console.log('availableBorrowsETH', userAccount.availableBorrowsETH.toString());

  const wbtc = await pool.getReserveData('0x5CAe380B9EC05556d5B0D90DcF39c4724DCEB670');
  console.log(1111);
  console.log(wbtc);

  const paused = await pool.paused();
  console.log('\n paused', paused);

  const wethGateway = await getWETHGateway();
  const wethAddr = await wethGateway.getWETHAddress();
  console.log(`weth addr: ${wethAddr}`);
});
