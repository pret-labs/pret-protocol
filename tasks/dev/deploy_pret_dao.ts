import { ethers } from 'ethers';
import { task } from 'hardhat/config';
import { loadPoolConfig } from '../../helpers/configuration';
import { getFirstSigner } from '../../helpers/contracts-getters';
import { getParamPerNetwork, registerContractInJsonDb } from '../../helpers/contracts-helpers';
import { getDb, waitForTx } from '../../helpers/misc-utils';
import { eNetwork } from '../../helpers/types';
import { PretDAOToken, PretDAOTokenFactory } from '../../types';

task('dev:dao', 'Deploy Pret DAO Token')
  .addFlag('approve', 'Whether to approve for incentive controller')
  .setAction(async ({ approve }, localBRE) => {
    await localBRE.run('set-DRE');
    const signer = await getFirstSigner();
    const totalSupply = ethers.utils.parseEther('100000000');

    if (!approve) {
      // deploy for first time

      const pretDao = new PretDAOTokenFactory(signer);

      const instance = await pretDao.deploy(
        await signer.getAddress(), // this is vault
        totalSupply
      );
      await waitForTx(instance.deployTransaction);
      await registerContractInJsonDb('PretDAO', instance);

      console.log('PretDAO Token deployed:', instance.address);
    } else {
      // approve
      const controller = process.env.CONTROLLER;
      if (!controller) {
        throw new Error('missing controller');
      }
      const tokenAddress = await getDb().get('PretDAOToken.aurora').value();
      const token = await PretDAOTokenFactory.connect(tokenAddress.address, signer);

      await waitForTx(await token.connect(signer).approve(controller, totalSupply));
      console.log('PretDAO approved incentives controller');
    }
  });
