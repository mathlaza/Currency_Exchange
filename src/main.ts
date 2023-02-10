const btnSearch = <HTMLButtonElement>document.querySelector('#btn-search');
const coinInput = <HTMLInputElement>document.querySelector('#coin-input');

function fetchApi(coin: string) {
  const endpoint = `https://api.exchangerate.host/latest?base=${coin}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

function renderCoins(coins: (string | number)[][]) {
  const ul = <HTMLBodyElement>document.querySelector('#coins');
  ul.innerHTML = '';

  coins.forEach((coin) => {
    const li = document.createElement('li');
    li.innerText = `${coin[0]} ${coin[1]}`;
    ul.appendChild(li);
  });
}



function handleSearch() {
  const coinTexted: string = coinInput.value.toUpperCase();
  const titleCoin = <HTMLBodyElement>document.querySelector('#title-coin');

  fetchApi(coinTexted).then(({ rates }) => {
    const coins: [string, number][] = Object.entries(rates);

    // Checks if coin exists
    const coinExists = coins.some((coin) => {
      return coin[0] === coinTexted;  
    });
    
    // If coin exists, render it
    if (coinExists) {
      titleCoin.innerHTML = `Valor referente a 1 ${coinTexted}`;
      renderCoins(coins);
    }
  });
}

btnSearch.addEventListener('click', handleSearch);
