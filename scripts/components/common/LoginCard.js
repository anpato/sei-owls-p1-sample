const { createInputs, createButtons, createHeaders } = require('../../tools')
const LoginCardControl = require('../../Events/CardControl')
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
