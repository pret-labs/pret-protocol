import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import {
  getAllMockedTokens,
  getMintableERC20,
  getSigner,
  getWETHMocked,
} from '../../helpers/contracts-getters';
import { waitForTx } from '../../helpers/misc-utils';

const GWEI = 1000 * 1000 * 1000;
const gasPrice = 0 * GWEI;

task('dev:corn', 'Mint corn token').setAction(async ({}, localBRE) => {
  await localBRE.run('set-DRE');
  const mockTokens = await getAllMockedTokens();
  const corn = mockTokens['CORN'];

  const signer1 = await getSigner(1);
  const receipt = process.env.RECEIPT;
  if (!receipt) {
    console.log('missing receipt');
    process.exit(1);
  }

  console.log(await signer1.getAddress());

  const decimals = BigInt(await corn.decimals());
  const amount = BigInt(20000) * BigInt(10) ** decimals;

  console.log('token address', corn.address);
  await waitForTx(
    await corn.connect(signer1).mint(amount, {
      gasLimit: 1000000,
      gasPrice: gasPrice,
    })
  );

  // transfer to receipt
  await waitForTx(await corn.connect(signer1).transfer(receipt, amount));

  console.log('minted to ', receipt);
});
