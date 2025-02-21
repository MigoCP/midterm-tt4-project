import * as bootstrap from "bootstrap";
import './list-products.scss';

import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";
import gb1 from "./assets/images/pexels-gb-the-green-brand-1259697174-30801527.jpg";
import valeri from "./assets/images/pexels-valeri-mak-2319397-3989394.jpg";
import gb2 from "./assets/images/pexels-gb-the-green-brand-1259697174-30801235.jpg";
import craytivr from "./assets/images/pexels-craytive-1464625.jpg";
import aditi from "./assets/images/pexels-aditi-ahalawat-2062245-6666403.jpg";
import shiny from "./assets/images/pexels-shiny-diamond-3373725.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productListContainer = document.getElementById('product-list');
    const products = [
        { name: 'Hippie-Style skirt', description: 'For beautiful ladies.', price: "$99", image: enginakyurt },
        { name: 'Masterclass Hublot X150', description: 'Timeless.', price: "$1599", image: quangVietNguyen },
        { name: 'Handcrafted Cucumber Soap', description: 'Canadian craft.', price: "$29", image: yaazhini },
        { name: 'Flush Cleaner', description: 'Quick and easy.', price: "$39", image: gb1 },
        { name: 'Lady Perfume', description: 'Sensual.', price: "$199", image: valeri },
        { name: 'CBD Oil', description: 'Canadian grown.', price: "$29", image: gb2 },
        { name: 'Running Shoes', description: 'Great for athletes.', price: "$259", image: craytivr },
        { name: 'Make-up Kit', description: 'Feel beautiful.', price: "$79", image: aditi },
        { name: 'Lipstick', description: 'Rose-Pink tonality.', price: "$17", image: shiny }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <h6 class="text-success">${product.price}</h6>
                    <button class="btn btn-success float-end">Add to Cart</button>
                </div>
            </div>
        `;
        productListContainer.appendChild(cardDiv);
    });
});
