import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import {
  getAllMockedTokens,
  getMintableERC20,
  getSigner,
  getWETHMocked,
} from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

task('dev:transfer', 'Transfer coins').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');

  const signer = await getSigner(0);
  console.log('signer', await signer.getAddress());

  // await signer.sendTransaction({
  //   to: '0xA65D546c5f5C8dac603211b7FcF3b1dF7e119E42',
  //   value: ethers.utils.parseEther('100')
  // });
  // console.log('eth');

  const mockTokens = await getAllMockedTokens();
  const tokenList = ['DAI', 'LINEAR', 'USDT', 'USDC', 'WNEAR', 'WBTC', 'WETH'];

  const weth = await getWETHMocked();
  mockTokens['WETH'] = weth as any;

  const receipt = process.env.RECEIPT;
  if (!receipt) {
    console.log('missing receipt in env');
    return;
  }

  for (const t of tokenList) {
    const token = mockTokens[t];
    const decimals = BigInt(await token.decimals());
    const amount = BigInt(100000) * BigInt(10) ** decimals;

    await waitForTx(
      await token.connect(signer).transfer(receipt, amount, {
        gasLimit: 1000000,
        gasPrice: 0,
      })
    );

    console.log(`Transferred ${t} to ${receipt}`);
  }
});
