const btnSearch = <HTMLButtonElement>document.querySelector('#btn-search');
const coinInput = <HTMLInputElement>document.querySelector('#coin-input');

function handleSearch() {
  console.log(coinInput.value);
}

btnSearch.addEventListener('click', handleSearch);
