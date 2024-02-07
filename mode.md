# Mode Deployment Notes

## Full deployment steps

### A. Prerequisite 
The following components are required by AAVE, but not handled by this project.      

1. Price Oracles (optional)
  https://github.com/pret-labs/price-oracle              
  See readme for instructions.

2. Run Price Oracle Nodes (optional)        
  Update `appconfig.js` with oracle addresses above     
  https://github.com/pret-labs/oracle-provider-node       
  run: `npm run start`

3. Deploy AaveCollector
   `npx hardhat --network aurora dev:collector`      

### B. Deploy Pret (AAVE)
1. Update IncentivesController address in `markets/aurora/commons.ts` with `0x0`
2. Update price oracle addresses in `markets/aurora/commons.ts`
3. Update ETH price oracle address in `helpers/constants.ts`
3. Update reserve assets addresses in `markets/aurora/index.ts`
4. Update treasury address in `markets/aurora/commons.ts` with AaveCollector address
5. Update WETH address in `markets/aurora/commons.ts`
6. Delete all entries in `deployed-contracts.json`, if mock tokens are needed you can leave these entries there.
7. `npm run aurora:full:migration`
8. Grab aToken and vToken address from `npx hardhat --network aurora dev:info`, put into IncentivesController `config-incentives.ts`.
9. Go to incentives controller and run `npx hardhat --network aurora config-assets --proxy <inc_ctrl_addr>`
10. In order to use the protocol, the pool need to be unpaused:    
  `npx hardhat --network aurora dev:unpause`
