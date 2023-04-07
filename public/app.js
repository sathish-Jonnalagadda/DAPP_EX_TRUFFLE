<script>
  document.getElementById("connect").onclick = async () => {
    if (typeof window.ethereum !== "undefined") {
      await ethereum.request({ method: "eth_requestAccounts" });
      window.location.href = "services.html";
    } else {
      alert("Please install MetaMask to use this dApp!");
    }
  };
</script>
