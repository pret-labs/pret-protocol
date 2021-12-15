import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import { getAllMockedTokens, getMintableERC20, getSigner } from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

task('dev:mint', 'Mint some stable coins').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');
  const mockTokens = await getAllMockedTokens();
  const mintList = ['DAI', 'USDT', 'USDC', 'WNEAR', 'WETH'];

  const signer0 = await getSigner(0);
  const signer1 = await getSigner(1);

  for (const t of mintList) {
    const token = mockTokens[t];
    console.log('token address', token.address);
    await waitForTx(
      await token.connect(signer0).mint(ethers.utils.parseUnits('1000'), {
        gasLimit: 1000000,
        gasPrice: 0,
      })
    );
    await waitForTx(
      await token.connect(signer1).mint(ethers.utils.parseUnits('1000'), {
        gasLimit: 1000000,
        gasPrice: 0,
      })
    );
    console.log('minted', t);
  }
});
