import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import {
  getAaveOracle,
  getAllMockedTokens,
  getMintableERC20,
  getSigner,
} from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

task('dev:price', 'Get price from oracle').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');
  const mockTokens = await getAllMockedTokens();
  const tokenList = ['DAI', 'USDT', 'USDC', 'WNEAR', 'WETH'];
  const aaveOracle = await getAaveOracle();

  for (const t of tokenList) {
    try {
      const token = mockTokens[t];
      const price = await aaveOracle.getAssetPrice(token.address);
      console.log(`token ${t} price ${price}`);
    } catch (err) {
      console.log(`failed to get price for ${t}`);
    }
  }
});
