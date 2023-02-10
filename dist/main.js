"use strict";
const btnSearch = document.querySelector('#btn-search');
const coinInput = document.querySelector('#coin-input');
function handleSearch() {
    console.log(coinInput.value);
}
btnSearch.addEventListener('click', handleSearch);
