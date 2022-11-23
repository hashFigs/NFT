const CONTRACT_ADDRESS = "0x71768Cdcf98fE49b89C190FB20FFfF77b0A50485"
const META_DATA_URL = "ipfs://bafyreiabckyvqmp4yyqjsd4cvfmtsumkewfszv7vr6rhgckftbwpyt7cou/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ExampleNFT = await ethers.getContractFactory("ExampleNFT")
   const [owner] = await ethers.getSigners()
   await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });