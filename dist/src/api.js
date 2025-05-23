"use strict";
async function fetchData(url) {
    const data = await fetch(url);
    const raw = await data.json();
    return {
        data: raw,
        error: null,
    };
}
fetchData('https://dummyjson.com/products').then((res) => console.log(res.data.products[0]));
