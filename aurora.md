# Aurora Deployment Notes

## Full deployment steps

### A. Prerequisite 
The following components are required by AAVE, but not handled by this project.      

1. Deploy reward ERC20 Token (PretDAO)      
  `npx hardhat --network aurora dev:dao`     

2. Deploy IncentivesController       
  https://github.com/pret-labs/incentives-controller/tree/aurora      
  deploy: `npx hardhat --network aurora deploy-pull-rewards-incentives --token <addr> --vault <addr>`

3. Approve IncentivesController with all rewards token    
  `CONTROLLER=xxx npx hardhat --network aurora dev:dao --approve`

4. Price Oracles
  https://github.com/pret-labs/price-oracle              
  See readme for instructions.

5. Run Price Oracle Nodes         
  Update `appconfig.js` with oracle addresses above     
  https://github.com/pret-labs/oracle-provider-node       
  run: `npm run start`

6. Deploy AaveCollector
   `npx hardhat --network aurora dev:collector`      

### B. Deploy Pret (AAVE)
1. Update IncentivesController address in `markets/aurora/commons.ts`
2. Update price oracle addresses in `markets/aurora/commons.ts`
3. Update ETH price oracle address in `helpers/constancts.ts`
3. Update reserve assets addresses in `markets/aurora/index.ts`
4. Update treasury address in `markets/aurora/commons.ts` with AaveCollector address
5. Update WETH address in `markets/aurora/commons.ts`
6. Delete all entries in `deployed-contracts.json`, if mock tokens are needed you can leave these entries there.
7. `npm run aurora:full:migration`
8. In order to use the protocol, the pool need to be unpaused:    
  `npx hardhat --network aurora dev:unpause`
