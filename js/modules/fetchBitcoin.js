export default function fetchBitcoin(url, target) {
  const btcPreco = document.querySelector(target);
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    });
}
