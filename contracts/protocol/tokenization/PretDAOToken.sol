// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {ERC20} from '../../dependencies/openzeppelin/contracts/ERC20.sol';

contract PretDAOToken is ERC20 {
  constructor(address holder, uint256 amount) public ERC20('Pret DAO', 'PretDAO') {
    // mint at init to token holder
    _mint(holder, amount);
  }
}
