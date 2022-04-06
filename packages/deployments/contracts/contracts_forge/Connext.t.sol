// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./ForgeHelper.sol";

import "../contracts/Connext.sol";

// running tests (with logging on failure):
// yarn workspace @connext/nxtp-contracts test:forge -vvv
// run a single test:
// yarn workspace @connext/nxtp-contracts test:forge -m testAddRouterAlreadyApproved -vvv

// other forge commands: yarn workspace @connext/nxtp-contracts forge <CMD>
// see docs here: https://onbjerg.github.io/foundry-book/index.html

contract ConnextTest is ForgeConnextHelper {

  // ============ Libraries ============
  using stdStorage for StdStorage;

  // ============ Storage ============

  // ============ Test set up ============

  function setUp() public {
    setConnext();
  }

  // ============ setupRouter ============

  // Fail if not called by owner
  function testSetupRouterOwnable() public {
    vm.prank(address(0));
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__onlyOwner_notOwner.selector));
    connext.setupRouter(address(1), address(0), address(0));
  }

  // Should work
  function testSetupRouter() public {
    vm.prank(admin);
    connext.setupRouter(address(1), address(0), address(0));
    assertTrue(connext.approvedRouters(address(1)));
  }

  // ============ removeRouter ============

  // Fail if not called by owner
  function testRemoveRouterOwnable() public {
    vm.prank(address(0));
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__onlyOwner_notOwner.selector));
    connext.removeRouter(address(1));
  }

  // Should work if called by owner
  function testRemoveRouter() public {
    address _router = address(1);
    vm.prank(admin);
    connext.setupRouter(_router, address(0), address(0));
    assertTrue(connext.approvedRouters(_router));
    vm.prank(admin);
    connext.removeRouter(_router);
    assertTrue(!connext.approvedRouters(_router));
  }
}
