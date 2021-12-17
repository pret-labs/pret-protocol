# Aurora Deployment Notes

## Full deployment steps

### A. Prerequisite 
The following components are required by AAVE, but not handled by this project.      

1. IncentivesController       
  https://github.com/pret-labs/incentives-controller/tree/aurora      
  deploy: `npx hardhat --network aurora deploy-incentives-impl`

2. Price Oracles
  https://github.com/pret-labs/price-oracle      
  Contracts already deployed, see readme for addresses.

3. Run Price Oracle Nodes
  https://github.com/pret-labs/oracle-provider-node       
  run: `npm run start`

4. Deploy AaveCollector
   `npx hardhat --network aurora dev:collector`      
   Put address in commons.ts

### B. Deploy Pret (AAVE)
1. Update IncentivesController address in `markets/aurora/commons.ts`
2. Update price oracle addresses in `markets/aurora/commons.ts`
3. Update reserve assets addresses in `markets/aurora/index.ts`
4. Update WETH address in `markets/aurora/commons.ts`
5. Delete all entries in `deployed-contracts.json`, if mock tokens are needed you can leave these entries there.
6. `npm run aurora:full:migration`
7. `npm run aurora:deployUIProvider`
8. `npm run aurora:deployUIIncentivesProvider`
9. In order to use the protocol, the pool need to be unpaused.
10. `npx hardhat --network aurora dev:unpause`
