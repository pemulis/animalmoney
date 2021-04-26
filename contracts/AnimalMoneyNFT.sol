pragma solidity ^0.6.12;
import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";

contract AnimalMoneyToken is ERC721PresetMinterPauserAutoId {
  constructor() public ERC721PresetMinterPauserAutoId("Animal Money NFT", "ANIMALNFT", "https://animal.money/") {}
}
