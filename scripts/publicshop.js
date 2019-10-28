(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { createButtons } = require('../../tools')
const createLinks = require('./NavLinks')

module.exports = function(body) {
	const linkContainer = createLinks()
	const nav = document.createElement('nav')

	const logInContainer = document.createElement('div')
	logInContainer.classList.add('log-in')

	const logInToggleButton = createButtons('Log In', {
		type: 'id',
		title: 'toggle-btn'
	})

	logInContainer.appendChild(logInToggleButton)
	nav.appendChild(logInContainer)
	nav.appendChild(linkContainer)
	body.appendChild(nav)
}

},{"../../tools":9,"./NavLinks":2}],2:[function(require,module,exports){
module.exports = function() {
	const linkText = ['Home', 'Shop', 'About']
	const linkContainer = document.createElement('div')
	linkContainer.setAttribute('class', 'links')
	for (let i = 0; i < linkText.length; i++) {
		const link = document.createElement('a')
		link.innerText = linkText[i]
		link.setAttribute(
			'href',
			i === 0 ? '/' : `./pages/${linkText[i].toLowerCase()}.html`
		)
		linkContainer.appendChild(link)
	}
	return linkContainer
}

},{}],3:[function(require,module,exports){
module.exports = function(element) {
	const snack = document.createElement('div')
	snack.className = 'snack'
	element.appendChild(snack)
}

},{}],4:[function(require,module,exports){
const snack = require('../common/Snack')
module.exports = function(element) {
	const filterContainer = document.createElement('div')
	filterContainer.className = 'filter-container'

	if (filters.length) {
		snacks.forEach((snack) => filterContainer.appendChild(snack))
	}
	return filterContainer
}

},{"../common/Snack":3}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
const { createInputs, createButtons } = require('../../tools')

module.exports = function(element) {
	const params = [
		{ name: 'search', type: 'text', value: query, required: true }
	]
	const searchContainer = document.createElement('div')
	const inputContainer = document.createElement('div')
	inputContainer.className = 'search-input'
	createInputs(1, inputContainer, params, setQuery)
	const button = createButtons('Search')
	inputContainer.appendChild(button)
	searchContainer.className = 'search-container'
	searchContainer.appendChild(inputContainer)
	element.appendChild(searchContainer)
}

},{"../../tools":9}],7:[function(require,module,exports){
const searchContainer = require('./SearchContainer')
const filterContainer = require('./FilterContainer')
module.exports = function(body) {
	const container = document.createElement('div')
	container.className = 'container'
	searchContainer(container)
	container.appendChild(filterContainer())
	body.appendChild(container)
	return container
}

},{"./FilterContainer":4,"./SearchContainer":6}],8:[function(require,module,exports){
const Nav = require('../../components/common/Nav')
const ShopContainer = require('../../components/shop/ShopContainer')
const FilterContainer = require('../../components/shop/FilterContainer')
const SearchContainer = require('../../components/shop/SearchContainer')
const ProductContainer = require('../../components/shop/ProductContainer')

module.exports = function() {
	const body = document.querySelector('body')

	Nav(body)
}

},{"../../components/common/Nav":1,"../../components/shop/FilterContainer":4,"../../components/shop/ProductContainer":5,"../../components/shop/SearchContainer":6,"../../components/shop/ShopContainer":7}],9:[function(require,module,exports){
function createListItems(items, element) {
	const ul = document.createElement('ul')
	for (let i = 0; i < items.length; i++) {
		const listItem = document.createElement('li')
		listItem.innerText = items[i]
		ul.appendChild(listItem)
	}
	element.appendChild(ul)
}

function createButtons(text, attribute) {
	const button = document.createElement('button')
	button.innerText = text
	if (attribute) button.setAttribute(attribute.type, attribute.title)

	return button
}

function createInputs(num, element, params) {
	for (let i = 0; i < num; i++) {
		const inputContainer = document.createElement('div')
		inputContainer.classList.add('input')
		const input = document.createElement('input')
		const label = document.createElement('label')
		const span = document.createElement('span')

		for (let j = 0; j < params.length; j++) {
			label.setAttribute('for', params[i].name)
			span.innerText =
				params[i].name[0].toUpperCase() + params[i].name.substring(1)

			input.setAttribute('name', params[i].name)
			input.setAttribute('type', params[i].type)
			if (params[j].required === true) {
				input.setAttribute('required', '')
			}
		}
		label.appendChild(span)
		inputContainer.appendChild(input)
		inputContainer.appendChild(label)
		element.appendChild(inputContainer)
	}
	return element
}

function createHeaders(title) {
	const header = document.createElement('h3')
	header.innerText = title
	return header
}

module.exports = {
	createHeaders,
	createInputs,
	createListItems,
	createButtons
}

},{}]},{},[8]);
