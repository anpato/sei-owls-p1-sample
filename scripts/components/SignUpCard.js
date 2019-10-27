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
