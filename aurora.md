# Aurora Deployment Notes

## Full deployment steps

### A. Prerequisite 
The following components are required by AAVE, but not handled by this project.      

1. Grab address of WNEAR token.

2. Deploy IncentivesController       
  https://github.com/pret-labs/incentives-controller/tree/aurora      
  deploy: `npx hardhat --network aurora deploy:proxy --token1 --vault1 --token2 --vault2`
  Token1 address is WNEAR address, vault address is the account that holds all the incentives initially.
  Token2 address should be CORN address, but it will be generated later. So just put a random placeholder for now.

3. Approve IncentivesController with all rewards token, call this twice, with token1/vault1 token2/vault2 respectively.    
  `CONTROLLER=xxx WNEAR=xxx npx hardhat --network aurora dev:approve`

4. Price Oracles (optional)
  https://github.com/pret-labs/price-oracle              
  See readme for instructions.

5. Run Price Oracle Nodes (optional)        
  Update `appconfig.js` with oracle addresses above     
  https://github.com/pret-labs/oracle-provider-node       
  run: `npm run start`

6. Deploy AaveCollector
   `npx hardhat --network aurora dev:collector`      

### B. Deploy Pret (AAVE)
1. Update IncentivesController address in `markets/aurora/commons.ts`
2. Update price oracle addresses in `markets/aurora/commons.ts`
3. Update ETH price oracle address in `helpers/constants.ts`
3. Update reserve assets addresses in `markets/aurora/index.ts`
4. Update treasury address in `markets/aurora/commons.ts` with AaveCollector address
5. Update WETH address in `markets/aurora/commons.ts`
6. Delete all entries in `deployed-contracts.json`, if mock tokens are needed you can leave these entries there.
7. `npm run aurora:full:migration`
8. Grab aToken and vToken address from `npx hardhat --network aurora dev:info`, put into IncentivesController `config-incentives.ts`.
9. Go to incentives controller and run `npx hardhat --network aurora config-assets --proxy <inc_ctrl_addr> --index 0/1` for each reward tokens respectively.
10. Set WNEAR incentives controller claimable. `npx hardhat --network aurora set-claimable --proxy <addr>`
11. Set CORN incentives controller unclaimable, remember to set it back when CORN token is actually deployed. ``
12. In order to use the protocol, the pool need to be unpaused:    
  `npx hardhat --network aurora dev:unpause`
