// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

// Imports
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{

    // OpenZappline Veriables
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //Contract Variables
    address contractAddress;

    constructor(address marketPlaceAddress) ERC721("Formula One Token", "F1T"){
        contractAddress = marketPlaceAddress;
    }

    // create Token
    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        setApprovalForAll(contractAddress, true); 
        return newTokenId;
    }
}
