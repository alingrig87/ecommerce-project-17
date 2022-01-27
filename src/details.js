// export function showDetails() {
// 	console.log('details');
// }

// export function showDetails2() {
// 	console.log('details2');
// }

window.addEventListener('load', async () => {
	let searchParamString = window.location.search;

	const searchParam = new URLSearchParams(searchParamString);
	const productId = searchParam.get('product-id');

	const productURL = `https://61e0713863f8fc0017618791.mockapi.io/products/${productId}`;
	const result = await fetch(productURL);
	const product = await result.json();

	const productCard = `
		<div class="card">
			<div class="card-header">
	  			Product Details
			</div>
			<div class="card-body">
	  			<h5 class="card-title">${product.name}</h5>
	  			<p class="card-text">${product.description}</p>
	  			<p class="card-text">${product.price}</p>
	  			<button data-product-id=${product.id} class="add-to-cart btn btn-primary">Add to cart</button>
			</div>
 		</div>`;

	document.querySelector('.product-details').innerHTML = productCard;
});

document.querySelector('.product-details').addEventListener('click', addToCart);
async function addToCart(event) {
	const addToCartBtn = event.target;
	let productId = addToCartBtn.getAttribute('data-product-id');

	const productURL = `https://61e0713863f8fc0017618791.mockapi.io/products/${productId}`;
	const result = await fetch(productURL);
	const product = await result.json();

	let cart;
	if (localStorage.getItem('cart') == null) {
		cart = [product];
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart.push(product);
	}

	console.log(cart);

	localStorage.setItem('cart', JSON.stringify(cart));
}
