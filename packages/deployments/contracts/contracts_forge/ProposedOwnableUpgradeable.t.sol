// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import "./ForgeHelper.sol";

import "../contracts/ProposedOwnableUpgradeable.sol";

contract ProposedOwnableUpgradeableTest is ForgeConnextHelper {
  // ============ Libraries ============
  using stdStorage for StdStorage;

  // ============ Storage ============

  address successor = address(2);

  // ============ Test set up ============

  function setUp() public {
    setConnext();
  }

  // ============ Utils ============

  function proposeRouterOwnershipRenunciation(uint256 timestamp) public {
    assertTrue(!connext.renounced());
    assertTrue(!connext.isRouterOwnershipRenounced());
    vm.warp(timestamp);
    vm.prank(connext.owner());
    connext.proposeRouterOwnershipRenunciation();
    assertTrue(connext.routerOwnershipTimestamp() == timestamp);
  }

  function renounceRouterOwnership(uint256 timestamp) public {
    proposeRouterOwnershipRenunciation(timestamp);
    vm.warp(timestamp + connext.delay() + 1);
    vm.prank(connext.owner());
    connext.renounceRouterOwnership();
    assertTrue(!connext.renounced());
    assertTrue(connext.isRouterOwnershipRenounced());
  }

  function proposeAssetOwnershipRenunciation(uint256 timestamp) public {
    assertTrue(!connext.renounced());
    assertTrue(!connext.isAssetOwnershipRenounced());
    vm.warp(timestamp);
    vm.prank(connext.owner());
    connext.proposeAssetOwnershipRenunciation();
    assertTrue(connext.assetOwnershipTimestamp() == timestamp);
  }

  function renounceAssetOwnership(uint256 timestamp) public {
    proposeAssetOwnershipRenunciation(timestamp);
    vm.warp(timestamp + connext.delay() + 1);
    vm.prank(connext.owner());
    connext.renounceAssetOwnership();
    assertTrue(!connext.renounced());
    assertTrue(connext.isAssetOwnershipRenounced());
  }

  function proposeNewOwner(address newOwner, uint256 timestamp) public {
    assertTrue(!connext.renounced());
    vm.warp(timestamp);
    vm.prank(admin);
    connext.proposeNewOwner(newOwner);
    assertTrue(connext.proposed() == newOwner);
    assertTrue(connext.proposedTimestamp() == timestamp);
  }
  
  function transferOwnership(address newOwner, uint256 timestamp) public {
    proposeNewOwner(newOwner, timestamp);
    vm.warp(timestamp + connext.delay() + 1);
    if (newOwner != address(0)) {
      vm.prank(newOwner);
      connext.acceptProposedOwner();
    } else {
      vm.prank(connext.owner());
      connext.renounceOwnership();
      assertTrue(connext.renounced());
    }
    assertTrue(connext.owner() == newOwner);
  }

  // ============ proposeRouterOwnershipRenunciation ============

  // should fail if router ownership is already renounced
  function testAlreadyRenouncedProposeRouterOwnershipRenunciation() public {
    renounceRouterOwnership(123456);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__proposeRouterOwnershipRenunciation_noOwnershipChange.selector));
    connext.proposeRouterOwnershipRenunciation();
  }

  // Should work
  function testProposeRouterOwnershipRenunciation() public {
    proposeRouterOwnershipRenunciation(123456);
  }

  // ============ renounceRouterOwnership ============

  // should fail if router ownership is already renounced
  function testAlreadyRenouncedRenounceRouterOwnership() public {
    renounceRouterOwnership(123456);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceRouterOwnership_noOwnershipChange.selector));
    connext.renounceRouterOwnership();
  }

  // should fail if no proposal was made
  function testNoProposalRenounceRouterOwnership() public {
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceRouterOwnership_noProposal.selector));
    connext.renounceRouterOwnership();
  }

  // should fail if delay has not elapsed
  function testNoDelayRenounceRouterOwnership() public {
    uint256 timestamp = 123456;
    proposeRouterOwnershipRenunciation(timestamp);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceRouterOwnership_delayNotElapsed.selector));
    connext.renounceRouterOwnership();
  }

  // Should work
  function testRenounceRouterOwnership() public {
    renounceRouterOwnership(12345);
  }

  // ============ proposeAssetOwnershipRenunciation ============

  // should fail if asset ownership already renounced
  function testAlreadyRenouncedProposeAssetOwnershipRenunciation() public {
    renounceAssetOwnership(123456);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__proposeAssetOwnershipRenunciation_noOwnershipChange.selector));
    connext.proposeAssetOwnershipRenunciation();
  }

  // Should work
  function testProposeAssetOwnershipRenunciation() public {
    proposeAssetOwnershipRenunciation(12345);
  }

  // ============ renounceAssetOwnership ============

  // should fail if asset ownership is already renounced
  function testAlreadyRenouncedRenounceAssetOwnership() public {
    renounceAssetOwnership(123456);
    assertTrue(connext.isAssetOwnershipRenounced());
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceAssetOwnership_noOwnershipChange.selector));
    connext.renounceAssetOwnership();
  }

  // should fail if no proposal was made
  function testNoProposalRenounceAssetOwnership() public {
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceAssetOwnership_noProposal.selector));
    connext.renounceAssetOwnership();
  }

  // should fail if delay has not elapsed
  function testNoDelayRenounceAssetOwnership() public {
    uint256 timestamp = 123456;
    proposeAssetOwnershipRenunciation(timestamp);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceAssetOwnership_delayNotElapsed.selector));
    connext.renounceAssetOwnership();
  }

  // Should work
  function testRenounceAssetOwnership() public {
    renounceAssetOwnership(12345);
  }

  // ============ proposeNewOwner ============

  // should fail if not called by owner
  function testOnlyOwnerCanProposeNewOwner() public {
    vm.expectRevert(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__onlyOwner_notOwner.selector);
    connext.proposeNewOwner(successor);
  }

  // should fail if proposing the owner
  function testProposeSameOwner() public {
    vm.prank(admin);
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__proposeNewOwner_noOwnershipChange.selector));
    connext.proposeNewOwner(admin);
  }

  // should fail if proposing the same address as what is already proposed
  function testProposeDuplicateNewOwner() public {
    vm.startPrank(admin);
    connext.proposeNewOwner(successor);
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__proposeNewOwner_invalidProposal.selector));
    connext.proposeNewOwner(successor);
    vm.stopPrank();
  }

  // Should work
  function testProposeNewOwner() public {
    proposeNewOwner(successor, 123456);
  }

  // ============ renounceOwnership ============

  // should fail if there was no proposal
  function testNoProposalRenounceOwnership() public {
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceOwnership_noProposal.selector));
    connext.renounceOwnership();
  }

  // should fail if the delay hasnt elapsed
  function testNoDelayRenounceOwnership() public {
    uint256 timestamp = 123456;
    proposeNewOwner(address(0), timestamp);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceOwnership_delayNotElapsed.selector));
    connext.renounceOwnership();
  }

  // should fail if the proposed != address(0)
  function testCorrectProposalRenounceOwnership() public {
    uint256 timestamp = 123456;
    proposeNewOwner(successor, timestamp);
    vm.warp(timestamp + connext.delay() + 1);
    vm.prank(connext.owner());
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__renounceOwnership_invalidProposal.selector));
    connext.renounceOwnership();
  }

  // should fail if not called by owner
  function testOnlyOwnerRenounceOwnership() public {
    uint256 timestamp = 123456;
    proposeNewOwner(address(0), timestamp);
    vm.warp(timestamp + connext.delay() + 1);
    vm.prank(successor);
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__onlyOwner_notOwner.selector));
    connext.renounceOwnership();
  }

  // Should work
  function testRenounceOwnership() public {
    transferOwnership(address(0), 123456);
  }

  // ============ acceptProposedOwner ============

  // Should fail if not called by proposed
  function testOnlyProposedCanAccept() public {
    uint256 timestamp = 123456;
    proposeNewOwner(successor, timestamp);
    vm.warp(timestamp + 8 days);
    vm.prank(admin);
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__onlyProposed_notProposedOwner.selector));
    connext.acceptProposedOwner();
  }

  // Should fail if delay has not elapsed
  function testAcceptProposedShouldWaitForDelay() public {
    uint256 timestamp = 123456;
    proposeNewOwner(successor, timestamp);
    vm.prank(successor);
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__acceptProposedOwner_delayNotElapsed.selector));
    connext.acceptProposedOwner();
  }

  // Should fail if there is no change in ownership
  function testUnnecessaryAcceptProposedOwner() public {
    transferOwnership(successor, 123456);
    vm.expectRevert(abi.encodeWithSelector(ProposedOwnableUpgradeable.ProposedOwnableUpgradeable__acceptProposedOwner_noOwnershipChange.selector));
    vm.prank(successor);
    connext.acceptProposedOwner();
  }

  // Should work
  function testAcceptProposedOwner() public {
    transferOwnership(successor, 12345);
  }
}