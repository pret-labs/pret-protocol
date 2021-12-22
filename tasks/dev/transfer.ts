import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import { getAllMockedTokens, getMintableERC20, getSigner } from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

task('dev:transfer', 'Transfer coins').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');
  const mockTokens = await getAllMockedTokens();
  const tokenList = ['DAI', 'USDT', 'USDC', 'WNEAR', 'WBTC'];

  const signer = await getSigner(0);
  const receipt = process.env.RECEIPT;
  if (!receipt) {
    console.log('missing receipt in env');
    return;
  }

  for (const t of tokenList) {
    const token = mockTokens[t];
    await waitForTx(
      await token.connect(signer).transfer(receipt, ethers.utils.parseUnits('200'), {
        gasLimit: 1000000,
        gasPrice: 0,
      })
    );

    console.log(`Transferred ${t} to ${receipt}`);
  }
});
