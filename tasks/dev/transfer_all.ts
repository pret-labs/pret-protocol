import { task } from 'hardhat/config';
import { getAllMockedTokens, getSigner } from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

task('dev:transfer-all').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');

  const mockTokens = await getAllMockedTokens();
  const token = mockTokens['CORN'];
  console.log('token address', token.address);

  const vault = await getSigner(0);

  const vaultBalance = await token.balanceOf(await vault.getAddress());
  console.log('vault balance', vaultBalance.toString());

  const receipt = process.env.RECEIPT;
  if (!receipt) {
    console.error('missing receipt');
    return;
  }

  await waitForTx(await token.connect(vault).transfer(receipt, vaultBalance));

  console.log('done');
});
