module.exports = function(element) {
	const productContainer = document.createElement('div')
	productContainer.className = 'product-container'
	products.forEach((item) => {
		const product = document.createElement('div')
		product.className = 'item'
		const image = document.createElement('img')
		image.setAttribute('src', item.image)
		const price = document.createElement('p')
		price.innerText = item.price
		const title = document.createElement('h3')
		title.innerText = item.name
		const purchase = document.createElement('div')
		purchase.className = 'buy-now'
		const button = createButtons('Buy Now')
		purchase.append(button, price)

		product.append(image, title, purchase)
		return productContainer.append(product)
	})
	element.appendChild(productContainer)
}
