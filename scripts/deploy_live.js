const { ethers, upgrades } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Polygon addresses
    const authContractAddress = "0x9928D9e849317983760a61FC486696001f387C6E";

    const contractFactory = await hre.ethers.getContractFactory("SelfkeyDaoVoting");
    const contract = await upgrades.deployProxy(contractFactory, [authContractAddress]);
    await contract.deployed();

    console.log("Deployed contract address:", contract.address);

    //const signer = "0x89145000ADBeCe9D1FFB26F645dcb0883bc5c3d9";
    //console.log("Controller wallet address:", signer);
    //await contract.changeAuthorizedSigner(signer);

    // await contract.createProposal('Mint Self', true);

    // INFO: verify contract after deployment
    // npx hardhat verify --network polygon 0x076c1B1758A77F5f51Ef2616e97d00fC6350A8Bc
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
