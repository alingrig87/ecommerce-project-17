// import { showDetails, showDetails2 } from './details.js';
// import { Product } from './Product.js';

// showDetails();
// showDetails2();

// var product1 = new Product(1, 'Iphone 13', 1999, 'New 2021 iphone');
// console.log(product1);

window.addEventListener('load', async () => {
	const productsURL = 'https://61e0713863f8fc0017618791.mockapi.io/products';
	const result = await fetch(productsURL);
	const products = await result.json();

	const productContainer = document.querySelector('.products-container');

	const cards = products
		.map(
			(product) =>
				`<div class="card" style="width: 18rem;">
               <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price}</p>
                  <a href="details.html?product-id=${product.id}" class="btn btn-primary">Details</a>
               </div>
            </div>`
		)
		.join('');

	productContainer.innerHTML = cards;
});
