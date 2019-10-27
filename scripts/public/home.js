(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function() {
	let loginButton = document.getElementById('toggle-btn')
	let loginForm = document.querySelector('.login-card')

	loginButton.addEventListener('click', () => {
		if (loginForm.classList.contains('closed')) {
			loginForm.classList.remove('closed')
			loginForm.classList.add('open')
			loginForm.classList.remove('hidden')
		} else {
			loginForm.classList.add('closed')
			loginForm.classList.remove('open')
			setTimeout(() => loginForm.classList.add('hidden'), 1000)
		}
	})
}

},{}],2:[function(require,module,exports){
const { createHeaders, createListItems } = require('../tools')
module.exports = function(body) {
	const brands = ['Nike', 'Adidas', 'Gucci', 'Cole Haan', 'Rolex', 'Supreme']
	const brandSection = document.createElement('section')
	const header = createHeaders('Products By')
	brandSection.className = 'brands'
	brandSection.appendChild(header)
	createListItems(brands, brandSection)

	body.appendChild(brandSection)
}

},{"../tools":10}],3:[function(require,module,exports){
const renderSignUpCard = require('./SignUpCard')
module.exports = function(body) {
	const hero = document.createElement('div')
	const left = document.createElement('div')
	const right = document.createElement('div')
	left.classList.add('left')
	right.classList.add('right')
	right.appendChild(renderSignUpCard())
	hero.append(left, right)
	hero.classList.add('hero')
	body.appendChild(hero)
}

},{"./SignUpCard":8}],4:[function(require,module,exports){
const { createListItems } = require('../tools')
module.exports = function(body) {
	const items = ['Policy', 'Contact', 'Terms and Conditions']
	const footer = document.createElement('footer')
	const adminLinks = document.createElement('div')
	const copyright = document.createElement('h4')
	const designer = document.createElement('p')
	designer.innerText = 'Design by Andre Pato'
	footer.className = 'main-footer'
	copyright.innerText = 'Copyright \u00A9 Andre Pato 2019'
	adminLinks.className = 'admin'
	createListItems(items, adminLinks)
	footer.append(adminLinks, copyright, designer)
	body.appendChild(footer)
}

},{"../tools":10}],5:[function(require,module,exports){
const { createInputs, createButtons, createHeaders } = require('../tools/')
const LoginCardControl = require('../Events/CardControl')
module.exports = function(body) {
	const inputParams = [
		{ name: 'username', type: 'text', required: true },
		{ name: 'password', type: 'password', required: true }
	]
	const loginCard = document.createElement('div')
	loginCard.classList.add('login-card', 'closed', 'hidden')
	const formContainer = document.createElement('div')
	const loginForm = document.createElement('form')
	const formHeader = createHeaders('Sign In')
	const loginButton = createButtons('Sign In')
	const triangle = document.createElement('div')
	triangle.className = 'triangle'
	formContainer.classList.add('form')
	formContainer.append(formHeader, loginForm)
	loginCard.append(triangle, formContainer)

	createInputs(2, loginForm, inputParams)
	loginForm.appendChild(loginButton)
	body.appendChild(loginCard)
	LoginCardControl()
}

},{"../Events/CardControl":1,"../tools/":10}],6:[function(require,module,exports){
const { createButtons } = require('../tools/')
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

},{"../tools/":10,"./NavLinks":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
const { createHeaders, createButtons, createInputs } = require('../tools/')
module.exports = function() {
	const params = [
		{ name: 'name', type: 'text', required: true },
		{ name: 'email', type: 'email', required: true },
		{ name: 'username', type: 'text', required: true },
		{ name: 'password', type: 'password', required: true }
	]
	const formContainer = document.createElement('div')
	formContainer.className = 'form'
	const form = document.createElement('form')
	const formHeader = createHeaders('Sign Up')
	formContainer.appendChild(formHeader)
	createInputs(4, form, params)
	const button = createButtons('Sign Up')
	form.appendChild(button)
	formContainer.appendChild(form)
	return formContainer
}

},{"../tools/":10}],9:[function(require,module,exports){
const renderNav = require('../../components/Nav')
const renderLoginCard = require('../../components/LoginCard')
const renderContainer = require('../../components/Container')
const renderBrandSection = require('../../components/BrandSection')
const renderFooter = require('../../components/Footer')

function Main() {
	const body = document.querySelector('body')

	renderNav(body)
	renderLoginCard(body)
	renderContainer(body)
	renderBrandSection(body)
	renderFooter(body)
}

document.onload = Main()

},{"../../components/BrandSection":2,"../../components/Container":3,"../../components/Footer":4,"../../components/LoginCard":5,"../../components/Nav":6}],10:[function(require,module,exports){
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

},{}]},{},[9]);
