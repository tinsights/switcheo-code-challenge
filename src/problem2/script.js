const ethAddressInput = document.querySelector("#input-address");

ethAddressInput.addEventListener("change", () => {
  try {
    const checksummedAdd = ethers.getAddress(ethAddressInput.value);
    ethAddressInput.value = checksummedAdd;
    ethAddressInput.style = "border: 2px solid green;";
  } catch (err) {
    ethAddressInput.style = "border: 2px solid red;";
  }
});
