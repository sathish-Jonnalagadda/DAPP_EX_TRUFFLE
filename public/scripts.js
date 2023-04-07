document.addEventListener("DOMContentLoaded", async () => {
  if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);

    // Get the connected account and its balance
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    document.getElementById("account").innerText = `Account: ${account}`;

    web3.eth.getBalance(account, (err, balance) => {
      if (err) {
        console.error(err);
        return;
      }
      document.getElementById(
        "balance"
      ).innerText = `Balance: ${web3.utils.fromWei(balance, "ether")} ETH`;
    });
  } else {
    alert("Please install MetaMask to use this dApp!");
  }
});
