const hre = require("hardhat");

async function main() {

  // Dploy Market plsce 
  const NFTMarket = await hre.ethers.getContractFactory("NftMarketPlace");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();
  console.log("nftMrket deployed to: ", nftMarket.address);

  /// Dploy NFTs
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(nftMarket.address);
  await nft.deployed();
  console.log("nft deployed to: ", nft.address);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
