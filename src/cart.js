window.addEventListener('load', () => {
	const products = JSON.parse(localStorage.getItem('cart'));
	console.log(products);
	const productCards = products
		.map(
			(product) =>
				`<div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
      </div>
    </div>`
		)
		.join('');
	document.querySelector('.cart-container').innerHTML = productCards;
});
