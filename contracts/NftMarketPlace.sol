//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Imports
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract NftMarketPlace is ReentrancyGuard {
    // OpenZappline Veriables
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _tolenSold;

    //Contract Variables
    address payable owner;
    uint256 listingPrice = 0.025 ether;

    // Events
    event marketItemCreated(
        uint indexed itemId,
        address indexed nftcontract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor() {
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint itemId;
        address nftcontract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    // To create Items in a market
    function createMaarketItems(
        address nftcontract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must me atlist 1 wei...");
        require(msg.value == listingPrice, "Opps! The ampount is not enough...");

        // to get the Token ID
        _tokenIds.increment();
        uint256 itemId = _tokenIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftcontract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false
        );

        // this will give the owner ship of the item to the contract(to tracnset it to the buyer).
        IERC721(nftcontract).transferFrom(msg.sender, address(this), tokenId);
        emit marketItemCreated(
            itemId,
            nftcontract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    // To sele the Items in market
    function createMarketSale(address nftcontract, uint256 itemId)
        public
        payable
        nonReentrant
    {
        //variables
        uint price = idToMarketItem[itemId].price;
        uint tokenId = idToMarketItem[itemId].tokenId;

        require(
            msg.value == price,
            "The price is not correct, please submit the asking price..."
        );

        idToMarketItem[itemId].seller.transfer(msg.value); // send the amount to the item owner
        IERC721(nftcontract).transferFrom(address(this), msg.sender, tokenId); // transefer ownership to the buyer
        idToMarketItem[itemId].owner = payable(msg.sender);
        idToMarketItem[itemId].sold = true;
        _tolenSold.increment();
        payable(owner).transfer(listingPrice);
    }

    // View functions
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // get the unsolde NFTs
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        //  function variables
        uint itemCount = _tokenIds.current();
        uint unSoldItems = itemCount - _tolenSold.current();
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItems);
        for (uint i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Get the NFTs owned by the user
    function fetchMyNfts() public view returns (MarketItem[] memory) {
        //  function variables
        uint totalItemsCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemsCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemsCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // Get the NFTs which created by the user
    function fetchItemsCreated() public view returns (MarketItem[] memory) {
        //  function variables
        uint totalItemsCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemsCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemsCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
