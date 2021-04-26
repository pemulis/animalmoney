async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AnimalMoneyNFTContract = await ethers.getContractFactory("AnimalMoneyNFT");
  console.log(AnimalMoneyNFTContract);
  const nftContract = await AnimalMoneyNFTContract.deploy();

  console.log("Animal Money NFT contract address:", nftContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
