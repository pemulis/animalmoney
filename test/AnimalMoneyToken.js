const { expect } = require("chai");

describe("Animal Money Token contract", function() {
  it("Deployment should succeed", async function() {
    const [owner] = await ethers.getSigners();

    const AnimalMoneyToken = await ethers.getContractFactory("AnimalMoneyToken");

    const hardhatToken = await AnimalMoneyToken.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
